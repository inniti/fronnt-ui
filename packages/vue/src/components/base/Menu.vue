<script lang="ts">
export default {
  name: "NNMenu",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { FronntIcon } from "@fronnt/icons";
import NNIcon from "./Icon.vue";
import NNButton from "./Button.vue";
import NNFlyout from "./Flyout.vue";

type Item = {
  label: string;
  icon?: FronntIcon;
};

const flyout = ref();

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
  flyout.value.close();
};
</script>

<template>
  <NNFlyout ref="flyout" class="nn-menu" :class="[`nn-menu--${props.align}`]">
    <template #trigger>
      <NNButton variant="subtle" class="nn-menu__trigger" tabindex="-1">
        <slot />
        <NNIcon name="menu" class="nn-menu__trigger-icon" />
      </NNButton>
    </template>
    <ul class="nn-menu__items">
      <li
        v-for="(item, i) in props.items"
        :key="i"
        class="nn-menu__item"
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
  </NNFlyout>
</template>
