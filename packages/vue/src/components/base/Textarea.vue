<script lang="ts">
export default {
  name: "NNTextarea",
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  note?: string;
  error?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const onUpdate = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <label
    class="nn-textarea"
    :class="[
      props.disabled && 'nn-textarea--disabled',
      props.required && 'nn-textarea--required',
      props.error && 'nn-textarea--error',
    ]"
  >
    <textarea
      :disabled="props.disabled"
      class="nn-textarea__control"
      :value="props.modelValue"
      placeholder=" "
      rows="10"
      @input="onUpdate"
    ></textarea>
    <div class="nn-textarea__label">{{ props.label }}</div>
    <span v-if="props.note" class="nn-textarea__note">{{ props.note }}</span>
  </label>
</template>
