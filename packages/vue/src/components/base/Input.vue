<script lang="ts">
export default {
  name: "NNInput",
};
</script>

<script lang="ts" setup>
import NNClearButton from "./ClearButton.vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    required?: boolean;
    label?: string;
    type?: string;
    modelValue?: string;
    error?: boolean;
    clearable?: boolean;
    clearValue?: string | null;
  }>(),
  {
    disabled: false,
    required: false,
    type: "text",
    modelValue: "",
    error: false,
    label: undefined,
    clearValue: null,
  }
);

const emit = defineEmits(["update:modelValue"]);

const clear = () => {
  emit("update:modelValue", props.clearValue);
};

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}

defineExpose({
  clear,
});
</script>

<template>
  <div
    class="nn-input"
    :class="[
      props.required && 'nn-input--required',
      props.label && 'nn-input--labelled',
      props.disabled && 'nn-input--disabled',
      props.clearable && 'nn-input--clearable',
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
      <span v-if="clearable && props.modelValue" class="nn-input__clear">
        <slot name="clear">
          <NNClearButton @click="clear" @keydown.enter="clear" />
        </slot>
      </span>
    </label>
    <div class="nn-input__note">
      <slot />
    </div>
  </div>
</template>
