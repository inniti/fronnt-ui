import type { Directive } from "vue";

export default <Directive>{
  mounted: function (el, binding) {
    if (typeof binding.value !== "function") {
      console.warn("[v-nn-resize] binding value must be a function");
      return;
    }
    el.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width =
          entry.contentBoxSize?.[0]?.inlineSize || entry.contentRect.width;
        const height =
          entry.contentBoxSize?.[0]?.blockSize || entry.contentRect.height;
        binding.value({ width, height });
      }
    });
    el.resizeObserver.observe(el);
  },
  unmounted: function (el) {
    el.resizeObserver?.disconnect(el);
  },
};
