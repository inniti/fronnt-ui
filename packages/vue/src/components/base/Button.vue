<script lang="ts">
export default {
  name: "NNButton",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "subtle";
    /** @deprecated use the variant prop (set to "primary") instead */
    primary?: boolean;
    disabled?: boolean;
  }>(),
  {
    variant: "default",
  }
);
</script>

<template>
  <button
    class="nn-button"
    :class="[`nn-button--${props.variant}`]"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>
