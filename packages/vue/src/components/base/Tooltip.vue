<script lang="ts">
export default {
  name: "NNTooltip",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const popupElement = ref();
const element = ref();
const position = ref("top");
const diffX = ref(0);
const show = ref(false);

const props = withDefaults(
  defineProps<{
    safeArea?: number;
  }>(),
  {
    safeArea: 8,
  }
);

const onWindowResize = () => {
  computeLayout();
};

onMounted(() => {
  computeLayout();
  window.addEventListener("resize", onWindowResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowResize);
});

const computeLayout = () => {
  const { height, width: popupWidth } =
    popupElement.value.getBoundingClientRect();
  const {
    top,
    left,
    width: elementWidth,
  } = element.value.getBoundingClientRect();

  if (top - props.safeArea > height) {
    position.value = "top";
  } else {
    position.value = "bottom";
  }

  let dx = 0;
  if (left + elementWidth / 2 < popupWidth / 2) {
    dx = Math.abs(Math.ceil(left + elementWidth / 2 - popupWidth / 2));
  } else {
    dx = Math.min(
      0,
      Math.ceil(window.innerWidth - left - elementWidth / 2 - popupWidth / 2) -
        props.safeArea
    );
  }

  diffX.value = dx;
};

const onFocusin = () => {
  show.value = true;
  computeLayout();
};

const onFocusout = (event: FocusEvent) => {
  if (event.currentTarget && event.relatedTarget) {
    if (
      !(event.currentTarget as HTMLElement).contains(
        event.relatedTarget as HTMLElement
      )
    ) {
      show.value = false;
    }
  } else {
    show.value = false;
  }
};

const onPointerenter = () => {
  show.value = true;
  computeLayout();
};

const onPointerleave = () => {
  show.value = false;
};
</script>

<template>
  <span
    ref="element"
    class="nn-tooltip"
    :class="[show && 'nn-tooltip--show']"
    @pointerover="computeLayout"
    @pointerenter="onPointerenter"
    @pointerleave="onPointerleave"
    @focusout="onFocusout"
    @focusin="onFocusin"
  >
    <slot />
    <span
      class="nn-tooltip__popup"
      :class="[`nn-tooltip__popup--${position}`]"
      :style="{ '--x': `${diffX}px` }"
    >
      <div ref="popupElement" class="nn-tooltip__popup-content" :inert="!show">
        <slot name="popup" />
      </div>
    </span>
  </span>
</template>
