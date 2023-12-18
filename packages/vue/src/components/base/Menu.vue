<script lang="ts">
export default {
  name: "NNMenu",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { NNIconThreeDots } from "../icons";
import NNButton from "./Button.vue";
import NNFlyout from "./Flyout.vue";

const flyout = ref();
const trigger = ref();
const isOpen = ref(false);

const props = withDefaults(
  defineProps<{
    align?: "left" | "right";
  }>(),
  {
    items: () => [],
    align: "left",
  }
);

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <NNFlyout
    ref="flyout"
    v-model="isOpen"
    class="nn-menu"
    :class="[`nn-menu--${props.align}`]"
    :align="props.align"
  >
    <template #trigger>
      <NNButton
        ref="trigger"
        variant="neutral"
        class="nn-menu__trigger"
        @click="isOpen = !isOpen"
      >
        <slot name="trigger">
          <NNIconThreeDots class="nn-menu__trigger-icon" />
        </slot>
      </NNButton>
    </template>
    <ul class="nn-menu__items" @click="close" @keydown.enter="close">
      <slot />
    </ul>
  </NNFlyout>
</template>
