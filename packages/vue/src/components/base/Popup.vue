<script lang="ts">
export default {
  name: "NNPopup",
};
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { getNearestOverflowContainer } from "../../helpers/dom";

const props = defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits(["open", "close", "focus"]);

const isOpen = ref(false);
const el = ref();
const popup = ref();
const trigger = ref();

const stacked = ref(false);
const offsetX = ref(0);

const popupStyle = computed(() => {
  return {
    transform: `translateX(${offsetX.value}px)`,
  };
});

const calculatePosition = () => {
  let popupBounds = popup.value.getBoundingClientRect();

  const container = getNearestOverflowContainer(el.value);

  const containerBounds = container.getBoundingClientRect();

  stacked.value = popupBounds.width > containerBounds.width;

  popupBounds = popup.value.getBoundingClientRect();

  if (popupBounds.x < 0) {
    offsetX.value = containerBounds.x - popupBounds.x;
  } else {
    offsetX.value = 0;
  }
};

const open = () => {
  if (!props.disabled) {
    isOpen.value = true;
    calculatePosition();
    document.addEventListener("click", onClick);
    emit("open");
  }
};

const close = () => {
  isOpen.value = false;
  document.removeEventListener("click", onClick);
  offsetX.value = 0;
  stacked.value = false;
  emit("close");
};

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const onFocus = () => {
  emit("focus");
};

defineExpose({
  open,
  close,
  toggle,
});

const onClick = (event: Event) => {
  if (!el.value.contains(event.target as HTMLElement)) {
    close();
  }
};

onBeforeUnmount(() => {
  document.removeEventListener("click", onClick);
});
</script>

<template>
  <div ref="el" class="nn-popup" :class="isOpen && 'nn-popup--open'">
    <div
      ref="trigger"
      class="nn-popup__trigger"
      :tabindex="props.disabled ? -1 : 0"
      @click="toggle"
      @focus="onFocus"
      @keydown.enter="toggle"
    >
      <slot></slot>
    </div>
    <div ref="popup" class="nn-popup__popup" :style="popupStyle">
      <div class="nn-popup__content">
        <slot name="popup"></slot>
      </div>
    </div>
  </div>
</template>
