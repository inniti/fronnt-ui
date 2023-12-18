<script lang="ts">
export default {
  name: "NNToggle",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    disabled?: boolean;
  }>(),
  {
    modelValue: false,
    disabled: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

function onChange(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
}
</script>

<template>
  <label class="nn-toggle" :class="[props.disabled && 'nn-toggle--disabled']">
    <input
      type="checkbox"
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
