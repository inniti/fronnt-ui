<script lang="ts">
export default {
  name: "NNPaging",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import NNButton from "./Button.vue";
import { NNIconChevron, NNIconChevrons } from "../icons";

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
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

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
    <NNButton
      class="nn-paging__button nn-paging__button--start"
      variant="neutral"
      size="small"
      :disabled="modelValue === 1"
      @click="goToPage(1)"
    >
      <NNIconChevrons />
    </NNButton>
    <NNButton
      class="nn-paging__button nn-paging__button--prev"
      variant="neutral"
      size="small"
      :disabled="props.modelValue === 1"
      @click="goToPage(props.modelValue - 1)"
    >
      <NNIconChevron />
    </NNButton>

    <NNButton
      v-for="(entry, idx) in entries"
      :key="idx"
      variant="neutral"
      size="small"
      class="nn-paging__page"
      :class="[modelValue === entry && 'nn-paging__page--active']"
      @click="goToPage(entry)"
    >
      {{ entry }}
    </NNButton>

    <NNButton
      class="nn-paging__button nn-paging__button--next"
      variant="neutral"
      size="small"
      :disabled="props.modelValue === total"
      @click="goToPage(props.modelValue + 1)"
    >
      <NNIconChevron />
    </NNButton>
    <NNButton
      class="nn-paging__button nn-paging__button--end"
      variant="neutral"
      size="small"
      :disabled="props.modelValue === total"
      @click="goToPage(props.total)"
    >
      <NNIconChevrons />
    </NNButton>
  </div>
</template>
