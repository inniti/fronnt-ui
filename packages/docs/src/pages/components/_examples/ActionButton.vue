<script setup lang="ts">
import { NNActionButton } from "@fronnt/components-vue";

const props = defineProps<{ success?: boolean }>();

const action = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (props.success) {
        resolve(true);
      } else {
        reject(new Error());
      }
    }, 1000);
  });
</script>

<template>
  <NNActionButton :action="action">{{
    props.success ? "Success" : "Error"
  }}</NNActionButton>
</template>
