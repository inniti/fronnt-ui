<script lang="ts">
export default {
  name: "NNFlyout",
};
</script>

<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted } from "vue";
import { getNearestOverflowContainer } from "../../helpers/dom";

const props = withDefaults(
  defineProps<{
    align?: "left" | "right";
    viewportPadding?: number;
    disabled?: boolean;
  }>(),
  {
    viewportPadding: 16,
    align: "left",
    disabled: false,
  }
);

const emit = defineEmits(["open", "close", "focus"]);

const isOpen = ref(false);
const el = ref<HTMLElement>();
const popupEl = ref<HTMLElement>();
const triggerEl = ref<HTMLElement>();
const popupStyles = reactive({
  top: "100%",
  left: "0",
  bottom: "unset",
  right: "unset",
  maxWidth: "none",
  maxHeight: "none",
});

const onWindowResize = () => {
  if (isOpen.value) {
    resetPopupStyles();
    nextTick(() => {
      calculatePosition();
    });
  }
};

const handleClickOutside = function (e: MouseEvent) {
  if (el.value !== e.target && !el.value?.contains(e.target as HTMLElement)) {
    close();
  }
};

const open = () => {
  if (props.disabled) return;
  calculatePosition();
  isOpen.value = true;
  window.addEventListener("resize", onWindowResize);
  document.addEventListener("click", handleClickOutside, false);
  emit("open");
};

const resetPopupStyles = () => {
  Object.assign(popupStyles, {
    top: "100%",
    bottom: "unset",
    left: props.align === "left" ? "0" : "unset",
    right: props.align === "right" ? "0" : "unset",
    maxWidth: "none",
    maxHeight: "none",
  });
};

const close = () => {
  if (props.disabled) return;
  window.removeEventListener("resize", onWindowResize);
  document.removeEventListener("click", handleClickOutside);

  isOpen.value = false;
  triggerEl.value?.focus();
  emit("close");
};

const toggle = () => {
  if (props.disabled) return;
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const calculatePosition = () => {
  resetPopupStyles();
  const popupBounds = popupEl.value!.getBoundingClientRect();
  const nearestOverflowContainer = getNearestOverflowContainer(el.value!);

  const {
    x: triggerX,
    width: triggerWidth,
    y: triggerY,
  } = triggerEl.value!.getBoundingClientRect();

  let maxWidth;

  if (props.align === "left") {
    maxWidth = Math.min(
      popupBounds.width,
      nearestOverflowContainer.offsetWidth - triggerX + props.viewportPadding
    );
  } else if (props.align === "right") {
    maxWidth = Math.min(
      popupBounds.width,
      triggerX + triggerWidth - props.viewportPadding
    );
  }

  const maxHeight = Math.max(
    popupBounds.height,
    nearestOverflowContainer.offsetHeight - triggerY - props.viewportPadding
  );
  popupStyles.maxWidth = `${maxWidth}px`;
  popupStyles.maxHeight = `${maxHeight}px`;
};

onMounted(resetPopupStyles);
defineExpose({
  open,
  close,
});
</script>

<template>
  <div
    ref="el"
    class="nn-flyout"
    :class="{
      'nn-flyout--open': isOpen,
      'nn-flyout--disabled': props.disabled,
    }"
  >
    <div
      ref="triggerEl"
      class="nn-flyout__trigger"
      :tabindex="props.disabled ? -1 : 0"
      @focus="emit('focus')"
      @click="toggle"
      @keydown.enter="toggle"
      @keydown.escape="close"
    >
      <slot name="trigger" />
    </div>
    <div ref="popupEl" class="nn-flyout__popup" :style="popupStyles">
      <slot />
    </div>
  </div>
</template>
