<script lang="ts">
export default {
  name: "NNRange",
};
</script>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
const props = withDefaults(
  defineProps<{
    min?: number;
    max?: number;
    disabled?: boolean;
    low?: number;
    high?: number;
    step?: number;
  }>(),
  {
    min: 0,
    max: 100,
    low: 0,
    high: 100,
    step: 1,
  }
);

const emit = defineEmits(["update:low", "update:high"]);

const element = ref();
// eslint-disable-next-line vue/no-dupe-keys
const min = ref(0);
// eslint-disable-next-line vue/no-dupe-keys
const max = ref(0);

const knobSize = 16;

watch(
  () => props,
  () => {
    min.value = Math.max(props.min, props.low);
    max.value = Math.min(props.high, props.max);
  },
  {
    immediate: true,
  }
);

const controlStyles = computed(() => {
  const bounds = element.value?.getBoundingClientRect();
  let trackWidthMin = "100%";
  let trackWidthMax = "100%";
  if (bounds) {
    console.log(min.value, max.value);

    const splitValue = (+min.value + +max.value) / 2;

    trackWidthMin = `${
      knobSize +
      ((splitValue - +props.min) / (+props.max - +props.min)) *
        (bounds.width - 2 * knobSize)
    }px`;

    trackWidthMax = `${
      knobSize +
      ((+props.max - splitValue) / (+props.max - +props.min)) *
        (bounds.width - 2 * knobSize)
    }px`;
  }

  return {
    min: {
      width: trackWidthMin,
    },
    max: {
      width: trackWidthMax,
    },
  };
});

const onChangeMin = () => {
  emit("update:low", min.value);
};

const onChangeMax = () => {
  emit("update:high", max.value);
};
</script>

<template>
  <div
    ref="element"
    class="nn-range"
    :class="[props.disabled && 'nn-range--disabled']"
    :style="{
      '--knob-size': `${knobSize}px`,
    }"
  >
    <div class="nn-range__track">
      <input
        v-model="min"
        class="nn-range__knob"
        type="range"
        :step="props.step"
        :min="props.min"
        :max="max - 1"
        :style="controlStyles.min"
        :data-knob-size="knobSize"
        @input="onChangeMin"
      />
      <input
        v-model="max"
        class="nn-range__knob"
        type="range"
        :step="props.step"
        :min="min"
        :max="props.max"
        :style="controlStyles.max"
        :data-knob-size="knobSize"
        @input="onChangeMax"
      />
    </div>

    <div class="nn-range__values">
      <input
        v-model="min"
        class="nn-range__value"
        type="number"
        :step="props.step"
        :min="props.min"
        :max="max - 1"
        @input="onChangeMin"
      />
      <input
        v-model="max"
        class="nn-range__value"
        type="number"
        :step="props.step"
        :min="min"
        :max="props.max"
        @input="onChangeMin"
      />
    </div>
  </div>
</template>
