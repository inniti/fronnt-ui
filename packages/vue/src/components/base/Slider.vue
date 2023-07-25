<script lang="ts" setup>
import { ref, onMounted } from "vue";
import NNIcon from "./Icon.vue";
const props = defineProps<{
  slides: Array<unknown>;
  arrows?: boolean;
  title?: string;
}>();
const emit = defineEmits(["scroll"]);
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
  const slides = viewport.value.querySelectorAll(".nn-slider__slide");

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
  <div class="nn-slider">
    <div v-if="props.title || props.arrows" class="nn-slider__header">
      <div v-if="props.title" class="nn-slider__title nn-heading-m">
        {{ props.title }}
      </div>
      <div v-if="props.arrows" class="nn-slider__arrows">
        <NNIcon
          class="nn-slider__arrow nn-slider__arrow--left"
          :class="[isAtStart && 'nn-slider__arrow--disabled']"
          name="Arrow"
          :tabindex="!isAtStart ? '1' : null"
          @click="scrollLeft"
          @keydown.enter="scrollLeft"
        />
        <NNIcon
          class="nn-slider__arrow nn-slider__arrow--right"
          :class="[isAtEnd && 'nn-slider__arrow--disabled']"
          name="Arrow"
          :tabindex="!isAtEnd ? '1' : null"
          @click="scrollRight"
          @keydown.enter="scrollRight"
        />
      </div>
    </div>

    <div ref="viewport" class="nn-slider__viewport" @scroll="onScroll">
      <div
        v-for="(slide, idx) in props.slides"
        :key="idx"
        class="nn-slider__slide"
      >
        <slot name="slide" :slide="slide" :idx="idx"> ? </slot>
      </div>
    </div>
  </div>
</template>
