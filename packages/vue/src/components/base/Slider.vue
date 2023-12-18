<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { NNIconArrow } from "../icons";
const props = defineProps<{
  arrows?: boolean;
  title?: string;
  maxWidth?: string;
}>();
const emit = defineEmits<{
  (
    e: "scroll",
    value: { slide: number; isAtStart: boolean; isAtEnd: boolean }
  ): void;
}>();

const viewport = ref();
const isAtStart = ref(true);
const isAtEnd = ref(true);
const currentSlide = ref(0);
const slidesPositions = ref<number[]>([]);

function scrollLeft() {
  if (!isAtStart.value) {
    viewport.value.scrollTo({
      behavior: "smooth",
      left: slidesPositions.value[currentSlide.value - 1],
    });
  }
}

function scrollRight() {
  if (!isAtEnd.value) {
    viewport.value.scrollTo({
      behavior: "smooth",
      left: slidesPositions.value[currentSlide.value + 1],
    });
  }
}

function calculateScrollPosition() {
  const sliderWidth = viewport.value.scrollWidth;
  const positions: number[] = [];
  const slides = viewport.value.querySelectorAll("& > *");

  if (slides.length > 0) {
    for (let idx = 0; idx < slides.length; idx++) {
      positions.push(slides.item(idx).offsetLeft);
    }
    isAtStart.value = viewport.value.scrollLeft === 0;
    isAtEnd.value =
      sliderWidth - viewport.value.scrollLeft - 30 <=
      viewport.value.getBoundingClientRect().width;
    currentSlide.value = positions.findIndex(
      (p) => p >= viewport.value.scrollLeft
    );
  }

  slidesPositions.value = positions;
  emit("scroll", {
    slide: currentSlide.value,
    isAtStart: isAtStart.value,
    isAtEnd: isAtEnd.value,
  });
}

function onScroll() {
  calculateScrollPosition();
}

onMounted(() => {
  calculateScrollPosition();
});

defineExpose({
  scrollLeft,
  scrollRight,
});
</script>

<template>
  <div
    class="nn-slider"
    :class="{ 'nn-slider--padded': !!props.maxWidth }"
    :style="{
      '--max-width': props.maxWidth,
    }"
  >
    <div v-if="$slots.title || props.arrows" class="nn-slider__header">
      <div class="nn-slider__title">
        <slot name="title" />
      </div>
      <div class="nn-slider__arrows">
        <template v-if="props.arrows">
          <NNIconArrow
            class="nn-slider__arrow nn-slider__arrow--left"
            :class="[isAtStart && 'nn-slider__arrow--disabled']"
            :tabindex="!isAtStart ? '1' : null"
            @click="scrollLeft"
            @keydown.enter="scrollLeft"
          />
          <NNIconArrow
            class="nn-slider__arrow nn-slider__arrow--right"
            :class="[isAtEnd && 'nn-slider__arrow--disabled']"
            :tabindex="!isAtEnd ? '1' : null"
            @click="scrollRight"
            @keydown.enter="scrollRight"
          />
        </template>
      </div>
    </div>

    <div ref="viewport" class="nn-slider__viewport" @scroll="onScroll">
      <slot />
    </div>
  </div>
</template>
