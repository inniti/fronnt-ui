<script lang="ts">
export default {
  name: "NNCollapsible",
};
</script>

<script lang="ts" setup>
import { ref, unref } from "vue";
import { NNIconPlus } from "../icons";
import { getRandomId } from "../../helpers/dom";

const props = withDefaults(
  defineProps<{
    speed?: number;
  }>(),
  {
    speed: 0,
  }
);

const emit = defineEmits<{
  (e: "toggle", value: boolean): void;
  (e: "open"): void;
  (e: "close"): void;
}>();

const isOpen = ref(false);

const id = getRandomId("collapsible");

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
  emit("toggle", unref(isOpen.value));
};

const open = () => {
  isOpen.value = true;
  emit("open");
};

const close = () => {
  isOpen.value = false;
  emit("close");
};

defineExpose({
  open,
  close,
  toggle,
});
</script>

<template>
  <div
    class="nn-collapsible"
    :class="[!isOpen && 'nn-collapsible--collapsed']"
    :style="{ '--speed': `${props.speed}ms` }"
  >
    <div
      class="nn-collapsible__header"
      tabindex="0"
      :aria-expanded="isOpen"
      :aria-controls="id"
      @click="toggle"
      @keydown.enter="toggle"
    >
      <div><slot name="header" /></div>
      <NNIconPlus class="nn-collapsible__icon" />
    </div>

    <div :id="id" class="nn-collapsible__content" :aria-hidden="!isOpen">
      <slot />
    </div>
  </div>
</template>
