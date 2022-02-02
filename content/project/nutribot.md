---
title: Nutribot
image: https://i.imgur.com/gF6flmzl.jpg
lazy: https://i.imgur.com/gF6flmzt.jpg
thumbnail: https://i.imgur.com/gF6flmzl.jpg
link: https://github.com/HohShenYien/university_assignments/tree/main/year%201/sem%202/IAI
date: 16 September 2021
description: An AI chatbot that gives food recommendations to user based on their symptoms
cat: AI
type: none
tags:
- Python
- PyQt5
- Tensorflow
---

This desktop application can be considered as one of my first attempts in trying to use AI technology. Though it is the
assignment project for my **Introduction to AI (Year 1 Semester 1)** module, I put in a lot of effort, so I consider it as 
a significant project that deserves to be displayed here.

In this project, I referred a lot to **Tech with Tim's** <h-link href="https://www.techwithtim.net/tutorials/ai-chatbot/">
Chatbot Tutorial</h-link>. Let's just say I could not complete this project if it wasn't his tutorial. Meanwhile, 
my friend <highlighter>@Rui Jun</highlighter> was responsible to parse the input from user to identify the type of question asked by user i.e., 
what to avoid & what to eat. Meanwhile, the dataset was gathered and prepared by my two other teammates, 
<highlighter>@Justin</highlighter> and <highlighter>@Gar Ru</highlighter>.

On the other hand, I was responsible to map user's inputs to response after their types are parsed and the UI of the app.
Previously, I had some experience in QT from C++, so I used PyQT5 to build instead of other more popular libraries like
TKinter or Kivy.

The hardest part of the project wasn't actually the building part, but exporting the app. I used 
<h-link href="https://pyinstaller.readthedocs.io/en/stable/">PyInstaller</h-link> and a lot of configurations had to be
done to finally make it working. Nevertheless, this project is something that I consider as significant at least for now.

<div>
<v-divider class="my-5"></v-divider>
<h2 class="text-center"> Sample Images</h2>

<br>

  <v-row>
    <v-col cols="12" md="6">
      <project-frame img="https://i.imgur.com/ANVSqJNl.jpg" lazy="https://i.imgur.com/ANVSqJNt.jpg" type="none"></project-frame>
    </v-col>
  <v-col cols="12" md="6">
      <project-frame img="https://i.imgur.com/NVesdwPl.jpg" lazy="https://i.imgur.com/NVesdwPt.jpg" type="none"></project-frame>
    </v-col>
  </v-row>
</div>
