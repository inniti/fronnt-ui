<script lang="ts">
export default {
  name: "NNLabeledValue",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label: string; value?: string }>();
</script>

<template>
  <div class="nn-labeled-value">
    <div class="nn-labeled-value__label">{{ props.label }}</div>
    <div class="nn-labeled-value__value">
      <slot>{{ props.value }}</slot>
    </div>
  </div>
</template>
