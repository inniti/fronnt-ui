<script lang="ts">
export default {
  name: "NNDropdown",
};
</script>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps<{
  disabled?: boolean;
  label: string;
  modelValue?: string;
  options: { id: string; label: string }[];
}>();
const emit = defineEmits(["update:modelValue"]);
const isOpen = ref(false);
const control = ref();
const popup = ref();
const selectedOption = computed(() => {
  return props.options.find((o) => o.id === props.modelValue);
});

function close() {
  isOpen.value = false;
  control.value.focus();
}
function open() {
  if (!props.disabled) {
    isOpen.value = true;
  }
}

function toggle() {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
}

function select(id: string) {
  emit("update:modelValue", id);
  close();
}

const popupStyle = computed(() => {
  return {
    top: "100%",
  };
});
</script>

<template>
  <div
    class="nn-dropdown"
    :class="[
      isOpen && 'nn-dropdown--open',
      selectedOption && 'nn-dropdown--selected',
      props.disabled && 'nn-dropdown--disabled',
    ]"
  >
    <div v-if="isOpen" class="nn-dropdown__overlay" @click.stop="close"></div>
    <div
      ref="control"
      class="nn-dropdown__control"
      :tabindex="props.disabled ? '-1' : '0'"
      @click="toggle"
      @keydown.enter="toggle"
    >
      <div class="nn-dropdown__label" :title="props.label">
        {{ props.label }}
      </div>
      <div class="nn-dropdown__selection">
        <template v-if="!!selectedOption">
          <slot name="selection" :selection="selectedOption">
            <span :title="selectedOption?.label">{{
              selectedOption?.label
            }}</span>
          </slot>
        </template>
      </div>
      <Icon name="chevron" class="nn-dropdown__chevron" />
    </div>
    <div ref="popup" class="nn-dropdown__popup" :style="popupStyle">
      <ul class="nn-dropdown__options">
        <li
          v-for="option in props.options"
          :key="option.id"
          class="nn-dropdown__option"
          :tabindex="isOpen ? '0' : '-1'"
          @keydown.enter="select(option.id)"
          @click="select(option.id)"
        >
          <slot name="option" :option="option">
            <span :title="option.label">{{ option.label }}</span>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
