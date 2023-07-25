---
props:
  - key: action
    type: () => Promise<unknown>
    description: The action to be run
  - key: timeout
    type: number
    description: asdfasdf
  - key: pendingDelay
    type: number
    desciption: asdfasdf
  - key: disabled
    type: boolean
    description: asdf
---

Action Buttons can be passed an async function, which is executed on click.

While running, the button shows a loading state.

The button shows a success state when the promise is fulfilled and an error state when the promise is rejected.

```vue
<script setup>
const successAction = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

const errorAction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 1000);
  });
</script>

<template>
  <NNActionButton :action="successAction">Success</NNActionButton>
  <NNActionButton :action="errorAction">Error</NNActionButton>
</template>
```
