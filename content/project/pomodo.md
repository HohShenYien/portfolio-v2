---
title: Pomodo
image: https://i.imgur.com/PIhxb2Xh.png
lazy: https://i.imgur.com/PIhxb2Xt.png
thumbnail: https://i.imgur.com/PIhxb2Xl.png
link: https://github.com/HohShenYien/pomodo
date: 22 June 2022
description: A Windows desktop application that keeps track of your time and helps you to focus using pomodoro technique!
type: desktop
cat: Desktop Application
tags:
- Angular
- Rust
- Tauri
---

## Background

About two years ago, I came across Rust from the 
<h-link href="https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted">Stackoverflow 2020 survey</h-link>,
the most loved language of the year! As I was merely a beginner back then, it didn't stick on my mind for long. 
I was probably still busy learning Java or Python back then XD.

<post-image img="https://i.imgur.com/oTdUXkGh.jpg" lazy="https://i.imgur.com/oTdUXkGt.jpg">
<h-link href="https://tauri.app/">Tauri</h-link>
</post-image>

Fast-forward to about last year when I saw <h-link href="https://github.com/tauri-apps/tauri">Tauri</h-link>
appearing in GitHub daily discover. By then, I have already came across Electron and learned about some of its
drawbacks. Therefore, Tauri appeared to be very impressive to me, and I kinda was looking forward to trying it.

Finally, after learning Rust and Angular (as mentioned <h-link href="/blog/a-nerds-life">here</h-link>), 
I decided to try Tauri. The result? **Pomodo**.

## Features

Honestly, most of the features are similar to two other Pomorodo apps, which are 
<h-link href="/project/promodoro-focus">Pomodoro Focus</h-link> and 
<h-link href="/project/pomodoro-timer">Pomodoro Timer</h-link>. But of course, it is built using
different technologies, so why not?

- A timer with notification sound
- Allows you to customize your settings and remembers it the next time you use the app
- A progress chart that keeps track of your progress each day.
- A calendar that tells you how many sessions you have been doing each day.

<div class="wide my-8">
  <v-row>
    <v-col cols="12" md="6">
      <project-frame img="https://i.imgur.com/PIhxb2Xh.png" lazy="https://i.imgur.com/PIhxb2Xt.png" type="desktop"
        alt="App"></project-frame>
    </v-col>
  <v-col cols="12" md="6">
      <project-frame img="https://i.imgur.com/HPRFJaWh.png" lazy="https://i.imgur.com/HPRFJaWt.png" type="desktop"
        alt="Progress Chart"></project-frame>
    </v-col>
  </v-row>
  <br>
  <br>

  <v-row>
    <v-col cols="12" md="6">
      <project-frame img="https://i.imgur.com/P5MjkoQh.png" lazy="https://i.imgur.com/P5MjkoQt.png" type="desktop"
        alt="Calendar"></project-frame>
    </v-col>
    <v-col cols="12" md="6">  
      <project-frame img="https://i.imgur.com/R1l3MJKh.png" lazy="https://i.imgur.com/R1l3MJKt.png" type="desktop"
        alt="Settings"></project-frame>
    </v-col>
  </v-row>
</div>

## Afterwords

As I <h-link href="/blog/a-nerds-life">mentioned</h-link>, Rust and Angular are amazing! I enjoyed a lot while
I was developing in them. In comparison to using Qt in C++ or Android in Java in the past, I would say developing with
Javascript is much easier and more controllable. Of course, this app might be slower and bulkier compared to
the apps built natively, but Tauri offers a better developer experience in my opinion 🤩.

As for Electron, I would say Tauri shines in its memory consumption as it doesn't downlaod an entire browser in the
app. Of course, Electron is more matured as of now and Rust is still relatively new, but I'm very positive
about Tauri in th future!
