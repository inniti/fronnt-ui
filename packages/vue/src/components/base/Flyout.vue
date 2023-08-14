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
  }>(),
  {
    viewportPadding: 16,
    align: "left",
  }
);

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

const open = () => {
  calculatePosition();
  isOpen.value = true;
  window.addEventListener("resize", onWindowResize);
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
  window.removeEventListener("resize", onWindowResize);
  isOpen.value = false;
};

const toggle = () => {
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
</script>

<template>
  <div ref="el" class="nn-flyout" :class="{ 'nn-flyout--open': isOpen }">
    <div
      ref="triggerEl"
      class="nn-flyout__trigger"
      tabindex="0"
      @click="toggle"
      @keydown.enter="toggle"
    >
      <slot name="trigger" />
    </div>
    <div ref="popupEl" class="nn-flyout__popup" :style="popupStyles">
      <slot />
    </div>
  </div>
</template>
