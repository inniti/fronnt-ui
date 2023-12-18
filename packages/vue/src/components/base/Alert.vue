<script lang="ts">
export default {
  name: "NNAlert",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "error" | "warning" | "info" | "success";
  }>(),
  {
    variant: "primary",
  }
);
</script>

<template>
  <div class="nn-alert" :class="[`nn-alert--${props.variant}`]">
    <div v-if="$slots.icon" class="nn-alert__icon">
      <slot name="icon" />
    </div>
    <div class="nn-alert__message"><slot /></div>
  </div>
</template>
