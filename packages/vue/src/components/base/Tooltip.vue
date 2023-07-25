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

  if (top > height) {
    position.value = "top";
  } else {
    position.value = "bottom";
  }

  let dx = 0;
  if (left + elementWidth / 2 < popupWidth / 2) {
    dx = Math.abs(Math.ceil(left + elementWidth / 2 - popupWidth / 2));
  } else {
    dx = Math.min(
      -10,
      Math.ceil(window.innerWidth - left - elementWidth / 2 - popupWidth / 2) -
        10
    );
  }

  diffX.value = dx;
};
</script>

<template>
  <span
    ref="element"
    class="nn-tooltip"
    tabindex="0"
    @pointerover="computeLayout"
  >
    <slot></slot>
    <span
      class="nn-tooltip__popup"
      :class="[`nn-tooltip__popup--${position}`]"
      :style="{ '--x': `${diffX}px` }"
    >
      <div ref="popupElement" class="nn-tooltip__popup-content">
        <slot name="popup"></slot>
      </div>
    </span>
  </span>
</template>
