---
title: "Laravel’s Append, Silent Killer of Performance"
image: https://i.imgur.com/0bCuTCRh.jpg
lazy: https://i.imgur.com/0bCuTCRt.jpg
thumbnail: https://i.imgur.com/0bCuTCRl.jpg
date: 30 July 2022
description: An unknowingly small line of code may kill your website's performance
read: 6
tags:

- Laravel
- Guide
- Backend

---

A while ago, a performance issue arose during my internship whereby a form took several seconds to 
display itself 🐢🐢 Obviously, the users weren’t satisfied with this performance,
a complaint was lodged and by chance, I was given the task to optimize this issue!

PS: The codes and scenario were made up from real stories due to obvious reason.

## The Issue

A very weird thing that I noticed last time was an irregularly high number of queries.
An ordinary page would require up to hundreds of queries, that was crazy! 
Upon analyzing it, most of the queries were repetitive such that they are doing something like

```sql
SELECT * 
FROM USER u 
JOIN USER_ADDRESS ua 
ON u.id = ua.user_id 
WHERE u.id = 1;
```

<br>

with the difference being id of the user. Jump to 
<h-link go-to="the-reason">here</h-link> 
if you wanna skip the thought process.

## The Discovery Process

So initially I was looking at the queries, hundreds of them. Luckily, Laravel has a 
dubugbar which shows all the queries being made in a single route, 
and highlight the queries which appear to be repetitive like the ones below.

<post-image img="https://i.imgur.com/AC986oI.png" alt="Laravel's debugbar"
lazy="https://i.imgur.com/AC986oIt.png">
Laravel debugbar will highlight queries that appear to be duplicated
</post-image>

And so I wondered what led to this issue. A difficulty here is that despite Laravel’s 
debugbar will show the query’s stacktrace, the codes were called by Laravel’s 
framework making it difficult to dig down the issue.

## The Reason

Naturally, I came across the User model, and after some time, I noticed something interesting:

```php
public class User extends Model 
{
  protected $append = ['details'];

	public function getDetailsAttribute() 
	{
		return $this->details->value1;
	}
	
	public function details(): HasOne
	{
	  return $this->hasOne(UserDetails::class);
	}
}
```
<br>

And so an idea sparked that this must be the culprit! I don’t know how and why, 
but you know, programmer’s instinct. I began to test the idea, and voilà, 
for every User queried, <single-line-code>getDetailsAttribute</single-line-code> function will run
due to the <single-line-code>$append</single-line-code>.

### How?

<post-image img="https://i.imgur.com/PA5OqAT.png" alt="Many to One"
lazy="https://i.imgur.com/PA5OqATt.png">
Everything is linked to the User
</post-image>

Basically everything else in the system is somewhat linked to User, logically right? 
For instance, comments, posts, media, likes, shares, groups are all related to User 
(using social media as example).

Thus, whenever those resources are being queried, a mini query will run to get the attribute value
for every single user loaded. Most of the time, this attribute is not event important!

Though every query takes less than 50μs (a thousandth of a millisecond),
but it will also cost some time to process, and retrieve the query data.

All of these will then add up to the seconds.

## Solution

1. **Don’t use $append unless you are 100% sure it’s needed everywhere**. Otherwise, a lot of unnecessary queries will be made like above. Append them manually in Laravel Query.
2. Use join instead of append. Append will result in n extra queries to be made in comparison to join which is relatively cheaper. A simple solution in Laravel is by <h-link href="https://laravel.com/docs/9.x/eloquent#local-scopes](https://laravel.com/docs/9.x/eloquent#local-scopes">adding scope</h-link>.

## Bonus

Aside from the issue above, there was another issue that resulted from querying and joining large tables.
Initially to reduce the queries, I tried to add a where clause outside:

```php
$largeTable
	->join(AnotherLargeTable::class, '...', '...')
  ->where('another_large_table.values', 10);
```
<br>

It didn’t help much. With the guidance from a senior, however, I have refactored the codes above into this.

```php
$largeTable
	->join(AnotherLargeTable::class, function ($join) {
				return $join->where('another_large_table.values', 10)
           ->on('...', '...');
   });
```

<br>

Now I’ve learned that in Laravel, to speed up joins of large tables, we need to use a closure 
(the <single-line-code>function ($join)</single-line-code>) to reduce the size of tables before joining them.

## Conclusion

It was a very valuable experience for me that a tiny line may do such big effect to performance. 
Thus, it appears to me that using eager loading or appending could be bad in long run and always 
load them on demand would be better.

They may not have huge impact at start, but as database grows, the issue will then arise. 
Therefore, avoiding these tiny issues since the start would be the best way to go!
