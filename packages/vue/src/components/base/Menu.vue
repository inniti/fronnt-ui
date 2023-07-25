<script lang="ts">
export default {
  name: "NNMenu",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { FronntIcon } from "@fronnt/icons";
import NNIcon from "./Icon.vue";

type Item = {
  label: string;
  icon?: FronntIcon;
};

const isOpen = ref(false);
const element = ref();

const props = withDefaults(
  defineProps<{
    items: Item[];
    align?: "left" | "right";
  }>(),
  {
    items: () => [],
    align: "left",
  }
);

const emit = defineEmits(["action"]);

const onActivateItem = (item: Item) => {
  emit("action", item);
  close();
};

const open = () => {
  isOpen.value = true;
  document.addEventListener("click", handleClickOutside, false);
};

const close = () => {
  isOpen.value = false;
  document.removeEventListener("click", handleClickOutside);
};

const handleClickOutside = function (e: MouseEvent) {
  if (element.value !== e.target && !element.value.contains(e.target)) {
    close();
  }
};

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.code === "Escape") {
    e.preventDefault();
    e.stopPropagation();
    close();
  }
};
</script>

<template>
  <div
    ref="element"
    class="nn-menu"
    :class="[isOpen && 'nn-menu--open', `nn-menu--${props.align}`]"
    @keydown="onKeydown"
  >
    <div
      class="nn-menu__trigger"
      tabindex="0"
      @click="toggle"
      @keydown.enter="toggle"
    >
      <div class="nn-menu__trigger-label">
        <slot />
      </div>
      <NNIcon name="Menu" class="nn-menu__trigger-icon" />
    </div>
    <div class="nn-menu__popup">
      <ul class="nn-menu__items">
        <li
          v-for="(item, i) in props.items"
          class="nn-menu__item"
          :key="i"
          tabindex="0"
          @click="onActivateItem(item)"
          @keydown.enter="onActivateItem(item)"
        >
          <slot name="item" :item="item">
            <div class="nn-menu__item-icon">
              <NNIcon v-if="item.icon" :name="item.icon" />
            </div>
            <div class="nn-menu__item-label">
              <slot name="item-label" :item="item">
                {{ item.label }}
              </slot>
            </div>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
