---
title: "Inertia.js - SPA without REST API"
image: https://i.imgur.com/xqOwj7sh.png
lazy: https://i.imgur.com/xqOwj7st.png
thumbnail: https://i.imgur.com/xqOwj7sl.png
date: 11 September 2022
description: Have you ever thought of building a Single Page Application (SPA) without making API calls?
read: 6
tags:

- Programming
- Web Development

---

I’m sure most of you have seen websites that don’t seem to reload when going to different page,
and this is what we called **SPA (Single Page Application)**. SPA feels as though we are using a
native app where there is zero delay between pages.

This article discusses on <h-link href="https://inertiajs.com">Inertia.js</h-link>,
which allows us to implement **SPA without Rest API**, feel free to read on if you’re interested! 🤩

## The Classical Multipage Applications (MPA)

<post-image img="https://i.imgur.com/AVC8GyCl.png" alt="SPA vs MPA"
lazy="https://i.imgur.com/AVC8GyCt.png">
SPA vs MPA (source: <h-link href="https://lvivity.com/single-page-app-vs-multi-page-app">Lvivity</h-link>)
</post-image>

How did we retrieve data from backend in the past 👴? Mostly through **transferring HTML files populated with data**,
hence resulting in the usual reloading for any action, but what’s wrong with it?
Every page reloaded will be accompanied by some extra overhead time to load the resources 🐢.

Furthermore, the **native app feeling** (0 delay between page switch) that comes with SPA is something that MPA
cannot give, especially when we are getting more used to the smooth transitioning between pages nowadays,
and we aren’t going backward.

## Implementing SPA

<post-image img="https://i.imgur.com/u7L87Zzh.png" alt="Reddit Loading"
lazy="https://i.imgur.com/u7L87Zzt.png">
Reddit is an example of SPA, it is loading the content by showing skeletons
</post-image>

How do we implement SPA normally? The easiest first step is to find a **frontend framework**, and usually
you can find thousands, if not more, guides on how to implement SPA with the framework 🤓.

Normally, in SPA, **frontend and backend tends to live in different world**, frontend allows you to navigate 
different pages, and displays the data, while backend will handle API requests from frontend and returns
the data to be displayed.

However, this architecture is not simple to implement too, there are various additional considerations
to be taken into account which requires difficult decisions:

1. Keeping track of the **current state** of the system: State Management
2. **Authentication method**: Token Storage? Regular Ping?
3. What if a request **fails**: Popups? Snackbars? Error Messages?
4. How do you **signify** the user that you’re indeed processing their request: Skeletons
5. **Double Validations**: Validate data on frontend and backend
6. What if the user leaves the page while you’re processing a request?

and the list goes on…

Therefore, SPA is not simple to be implemented on its own, but it will greatly boost the **performance** and 
**user experience**, so could we make it simpler? 🤔

## The Savior: Inertia.js

<post-image img="https://i.imgur.com/SJjhKGBh.png" alt="Inertia.js landing page"
lazy="https://i.imgur.com/SJjhKGBt.png">
Promise of <h-link href="https://inertiajs.com">Inertia.js</h-link>
</post-image>

According to Inertia, it allows fully client-side rendered, SPA without the complexity mentioned earlier.
With it, we can avoid the trouble of communication through APIs, hence making our lives easier! 🤯

### How does it Work

This article isn’t really a tutorial, so if you were to look for a thorough guide on Inertia.js, 
do go ahead and check out their <h-link href="https://inertiajs.com">website</h-link>!

Nevertheless, here’s how it works basically: Backend will send every data that frontend requires on every page load.

```php
// Response of a PHP route
return inertia('User/Show', [
    // These are the props of the page component
    'user' => $user,
]);
```

All that needs to be done are designing the page with the prop inside

```jsx
<template>
  <Layout>
    <Head title="Welcome" />
    <h1>Welcome</h1>
    <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>
  </Layout>
</template>

<script>
  import Layout from './Layout'
  import { Head } from '@inertiajs/inertia-vue'

  export default {
    components: {
      Head,
      Layout,
    },
    props: {
      user: Object,
    },
  }
</script>
```

What do you think about this? No more API calls, no more Axios, and that is great! 
Our life becomes simpler now.

## The Catch

The reality is, everything comes with a cost 😔. As for Inertia.js, it does make our lives simpler, 
but without proper planning, **performance will decrease rapidly**. Say, you have a list of users, 
and you allow them to be filtered with different options:

```php
return inertia('User/List', [
    // These are the props of the page component
    'user' => $user,
    // These are the options for frontend's filter to show
    'options' => [
        'categories' => ...,
        'groups' => ...,
        'countries' => ...,
 ]);
```

What happens is that during initial page load, everything will be **loaded synchronously**. Meanwhile,
with the common API way, the option might be lazily loaded only when the user opens the dropdown filter,
or it is being called after the page is loaded, which helps in serving content more quickly.

<post-image img="https://i.imgur.com/sWQTP9th.png" alt="Facebook's notifications"
lazy="https://i.imgur.com/sWQTP9tt.png">
Facebook only loads its notifications when we need it (lazy loading)
</post-image>

Nevertheless, Inertia does offer <h-link href="https://inertiajs.com/partial-reloads">Partial reloads</h-link> 
which allows certain values to be loaded on demand, which somewhat did help in improving the performance.

## My Take

From my perspective, we do not need to go on to extremes and abandon one option for another. We can
use a **hybrid model**, where some data are loaded through inertia while the others through API.
Effectively, there is no **bad performance, only bad design decisions**. 🤠
