<script lang="ts">
export default {
  name: "NNLink",
};
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    display?: "inline" | "block";
  }>(),
  { display: "inline" }
);
</script>

<template>
  <a class="nn-link" :class="['nn-link', `nn-link--${props.display}`]">
    <slot />
  </a>
</template>
