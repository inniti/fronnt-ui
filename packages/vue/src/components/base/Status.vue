<script lang="ts">
export default {
  name: "NNStatus",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    severity: "neutral" | "success" | "warning" | "error" | string;
    active?: boolean;
  }>(),
  {
    severity: "neutral",
  }
);
</script>

<template>
  <span
    class="nn-status"
    :class="[
      `nn-status--${props.severity}`,
      props.active && `nn-status--active`,
    ]"
  >
    <span class="nn-status__icon"><slot name="icon" /></span>
    <span class="nn-status__label"><slot /></span>
  </span>
</template>
