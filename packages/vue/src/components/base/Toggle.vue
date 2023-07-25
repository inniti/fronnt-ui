<script lang="ts">
export default {
  name: "NNToggle",
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
  name?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function onChange(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
}
</script>

<template>
  <label class="nn-toggle" :class="[props.disabled && 'nn-toggle--disabled']">
    <input
      type="checkbox"
      :name="props.name"
      class="nn-toggle__control"
      :disabled="props.disabled"
      :checked="props.modelValue"
      @change="onChange"
    />
    <span class="nn-toggle__label">
      <slot />
    </span>
  </label>
</template>
