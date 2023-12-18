<script lang="ts">
export default {
  name: "NNTextarea",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    disabled?: boolean;
    error?: boolean;
  }>(),
  {
    modelValue: undefined,
  }
);
const emit = defineEmits(["update:modelValue"]);

const onInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <textarea
    class="nn-textarea"
    :class="[
      props.disabled && 'nn-textarea--disabled',
      props.error && 'nn-textarea--error',
    ]"
    :disabled="props.disabled"
    :value="props.modelValue"
    @input="onInput"
  ></textarea>
</template>
