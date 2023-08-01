<script lang="ts">
export default {
  name: "NNInput",
};
</script>

<script lang="ts" setup>
import NNIcon from "./Icon.vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    required?: boolean;
    label?: string;
    type?: string;
    modelValue?: string;
    error?: boolean;
    clearable?: boolean;
  }>(),
  {
    disabled: false,
    required: false,
    type: "text",
    modelValue: "",
    error: false,
    label: undefined,
  }
);

const emit = defineEmits(["update:modelValue"]);

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <div
    class="nn-input"
    :class="[
      props.required && 'nn-input--required',
      props.label && 'nn-input--labelled',
      props.disabled && 'nn-input--disabled',
      props.error && 'nn-input--error',
    ]"
  >
    <label class="nn-input__control">
      <input
        class="nn-input__input"
        :type="props.type"
        :disabled="props.disabled"
        :required="props.required"
        :value="props.modelValue"
        v-bind="$attrs"
        placeholder=" "
        @input="onInput"
      />
      <span v-if="props.label" class="nn-input__label">{{ props.label }}</span>
      <span v-if="clearable" class="nn-input__clear" tabindex="0">
        <NNIcon name="x" />
      </span>
    </label>
    <div class="nn-input__note">
      <slot />
    </div>
  </div>
</template>
