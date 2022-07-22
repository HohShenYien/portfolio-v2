---
title: "Junior POV: Component Library vs Tailwind"
image: https://i.imgur.com/7x41bK9h.png
lazy: https://i.imgur.com/7x41bK9t.png
thumbnail: https://i.imgur.com/7x41bK9l.png
date: 21 July 2022
description: An opinion of a junior programmer on Styled Component and Tailwind
read: 7
tags:

- Junior POV
- Frontend

---

<post-image img="https://i.imgur.com/RZfrPEc.png" alt="Thinking"
lazy="https://i.imgur.com/RZfrPEct.png">
</post-image>

At the start of every project, it often breaks down to finding the right combination of libraries that will work for 
this project. Among all, the component library particularly those that are styled 
is going to have huge effect on how your project will look like! 

However, aside from component libraries, there exists CSS libraries like Tailwinds. Obviously, you’re not going to
combine tailwind with fully styled component libraries like Vuetify or Material UI, so which one to choose? 🤔

As a programmer, I have had some experiences with both of them in the past, namely Vuetify, Chakra and Material UI, 
as well as Headless UI for Tailwind.

In this blog, I will discuss from the POV of a simple programmer, which approach is more suitable?

## Wait… What are they?

<post-image img="https://i.imgur.com/G7m8soB.png" alt="Styled Component Libraries"
lazy="https://i.imgur.com/G7m8soBt.png">
<h-link href="https://vuetifyjs.com">Vuetify</h-link>, <h-link href="https://mui.com/">Material UI</h-link> and <h-link href="https://chakra-ui.com/">Chakra UI</h-link>
</post-image>

1. **Styled Component Library**

   A full suite of pre-styled library based on certain design principles. For instance, Vuetify and Material UI are both based on Material UI Principles. They provide styled components like Buttons, Form Inputs, Dialogs, and Calendars readily and easily.

    <br> Not to be mixed with <h-link href="https://styled-components.com/">Styled Component</h-link> (A component library)

<post-image img="https://i.imgur.com/Zqt4KVO.png" alt="Tailwindcss" class="mt-12"
lazy="https://i.imgur.com/Zqt4KVOt.png">
<h-link href="https://tailwindcss.com/">Tailwindcss</h-link>
</post-image>

2. **Tailwind**

   On the other hand, Tailwind is a CSS library. It provides utility classes like mx-2 or px-2 for margins and paddings.

<br>

## Component Library

<post-image img="https://i.imgur.com/BnThp6C.png" alt="Tailwindcss" class="mt-12"
lazy="https://i.imgur.com/BnThp6Ct.png">
Vuetify Component Library
</post-image>

Vuetify was the first (aside from Bootstrap, of course) Styled Component Library that I came across, and thus, 
it is no surprise that I would stick with it for many other Vue projects 😎 event this website. Why did I choose Vuetify? 

1. **Beautiful components that I can use easily.**

```vue
<template>
  <v-rating
    background-color="purple lighten-3"
    color="purple"
  ></v-rating>
</template>
```
<div class="text-center"><v-rating background-color="purple lighten-3" color="purple"></v-rating></div>

  Look at how easy it is for me to create something that would take quite some effort 🤩

2. **Many components that can’t be built easily (like calendar, dialogs, etc.) can just be taken without much hassle.**

```vue
<template>
  <v-color-picker
    dot-size="25"
    swatches-max-height="200"
  ></v-color-picker>
</template>
```
<div class="d-flex justify-center my-1"><v-color-picker dot-size="25" swatches-max-height="200"></v-color-picker></div>

I can never imagine myself coding something as this complicated 😵

Of course, these components can also be installed
through other npm packages, but it's simply much easier when all components have the same style. It also eases
the need to install multiple libraries when you have one that provides everything!

3. **Comes with own design system like Material Design, to help standardize the website’s content.**

```vue
<template>
  <v-btn color="primary">This is a button</v-btn>
</template>
```

<div class="text-center my-2"><v-btn color="primary">This is a button</v-btn></div>

The same thing can definitely be achieved with our own codes, but it might take quite some effort to achieve it,
and component library will help us with it.

Normally, there'll also be some theme files which allows the theme to be customized as well as
light / dark modes. For example, in Vuetify, primary can be configured to having different colors.

<v-divider class="mt-12"></v-divider>

So something that I really like about styled components is the ease to start a project, 
and just grab whatever components that you like (and the style, provided that the library has different styles) 
and use it just like that 💁‍♂️

### Challenge

However, over time, I came across the problem that every developer faces using this kind of libraries 😩

<p class="text-center"><b>It is hard to customize the components.</b></p>

What if, say, you wanted to change the padding of just one of the labels in inputs, how easily can you do it? I wouldn’t say it’s hard, but certainly, it is ugly.

<post-image img="https://i.imgur.com/Z3RRLJK.png" alt="Editing Default Styles of Vuetify"
lazy="https://i.imgur.com/Z3RRLJKt.png">
Customizing the label of searchbar of this website, click the search button to see
it in action (<h-link href="https://github.com/HohShenYien/personal-blog/blob/master/components/search.vue#L157">source</h-link>)
</post-image>

Overtime, this pattern does increase in the project, hence making the project to be less maintainable. 

### When to use

You are certain that the entire project would be based on a single style from the library and that very little customizations.

## Tailwind

<post-image img="https://i.imgur.com/jOfa27T.png" alt="Tailwindcss"
lazy="https://i.imgur.com/jOfa27Tt.png">
<h-link href="https://tailwindcss.com/">Tailwindcss</h-link>
</post-image>

In comparison to Styled Component Library, you might need to write more lines of codes, but it gives you more power 
and freedom to customize the look and feel of your project. Here are some of the things I enjoy about Tailwind:

1. **Very minimal CSS needed - Honestly, it is tiring for me to consistently switching between css and the html codes.**

```html
<div class="grid grid-col-2 justify-center p-4">
  <div class="bg-yellow-400"></div>
  <div class="text-center">
    <h4 class="text-blue-600">Hello World</h4>
    <p>Bye World</p>
  </div>
</div>
```
<div class="my-4">
  <div class="d-flex justify-center">
    <div class="col-6 yellow lighten-1"></div>
    <div class="text-center col-6">
      <h4 class="blue--text lighten-2">Hello World</h4>
      <p>Bye World</p>
    </div>
  </div>
  <div class="text-center gray--text">(I coded them with Vuetify utility class, refer to them below)</div>
</div>

Look at how quickly I pull some styles without having to write a single css line 😆

2. **Faster, after all, tailwind is plain css most of the time, so how big or how slow could it go?**

<v-divider class="mt-12"></v-divider>

### Challenges

Of course, the challenge is that you need to get the components elsewhere as tailwind doesn’t really provide any component. Therefore, your only options would be:

<post-image img="https://i.imgur.com/kMsY1iS.png" alt="Editing Default Styles of Vuetify"
lazy="https://i.imgur.com/kMsY1iSt.png">
<h-link href="https://headlessui.com/">Headless UI</h-link>
</post-image>

1. Write them out yourself - More customizability at the cost of time which I don’t think it’s worth it for small projects.
2. External unstyled component libraries like Headless or Radix UI.

<br>

### When to use

1. When you know the project is going to have a mix of styles or requires a lot of customizations that a singled styled component library is not going to suffice.
2. Suitable for larger projects so that it can be maintained more easily with standardized class names.

<br>

## Bottom Line

This article is written by a very junior developer - Most of the content are from my experience which gives 
no guarantee what is best for you. Most importantly, the majority of the styled component libraries these days also
provide some utility classes like Vuetify:

```vue
<template>
  <div class="d-flex justify-center">
    <div class="col-6 yellow lighten-1"></div>
    <div class="text-center col-6">
      <h4 class="blue--text lighten-2">Hello World</h4>
      <p>Bye World</p>
    </div>
  </div>
</template>
```

<br>

In the end of the day, it is really a matter of personal preference, and you got my two cents here.
