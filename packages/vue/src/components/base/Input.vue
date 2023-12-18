<script lang="ts">
export default {
  name: "NNInput",
};
</script>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import NNClearButton from "./ClearButton.vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | null;
    clearable?: boolean;
    clearValue?: string | null;
    disabled?: boolean;
    error?: boolean;
    class?: string;
  }>(),
  {
    modelValue: "",
    clearable: false,
    clearValue: null,
    disabled: false,
    error: false,
    class: undefined,
  }
);

const emit = defineEmits(["update:modelValue", "clear"]);

const control = ref();
const internalValue = ref<string | number | null>();

watch(
  () => props.modelValue,
  () => {
    internalValue.value = props.modelValue;
  },
  { immediate: true }
);

const showClearButton = computed(() => {
  if (!props.clearable || props.disabled) {
    return false;
  }

  const val = internalValue.value;

  if (typeof val === "undefined" || val === null) {
    return false;
  }

  if (typeof val === "string" && val.length === 0) {
    return false;
  }

  return true;
});

const clear = () => {
  internalValue.value = props.clearValue;
  emit("clear");
  emit("update:modelValue", internalValue.value);
  control.value.focus();
};

const onInput = (e: Event) => {
  internalValue.value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", internalValue.value);
};

const focusControl = () => {
  if (!props.disabled) {
    control.value?.focus();
  }
};

defineExpose({
  clear,
  focus: focusControl,
});
</script>

<template>
  <div
    class="nn-input"
    :class="[
      props.disabled && 'nn-input--disabled',
      props.clearable && 'nn-input--clearable',
      $slots.prefix && 'nn-input--prefix',
      $slots.postfix && 'nn-input--postfix',
      props.error && 'nn-input--error',
      props.class,
    ]"
    @click="focusControl"
  >
    <span v-if="$slots.prefix" class="nn-input__prefix">
      <slot name="prefix"></slot>
    </span>

    <div class="nn-input__control">
      <input
        v-bind="$attrs"
        ref="control"
        class="nn-input__value"
        :disabled="disabled"
        :value="internalValue"
        @input="onInput"
      />

      <span v-if="clearable" v-show="showClearButton" class="nn-input__clear">
        <slot name="clear">
          <NNClearButton @click.stop="clear" @keydown.enter="clear" />
        </slot>
      </span>
    </div>
    <span v-if="$slots.postfix" class="nn-input__postfix">
      <slot name="postfix"></slot>
    </span>
  </div>
</template>
