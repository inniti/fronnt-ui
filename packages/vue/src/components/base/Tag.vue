<script lang="ts">
export default {
  name: "NNTag",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: "default" | "small";
  }>(),
  {
    size: "default",
  }
);
</script>

<template>
  <span class="nn-tag" :class="`nn-tag--${props.size}`">
    <slot />
  </span>
</template>
