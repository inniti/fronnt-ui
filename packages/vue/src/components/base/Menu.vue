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
    label?: string;
  }>(),
  {
    items: () => [],
    align: "left",
    label: "Menu",
  }
);

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

function toggle() {
  isOpen.value = !isOpen.value;
}
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
      <slot
        name="trigger"
        :is-open="isOpen"
        :open="open"
        :toggle="toggle"
        :close="close"
      >
        <NNButton
          ref="trigger"
          variant="neutral"
          size="small"
          class="nn-menu__trigger"
          @click="isOpen = !isOpen"
          :aria-label="props.label"
        >
          <NNIconThreeDots class="nn-menu__trigger-icon" />
        </NNButton>
      </slot>
    </template>
    <menu class="nn-menu__items" @click="close" @keydown.enter="close">
      <slot />
    </menu>
  </NNFlyout>
</template>
