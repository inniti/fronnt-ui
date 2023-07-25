<script lang="ts">
export default {
  name: "NNButton",
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  primary?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <button
    class="nn-button"
    :class="[props.primary && 'nn-button--primary']"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>
