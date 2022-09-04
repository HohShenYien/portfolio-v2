---
title: "Junior POV: Data Structure & Algorithms"
image: https://i.imgur.com/KuUKPaah.png
lazy: https://i.imgur.com/KuUKPaat.png
thumbnail: https://i.imgur.com/KuUKPaal.png
date: 21 August 2022
description: An opinion of a junior programmer on the purpose of learning Data Structure & Algorithms
read: 8
tags:

- Junior POV
- Programming

---

**Data Structure & Algorithms** — A fancy name for problem-solving techniques. 

<post-image img="https://i.imgur.com/UYZUK4Kl.png" alt="A meme on DSA"
lazy="https://i.imgur.com/UYZUK4Kt.png">
DSA is often considered the hardest subject in degree, so why are we learning it?
</post-image>

All of us have taken or will be taking this subject during our final year of university. 
However, it seems that this subject doesn’t appeal and is very hard to most of us,
and doesn’t seem to be important in our job, regardless of the fields (Software Engineering,
Data Analysis, AI, etc.)

Jump ahead to <h-link go-to="how-dsa-helps">Benefits of DSA</h-link> if you wanna skip my grandma stories 🧓

## What is DSA?

<post-image img="https://i.imgur.com/NVwOrbEl.png" alt="Data Structures Example"
lazy="https://i.imgur.com/NVwOrbEt.png">
Some Data Structure Examples
</post-image>

**Data Structures** represent different methods to store data efficiently while **Algorithms** are the 
different methods to solve problems. Hence, DSA teaches us how to do stuffs faster and more efficiently.

Legends have it that we can see it everywhere in our life, like stacks and queues are just everyday stuffs,
A* Search in GPS, Insertion Sort for sorting cards, etc.

## My Journey in DSA

<post-image img="https://i.imgur.com/pookzHbl.png" alt="Project Euler"
lazy="https://i.imgur.com/pookzHbt.png">
<h-link href="https://projecteuler.net/problem=49">Problem 49</h-link> of Project Euler
</post-image>

Actually, I **started to learn programming so that I could solve mathematical problems** in
<h-link href="https://projecteuler.net/">Project Euler</h-link> 
(Yes, I was a Math Fanboy back then 🤓). Thus, it is not surprising that unlike others,
I am **somewhat interested with DSA** due to its nature and how it helps me to solve more problems.

Naturally, as the problems became tougher with increasingly deeper programming concepts
like searching and recursion, I could not solve them anymore,
not to mention that my programming skill back then sucks 🤪. 
That was when I decided that I need to **settle down for a while**,
and **pick up some knowledge** before I get back to the problems.

<post-image img="https://i.imgur.com/OR161r8l.png" alt="6.006"
lazy="https://i.imgur.com/OR161r8t.png">
6.006, One of the best courses I have taken
</post-image>

Then, by chance, I stumbled upon <h-link href="https://ocw.mit.edu/">MIT OCW</h-link>’s
<h-link href="https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/">6.006: Introduction to Algorithms (2011)</h-link>
and started watching it. At the beginning, it was totally alien to me, however, as time pass,
I managed to understand more along the way.

Over time, as I started to interact more with DSA, I came across some other interesting books and courses, 
like <h-link href="https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230">Grokking Algorithms</h-link>, 
<h-link href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844">The CLRS</h-link>, 
and <h-link href="https://www.coursera.org/learn/algorithms-part1](https://www.coursera.org/learn/algorithms-part1">Algorithms</h-link>. 
All these helped to foster my understanding towards DSA.

At the same time, I came across problem solving sites like <h-link href="http://leetcode.com">Leetcode</h-link>
which I enjoy solving sometimes especially when I managed to solve them of course 😆. Eventually though, 
I stopped going for more Algorithms problems and **instead put my focus on studying more frameworks** now.

## How DSA Helps

Frankly speaking, I’ve **never used a single DSA concept**, even as simple as Bubble Sort or something like 
Dynamic Programming, during work. I’ve been doing part-time development work, 
including my current internship for almost a year by now, and none of the concepts ever appear.

Nevertheless, it would be a lie if I said DSA never helped me. From my own experience, here are what I gained:

### 1. Basics

DSA has shaped my programming fundamentals, a very strong base that allowed me to pick things up quickly now.
Besides, I learned many programming features, like Python’s generator, list comprehension, and typing from the 
journey of Leetcode.

### 2. Problem Solving & Logical Thinking Skills

Furthermore, DSA will improve on these skills, which are undoubtedly important for a software engineer.
Here is a simple example, say I’m building a category table, where each category can have 1 or more subcategories,
and each subcategory can have more sub-subcategories, etc.

<post-image img="https://i.imgur.com/jsNRNQ9l.png" alt="The Menu Problem"
lazy="https://i.imgur.com/jsNRNQ9t.png">
The Head First Design Pattern's Menu Example
</post-image>

How can I build an iterator that helps me to iterate through a category and its subs, that keeps track of where 
the current iteration is at? Sounds complex? Well, it is in fact quite simple, we can use a depth first search or 
traversing a tree approach to do it! (Reference: 
<h-link href="https://www.oreilly.com/library/view/head-first-design/9781492077992/">Head First Design Pattern</h-link>)

```python
category = [
    {
        "name": "Programming Languages",
        "SubCategories": [
            {
                "name": "Object Oriented",
                "SubCategories": [
                    {"name": "Java", "SubCategories": []},
                    {"name": "Python", "SubCategories": []},
                 ],
            },
        ],
    },
    {
        "name": "Frameworks",
        "SubCategories": [
            {
                "name": "Backend",
                "SubCategories": [{"name": "Django", "SubCategories": []}],
            }
        ],
    },
]

class Category:
    def __init__(self, categories):
        # Do a shallow copy of category as inner content won't change...
        self.categories= category[:]
    def __iter__(self):
        self.stack = [cat for cat in self.categories[::-1]]
        return self
    def __next__(self):
        # Corresponds to hasNext() in Java
        if not len(self.stack):
            raise StopIteration
        # Corresponds to next() in Java
        cat = self.stack.pop()
        self.stack += cat["SubCategories"][::-1] # In correct order
        return cat

# Testing
my_categories = Category(category)
for cat in my_categories:
    print(cat["name"])
    
'''
## OUTPUT:
Programming Languages
Object Oriented
Java
Python
Frameworks
Backend
Django
'''
```

However, if the task is given to someone without some knowledge on DSA, the approach will probably not be as clean,
and the programmer will take a long time to complete it (without the use of Google, of course!)

### 3. Efficiency

<post-image img="https://i.imgur.com/2FtpKHhl.png" alt="Going faster"
lazy="https://i.imgur.com/2FtpKHht.png">
Going faster
</post-image>

This is especially applicable for those who have done some competitive programming. For instance, whenever I am implementing some feature that requires some sort of looping my mind will unconsciously remind myself what is the time complexity(how long is it going to take), could it be optimized further, etc.

Of course there would be some trade-offs when having these thoughts in mind, but it will ultimately help us in building more efficient programs 🤩🤩

## Final Words

Without doubt, I am strongly recommending everyone to pick up at least some DSA and solve some programming problems on their own to become a better developer.

Nevertheless, I don’t think it is necessary for most of us to go deep into this subject, as I said, how many times is a normal programmer going to implement algorithms like Dijkstra in my program? Probably never…

Hence, a shallow dip like going through one or two courses / books on the matter plus some exercises would be good enough.
