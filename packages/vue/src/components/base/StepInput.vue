<script lang="ts">
export default {
  name: "NNStepInput",
};
</script>

<script lang="ts" setup>
import { ref, withDefaults } from "vue";
import Icon from "./Icon.vue";
const props = withDefaults(
  defineProps<{
    modelValue?: number | string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    disabled?: boolean;
  }>(),
  {
    modelValue: undefined,
    step: 1,
    min: 0,
    max: Infinity,
    disabled: false,
  }
);
const value = ref(Number(props.modelValue));
const emit = defineEmits(["update:modelValue", "fixed"]);

function applyValue(input: number) {
  let finalValue = input;
  if (isNaN(finalValue)) {
    finalValue = Number(props.min);
  } else {
    const rest = input % Number(props.step);
    if (rest !== 0) {
      finalValue = input + Number(props.step) - rest;
    }
    if (finalValue > Number(props.max)) {
      finalValue = Number(props.max);
    }
    if (finalValue < Number(props.min)) {
      finalValue = Number(props.min);
    }
  }
  value.value = finalValue;
  if (finalValue !== input) {
    emit("fixed", {
      original: value,
      final: finalValue,
    });
  }

  emit("update:modelValue", finalValue);
}

function onBlur(e: Event) {
  const inputValue = Number((e.target as HTMLInputElement).value);
  applyValue(inputValue);
}

function onKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case "ArrowUp":
      increment();
      return;
    case "ArrowDown":
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
      return;
    case "Tab":
    case "Enter":
      applyValue(Number((e.target as HTMLInputElement).value));
      return;
    default:
      e.preventDefault();
      break;
  }
}

function increment() {
  if (value.value + Number(props.step) <= Number(props.max)) {
    value.value += Number(props.step);
    emit("update:modelValue", value.value);
  }
}
function decrement() {
  if (value.value - Number(props.step) >= Number(props.min)) {
    value.value -= Number(props.step);
    emit("update:modelValue", value.value);
  }
}
</script>

<template>
  <div
    class="nn-step-input"
    :class="[props.disabled && 'nn-step-input--disabled']"
  >
    <button
      class="nn-step-input__button"
      :disabled="value <= Number(props.min)"
      @click="decrement"
    >
      <Icon name="minus" />
    </button>
    <input
      class="nn-step-input__input"
      type="text"
      ref="input"
      :value="value"
      :min="props.min"
      :max="props.max"
      @keydown="onKeydown"
      @blur="onBlur"
    />
    <button
      class="nn-step-input__button"
      :disabled="value >= Number(props.max)"
      @click="increment"
    >
    <Icon name="plus" />
    </button>
  </div>
</template>
