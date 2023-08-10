---
layout: ../../layouts/Markdown.astro
navigation: components
toc: true
title: Components
prev:
  link: /components/
  label: Intro
next:
  link: /components/buttons/
  label: Buttons
---

# Getting started

## Installation

Install both the styles and the components package.

```shell
npm install @fronnt/styles @fronnt/components-vue
```

## Use

Import the styles so that they are bundled with your app.

```js
import "@fronnt/styles";
import { createApp } from "vue";

const app = createApp({});
```

Import and use components throughout your app.

```vue
<script setup>
import { NNButton } from "@fronnt/components-vue";
</script>

<template>
  <div>
    <NNButton>Click me</NNButton>
  </div>
</template>
```
