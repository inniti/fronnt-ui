<script lang="ts">
export default {
  name: "NNPaging",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import Icon from "./Icon.vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    total?: number;
    entries?: number;
  }>(),
  {
    modelValue: 1,
    total: 1,
    entries: 5,
  }
);
const emit = defineEmits(["update:modelValue"]);

const entries = computed(() => {
  const pages = [];
  const minLeft = Math.max(1, props.modelValue - Math.floor(props.entries / 2));
  const padLeft = Math.max(
    0,
    props.modelValue - (props.total - Math.floor(props.entries / 2))
  );
  for (let i = -1 * padLeft; i < props.entries; i++) {
    pages.push(i + minLeft);
  }
  return pages.filter((e) => e > 0 && e <= props.total);
});

const goToPage = (page: number) => {
  emit("update:modelValue", page);
};
</script>

<template>
  <div class="nn-paging">
    <button
      class="nn-paging__button nn-paging__button--start"
      :disabled="modelValue === 1"
      @click="goToPage(1)"
    >
      <Icon name="chevron" />
    </button>
    <button
      class="nn-paging__button nn-paging__button--prev"
      :disabled="props.modelValue === 1"
      @click="goToPage(props.modelValue - 1)"
    >
      <Icon name="chevron" />
    </button>

    <button
      v-for="(entry, idx) in entries"
      :key="idx"
      class="nn-paging__page"
      :class="[modelValue === entry && 'nn-paging__page--active']"
      @click="goToPage(entry)"
    >
      {{ entry }}
    </button>

    <button
      class="nn-paging__button nn-paging__button--next"
      :disabled="props.modelValue === total"
      @click="goToPage(props.modelValue + 1)"
    >
      <Icon name="chevron" />
    </button>
    <button
      class="nn-paging__button nn-paging__button--end"
      :disabled="props.modelValue === total"
      @click="goToPage(props.total)"
    >
      <Icon name="chevron" />
    </button>
  </div>
</template>
