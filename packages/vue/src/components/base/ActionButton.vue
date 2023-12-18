<script lang="ts" setup>
import { computed, ref } from "vue";
import NNButton from "./Button.vue";
import NNLoadingIndicator from "./LoadingIndicator.vue";
import { NNIconCheck, NNIconX } from "../icons";

const props = withDefaults(
  defineProps<{
    action(): Promise<unknown>;
    timeout?: number;
    pendingDelay?: number;
    disabled?: boolean;
    variant?: "default" | "primary" | "tertiary" | "neutral";
  }>(),
  {
    pendingDelay: 60,
    timeout: 3000,
    disabled: false,
    variant: "primary",
  }
);

const state = ref<"ready" | "pending" | "error" | "success">("ready");
const timer = ref();
const element = ref();
const originalWidth = ref();
const measureWidth = function () {
  originalWidth.value = element.value?.$el.getBoundingClientRect().width;
};

function run() {
  if (props.disabled || state.value !== "ready") {
    return;
  }
  measureWidth();

  const pendingTimer = setTimeout(() => {
    state.value = "pending";
  }, props.pendingDelay);
  props
    .action()
    .then(() => {
      state.value = "success";
      timer.value = setTimeout(() => {
        state.value = "ready";
      }, props.timeout);
    })
    .catch(() => {
      state.value = "error";
      timer.value = setTimeout(() => {
        state.value = "ready";
      }, props.timeout);
    })
    .finally(() => {
      clearTimeout(pendingTimer);
    });
}

const style = computed(() => {
  if (state.value !== "ready") {
    return {
      width: originalWidth.value + "px",
    };
  }
  return {};
});
</script>

<template>
  <NNButton
    ref="element"
    class="nn-action-button"
    :class="[
      state === 'success' && 'nn-action-button--success',
      state === 'error' && 'nn-action-button--error',
      state === 'pending' && 'nn-action-button--pending',
      `nn-action-button--${props.variant}`,
    ]"
    :style="style"
    :variant="props.variant"
    :disabled="props.disabled"
    @click="run"
  >
    <template v-if="state === 'error'">
      <slot name="error">
        <NNIconX />
      </slot>
    </template>
    <template v-else-if="state === 'success'">
      <slot name="success">
        <NNIconCheck />
      </slot>
    </template>
    <template v-else-if="state === 'pending'">
      <slot name="pending"><NNLoadingIndicator /></slot>
    </template>
    <template v-else> <slot /> </template>
  </NNButton>
</template>
