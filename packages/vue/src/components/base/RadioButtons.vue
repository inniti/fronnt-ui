<script lang="ts">
export default {
  name: "NNRadioButtons",
};
</script>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";
import { getRandomId } from "../../helpers/dom";

const props = withDefaults(
  defineProps<{
    modelValue?: string | null;
    options: Array<{ value: string; label: string; disabled?: boolean }>;
  }>(),
  {
    modelValue: null,
  }
);

const attrs = useAttrs();

const name = computed(() => {
  return (attrs["name"] as string) || getRandomId("nn-radio-buttons");
});

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
        :name="name"
        :disabled="option.disabled"
        @change="onChange"
      />

      <span class="nn-radio-buttons__label">
        <slot name="label" :option="option">{{ option.label }}</slot>
      </span>
    </label>
  </div>
</template>
