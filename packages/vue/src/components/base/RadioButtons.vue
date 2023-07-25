<script lang="ts">
export default {
  name: "NNRadioButtons",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
    name: string;
    options: Array<{ value: string; label: string; disabled?: boolean }>;
  }>(),
  {
    modelValue: null,
  }
);

const emit = defineEmits(["update:modelValue"]);

function onChange(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="nn-radio-buttons">
    <label
      v-for="option in options"
      :key="option.value"
      class="nn-radio-buttons__option"
      :class="[
        option.disabled && 'nn-radio-buttons__option--disabled',
        option.value === props.modelValue &&
          'nn-radio-buttons__option--selected',
      ]"
    >
      <input
        class="nn-radio-buttons__control"
        type="radio"
        :checked="props.modelValue === option.value"
        :value="option.value"
        :name="props.name"
        :disabled="option.disabled"
        @change="onChange"
      />

      <span class="nn-radio-buttons__label">
        <slot name="label" :option="option">{{ option.label }}</slot>
      </span>
    </label>
  </div>
</template>
