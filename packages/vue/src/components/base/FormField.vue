<script lang="ts">
export default {
  name: "NNFormField",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tag?: string;
    label: string;
    error?: boolean;
    required?: boolean;
  }>(),
  { tag: "label", error: false, required: false, notes: undefined }
);
</script>

<template>
  <component
    :is="props.tag"
    class="nn-form-field"
    :class="{
      'nn-form-field--error': props.error,
      'nn-form-field--required': props.required,
    }"
  >
    <div class="nn-form-field__label">
      {{ props.label }}
    </div>
    <div class="nn-form-field__control"><slot :error="props.error" /></div>
    <div v-if="$slots.notes" class="nn-form-field__notes">
      <slot name="notes" />
    </div>
  </component>
</template>
