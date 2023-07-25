<script lang="ts">
export default {
  name: "NNSearchFilter",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import ChevronIcon from "@fronnt/icons/chevron?raw";

type Option = {
  value: string;
  label: string;
  count?: number;
  color?: string;
};

const props = withDefaults(
  defineProps<{
    label: string;
    options: Option[];
    type: string;
    layout: string;
  }>(),
  {
    options: () => [],
    type: "default",
    layout: "list",
  }
);
const emit = defineEmits(["update:selection"]);

const expanded = ref(true);
const selection = ref(new Set());

const toggleOption = (option: Option) => {
  if (selection.value.has(option)) {
    selection.value.delete(option);
  } else {
    selection.value.add(option);
  }
  emit("update:selection", [...selection.value]);
};

const toggle = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div
    class="nn-search-filter"
    :class="[
      expanded && 'nn-search-filter--expanded',
      `nn-search-filter--${props.type}`,
      `nn-search-filter--${props.layout}`,
    ]"
  >
    <div class="nn-search-filter__header">
      <div class="nn-search-filter__label">{{ props.label }}</div>
      <span
        class="nn-search-filter__toggle"
        tabindex="0"
        @click="toggle"
        @keydown.enter="toggle"
        v-html="ChevronIcon"
      ></span>
    </div>
    <div class="nn-search-filter__selection">
      <slot name="selection" />
    </div>
    <ul
      v-show="expanded"
      class="nn-search-filter__options"
      :class="[`nn-search-filter__options--${props.layout}`]"
      :aria-hidden="!expanded"
    >
      <li
        v-for="option in props.options"
        :key="option.value"
        class="nn-search-filter__option"
        :class="[
          selection.has(option) && 'nn-search-filter__option--selected',
          `nn-search-filter__option--${type}`,
        ]"
        tabindex="0"
        @click="toggleOption(option)"
        @keydown.enter="toggleOption(option)"
      >
        <slot name="option" :option="option" :selected="selection.has(option)">
          <template v-if="props.type === 'color'">
            <span
              class="nn-search-filter__color"
              :style="{ backgroundColor: option.color }"
            ></span>
            <span
              v-if="typeof option.count === 'number'"
              class="nn-search-filter__count"
              >{{ option.count }}</span
            >
          </template>
          <template v-else>
            {{ option.label }}
            <span
              v-if="typeof option.count === 'number'"
              class="nn-search-filter__count"
              >{{ option.count }}</span
            >
          </template>
        </slot>
      </li>
    </ul>
  </div>
</template>
