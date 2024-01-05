<script lang="ts">
export default {
  name: "NNCheckbox",
};
</script>

<script lang="ts" setup>
import { computed, watch, ref } from "vue";
import { NNIconCheck, NNIconMinus } from "../icons";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue?: boolean | null;
    disabled?: boolean;
  }>(),
  {
    modelValue: undefined,
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const checked = ref();

watch(
  () => props.modelValue,
  () => {
    checked.value = props.modelValue;
  },
  { immediate: true }
);

const onChange = (e: Event) => {
  if (props.disabled) {
    return;
  }
  const el = e.target as HTMLInputElement;

  const newValue = indeterminate.value ? true : el.checked;
  checked.value = newValue;

  emit("update:modelValue", newValue);
};

const indeterminate = computed(() => {
  return typeof checked.value === "undefined" || checked.value === null;
});
</script>

<template>
  <label
    class="nn-checkbox"
    :class="[
      props.disabled && 'nn-checkbox--disabled',
      checked && 'nn-checkbox--checked',
      indeterminate && 'nn-checkbox--indeterminate',
    ]"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      :checked="!!checked"
      :indeterminate="indeterminate"
      :disabled="props.disabled"
      class="nn-checkbox__control"
      @change="onChange"
    />
    <NNIconMinus v-if="indeterminate" class="nn-checkbox__icon" />
    <NNIconCheck v-else class="nn-checkbox__icon" />
    <span class="nn-checkbox__label"><slot /></span>
  </label>
</template>
