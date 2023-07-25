<script lang="ts">
export default {
  name: "NNExpandTransition",
  methods: {
    enter(element: Element) {
      const el = element as HTMLElement;

      const width = getComputedStyle(element).width;

      el.style.width = width;
      el.style.position = "absolute";
      el.style.visibility = "hidden";
      el.style.height = "auto";

      const height = getComputedStyle(element).height;

      el.style.width = "";
      el.style.position = "";
      el.style.visibility = "";
      el.style.height = "0";

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        el.style.height = height;
      });
    },
    afterEnter(element: Element) {
      (element as HTMLElement).style.height = "auto";
    },
    leave(element: Element) {
      const el = element as HTMLElement;

      const height = getComputedStyle(element).height;
      el.style.height = height;
      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        el.style.height = "0";
      });
    },
  },
};
</script>

<template>
  <transition
    name="nn-expand-transition"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>
