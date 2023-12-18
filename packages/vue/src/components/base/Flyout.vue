<script lang="ts">
export default {
  name: "NNFlyout",
};
</script>

<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted, watch } from "vue";
import { getNearestOverflowContainer } from "../../helpers/dom";
import NNPopup from "./Popup.vue";
import vClickOutside from "../../directives/ClickOutside";

const props = withDefaults(
  defineProps<{
    align?: "left" | "right";
    viewportPadding?: number;
    disabled?: boolean;
    modelValue?: boolean;
    fullWidth?: boolean;
  }>(),
  {
    viewportPadding: 16,
    align: "left",
    disabled: false,
    modelValue: false,
    fullWidth: false,
  }
);

const emit = defineEmits(["open", "close", "update:modelValue"]);

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
  width: "100%",
});

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      open();
    } else {
      close();
    }
  }
);

const onWindowResize = () => {
  if (isOpen.value) {
    resetPopupStyles();
    nextTick(() => {
      calculatePosition();
    });
  }
};

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
  window.addEventListener("resize", onWindowResize);
  emit("open");
  emit("update:modelValue", true);

  nextTick(() => {
    calculatePosition();
  });
};

const resetPopupStyles = () => {
  Object.assign(popupStyles, {
    top: "100%",
    bottom: "unset",
    left: props.align === "left" ? "0" : "unset",
    right: props.align === "right" ? "0" : "unset",
    maxWidth: "none",
    maxHeight: "none",
    width: props.fullWidth ? "100%" : "auto",
  });
};

const close = () => {
  if (props.disabled) return;
  window.removeEventListener("resize", onWindowResize);

  isOpen.value = false;
  emit("close");
  emit("update:modelValue", false);
};

const calculatePosition = () => {
  resetPopupStyles();

  const nearestOverflowContainer = getNearestOverflowContainer(el.value!);

  const {
    x: triggerX,
    width: triggerWidth,
    y: triggerY,
  } = triggerEl.value!.getBoundingClientRect();

  if (props.fullWidth) {
    popupStyles.maxWidth = "none";
  } else {
    let maxWidth;
    if (props.align === "left") {
      maxWidth =
        nearestOverflowContainer.offsetWidth - triggerX + props.viewportPadding;
    } else if (props.align === "right") {
      maxWidth = triggerX + triggerWidth - props.viewportPadding;
    }
    popupStyles.maxWidth = `${maxWidth}px`;
  }

  const maxHeight =
    nearestOverflowContainer.offsetHeight - triggerY - props.viewportPadding;
  popupStyles.maxHeight = `${maxHeight}px`;
};

onMounted(() => {
  calculatePosition();
});

const onKeydown = (e: KeyboardEvent) => {
  if (e.code === "Escape") {
    close();
  }
};

const onClickOutside = () => {
  close();
};

defineExpose({ open, close });
</script>

<template>
  <div
    ref="el"
    v-click-outside="onClickOutside"
    class="nn-flyout"
    :class="{
      'nn-flyout--open': isOpen,
      'nn-flyout--disabled': props.disabled,
      'nn-flyout--full-width': props.fullWidth,
    }"
    @keydown="onKeydown"
  >
    <div ref="triggerEl" class="nn-flyout__trigger">
      <slot name="trigger" />
    </div>
    <div ref="popupEl" class="nn-flyout__popup" :style="popupStyles">
      <NNPopup>
        <slot />
      </NNPopup>
    </div>
  </div>
</template>
