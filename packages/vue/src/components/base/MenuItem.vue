<script lang="ts">
export default {
  name: "NNMenuItem",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    tag?: string;
  }>(),
  {
    tag: "li",
  }
);
</script>

<template>
  <li
    class="nn-menu-item"
    role="menuitem"
    :class="[props.disabled && `nn-menu-item--disabled`]"
    :aria-disabled="props.disabled"
    :tabindex="props.disabled ? -1 : 0"
  >
    <slot />
  </li>
</template>
