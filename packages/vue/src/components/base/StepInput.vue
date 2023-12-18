<script lang="ts">
export default {
  name: "NNStepInput",
};
</script>

<script lang="ts" setup>
import { ref, withDefaults, watch } from "vue";
import NNButton from "./Button.vue";
import { NNIconMinus, NNIconPlus } from "../icons";
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    modelValue?: number | string | null;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    disabled?: boolean;
    error?: boolean;
    precision?: number;
    parseValue?: (value: string) => number;
  }>(),
  {
    modelValue: undefined,
    step: 1,
    min: 0,
    max: Infinity,
    disabled: false,
    precision: 2,
    parseValue: undefined,
  }
);
const value = ref();
const inputEl = ref<HTMLInputElement>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number | null): void;
  (e: "fixed", value: { input: string; final: number }): void;
}>();

const precision = computed(() => {
  return Math.pow(10, props.precision);
});

watch(
  () => props.modelValue,
  () => {
    value.value = (props.modelValue && Number(props.modelValue)) || props.min;
  },
  { immediate: true }
);

function applyValue(input: string) {
  const trimmedInput = input?.trim() || "";

  let finalValue: number;

  if (typeof props.parseValue === "function") {
    finalValue = props.parseValue(trimmedInput);
  } else {
    finalValue = Number(trimmedInput.replaceAll(",", "."));
  }

  if (isNaN(finalValue)) {
    finalValue = Number(props.min);
  } else {
    const diff = Math.round(
      (finalValue * precision.value) % (Number(props.step) * precision.value)
    );

    finalValue =
      Math.round(finalValue * precision.value - diff + Number.EPSILON) /
      precision.value;

    if (finalValue > Number(props.max)) {
      finalValue = Number(props.max);
    }
    if (finalValue < Number(props.min)) {
      finalValue = Number(props.min);
    }
  }

  value.value = finalValue;
  if (finalValue.toString() !== trimmedInput.toString()) {
    emit("fixed", {
      input: trimmedInput,
      final: finalValue,
    });
  }

  emit("update:modelValue", finalValue);

  return finalValue;
}

function onBlur(e: Event) {
  applyValue((e.target as HTMLInputElement).value);
}

function onKeydown(e: KeyboardEvent) {
  const control = e.target as HTMLInputElement;

  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      increment();
      return;
    case "ArrowDown":
      e.preventDefault();
      decrement();
      return;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "ArrowLeft":
    case "ArrowRight":
    case "Esc":
    case "Backspace":
    case "Meta":
    case "Control":
    case "Shift":
    case "Delete":
    case "Alt":
    case ".":
    case ",":
      return;
    case "Tab":
    case "Enter":
      control.value = applyValue(control.value).toString();
      return;
    default:
      e.preventDefault();
      break;
  }
}

function increment() {
  if (value.value + Number(props.step) <= Number(props.max)) {
    const precision = Math.pow(10, props.precision);

    value.value =
      Math.round(
        (value.value + Number.EPSILON + Number(props.step)) * precision
      ) / precision;
    emit("update:modelValue", value.value);
  }
}
function decrement() {
  if (value.value - Number(props.step) >= Number(props.min)) {
    const precision = Math.pow(10, props.precision);
    value.value =
      Math.round(
        (value.value - Number.EPSILON - Number(props.step)) * precision
      ) / precision;
    emit("update:modelValue", value.value);
  }
}
</script>

<template>
  <div
    class="nn-step-input"
    :class="[
      props.disabled && 'nn-step-input--disabled',
      props.error && 'nn-step-input--error',
    ]"
  >
    <NNButton
      class="nn-step-input__button"
      variant="neutral"
      size="small"
      :disabled="props.disabled || value <= Number(props.min)"
      @click="decrement"
    >
      <NNIconMinus />
    </NNButton>
    <input
      ref="inputEl"
      class="nn-step-input__input"
      type="text"
      :value="value"
      :min="props.min"
      :max="props.max"
      :disabled="props.disabled"
      @keydown="onKeydown"
      @blur="onBlur"
    />
    <NNButton
      class="nn-step-input__button"
      variant="neutral"
      size="small"
      :disabled="props.disabled || value >= Number(props.max)"
      @click="increment"
    >
      <NNIconPlus />
    </NNButton>
  </div>
</template>
