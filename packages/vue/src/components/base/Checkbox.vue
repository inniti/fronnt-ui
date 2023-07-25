<script lang="ts">
export default {
  name: "NNCheckbox",
};
</script>

<script lang="ts" setup>
import CheckIcon from "@fronnt/icons/check?raw";

const props = defineProps<{
  modelValue: boolean;
  disabled?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);
const onChange = (e: Event) => {
  if (props.disabled) {
    return;
  }
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>

<template>
  <label
    class="nn-checkbox"
    :class="[
      props.disabled && 'nn-checkbox--disabled',
      props.modelValue && 'nn-checkbox--checked',
    ]"
  >
    <input
      type="checkbox"
      :checked="Boolean(props.modelValue)"
      @change="onChange"
    />
    <span class="nn-checkbox__icon" v-html="CheckIcon"></span>
    <span class="nn-checkbox__label"><slot /></span>
  </label>
</template>
