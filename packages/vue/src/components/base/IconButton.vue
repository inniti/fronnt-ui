<script lang="ts" setup>
const props = defineProps<{
  primary?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <button
    class="nn-icon-button"
    :disabled="props.disabled"
    :class="[
      props.primary && 'nn-icon-button--primary',
      props.disabled && 'nn-icon-button--disabled',
    ]"
  >
    <slot />
  </button>
</template>
