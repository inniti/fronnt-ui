<script lang="ts">
export default {
  name: "NNHeading",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    tag?: string;
    variant?: "light" | "black";
    size?: string | number;
  }>(),
  {
    tag: "div",
    variant: "light",
    size: 1,
  }
);

const level = computed(() => {
  return Math.max(Math.min(+props.size || 1, 6), 1);
});
</script>

<template>
  <component
    :is="props.tag"
    class="nn-heading"
    :class="[
      `nn-heading--${level}`,
      props.variant === 'black' && `nn-heading--black`,
    ]"
  >
    <slot />
  </component>
</template>
