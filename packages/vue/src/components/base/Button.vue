<script lang="ts">
export default {
  name: "NNButton",
};
</script>

<script lang="ts" setup>
import { useAttrs, useCssModule } from "vue";
const props = withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "tertiary" | "neutral";
    size?: "default" | "small";
    tag?: string;
  }>(),
  {
    variant: "default",
    size: "default",
    tag: "button",
  }
);

const attrs = useAttrs();

function onClick(e: Event) {
  if (attrs.disabled) e.preventDefault();
}
</script>

<template>
  <component
    :is="props.tag"
    class="nn-button"
    :class="[
      `nn-button--${props.variant}`,
      `nn-button--size-${props.size}`,
      $attrs.disabled && `nn-button--disabled`,
    ]"
    @click="onClick"
  >
    <slot />
  </component>
</template>
