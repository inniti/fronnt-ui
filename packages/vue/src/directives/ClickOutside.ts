import type { Directive } from "vue";

export default <Directive>{
  mounted: function (el, binding) {
    el.clickOutsideHandler = function (event: Event) {
      // console.log("[ClickOutside] ", event.target, el);

      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.addEventListener("click", el.clickOutsideHandler);
  },
  unmounted: function (el) {
    document.removeEventListener("click", el.clickOutsideHandler);
  },
};
