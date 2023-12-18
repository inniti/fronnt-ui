<script lang="ts">
export default {
  name: "NNButton",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "tertiary" | "neutral";
    size?: "default" | "small";
    tag?: string;
  }>(),
  {
    variant: "default",
    size: "default",
    tag: "button",
  }
);
</script>

<template>
  <component
    :is="props.tag"
    class="nn-button"
    :class="[`nn-button--${props.variant}`, `nn-button--size-${props.size}`]"
  >
    <slot />
  </component>
</template>
