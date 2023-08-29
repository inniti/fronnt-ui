<script lang="ts" setup>
import { computed, ref } from "vue";
import ErrorIcon from "@fronnt/icons/x?raw";
import CheckIcon from "@fronnt/icons/check?raw";
import NNButton from "./Button.vue";
import NNLoadingIndicator from "./LoadingIndicator.vue";

const props = withDefaults(
  defineProps<{
    action(): Promise<unknown>;
    timeout?: number;
    pendingDelay?: number;
    disabled?: boolean;
  }>(),
  {
    pendingDelay: 60,
    timeout: 3000,
    disabled: false,
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
    :class="{
      'nn-action-button--success': state === 'success',
      'nn-action-button--error': state === 'error',
      'nn-action-button--pending': state === 'pending',
    }"
    :style="style"
    primary
    :disabled="props.disabled"
    @click="run"
  >
    <template v-if="state === 'error'">
      <slot name="error">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="ErrorIcon"></span>
      </slot>
    </template>
    <template v-else-if="state === 'success'">
      <slot name="success">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="CheckIcon"></span>
      </slot>
    </template>
    <template v-else-if="state === 'pending'">
      <slot name="pending"><NNLoadingIndicator /></slot>
    </template>
    <template v-else> <slot /> </template>
  </NNButton>
</template>
