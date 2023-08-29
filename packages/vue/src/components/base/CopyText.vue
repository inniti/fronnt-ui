<script lang="ts">
export default {
  name: "NNCopyText",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tag?: string;
    size?: "regular" | "small" | "large";
  }>(),
  {
    tag: "div",
    size: "regular",
  }
);
</script>

<template>
  <component
    :is="props.tag"
    class="nn-copy-text"
    :class="[
      props.size === 'small' && 'nn-copy-text--small',
      props.size === 'large' && 'nn-copy-text--large',
    ]"
  >
    <slot />
  </component>
</template>
