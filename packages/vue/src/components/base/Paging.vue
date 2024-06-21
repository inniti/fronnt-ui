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
    url?: string;
    pageParam?: string;
    preventClick?: boolean;
  }>(),
  {
    modelValue: 1,
    total: 1,
    entries: 5,
    url: undefined,
    pageParam: "page",
    preventClick: false,
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

function getButtonUrl(page: number) {
  if (!props.url) return;
  let _page = Math.max(1, page);
  const url = new URL(props.url);
  url.searchParams.set(props.pageParam, `${_page}`);
  return url.href;
}

const buttonTag = computed(() => {
  return props.url ? "a" : "button";
});

function onButtonClick(event: Event, page: number) {
  if (page < 1 || page > props.total) return;
  if (props.preventClick) event.preventDefault();
  emit("update:modelValue", page);
}
</script>

<template>
  <div class="nn-paging">
    <NNButton
      class="nn-paging__button nn-paging__button--start"
      variant="neutral"
      size="small"
      :href="getButtonUrl(1)"
      :tag="buttonTag"
      :disabled="props.modelValue <= 1"
      @click="(event) => onButtonClick(event, 1)"
    >
      <NNIconChevrons />
    </NNButton>
    <NNButton
      class="nn-paging__button nn-paging__button--prev"
      variant="neutral"
      size="small"
      :href="getButtonUrl(props.modelValue - 1)"
      :tag="buttonTag"
      :disabled="props.modelValue <= 1"
      @click="(event) => onButtonClick(event, props.modelValue - 1)"
    >
      <NNIconChevron />
    </NNButton>

    <NNButton
      v-for="(entry, idx) in entries"
      :key="idx"
      variant="neutral"
      size="small"
      :href="getButtonUrl(entry)"
      :tag="buttonTag"
      class="nn-paging__page"
      :class="[modelValue === entry && 'nn-paging__page--active']"
      @click="(event) => onButtonClick(event, entry)"
    >
      {{ entry }}
    </NNButton>

    <NNButton
      class="nn-paging__button nn-paging__button--next"
      variant="neutral"
      size="small"
      :href="getButtonUrl(props.modelValue + 1)"
      :tag="buttonTag"
      :disabled="props.modelValue >= total"
      @click="(event) => onButtonClick(event, props.modelValue + 1)"
    >
      <NNIconChevron />
    </NNButton>
    <NNButton
      class="nn-paging__button nn-paging__button--end"
      variant="neutral"
      size="small"
      :href="getButtonUrl(props.total)"
      :tag="buttonTag"
      :disabled="props.modelValue >= total"
      @click="(event) => onButtonClick(event, props.total)"
    >
      <NNIconChevrons />
    </NNButton>
  </div>
</template>
