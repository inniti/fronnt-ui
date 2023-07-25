<script lang="ts">
export default {
  name: "NNPrice",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    currency: string;
    value: string;
    strikethrough?: boolean;
    precision?: number;
    locale?: string;
    currencyPosition?: "before" | "after";
  }>(),
  {
    locale: undefined,
    precision: 100,
    strikethrough: false,
    currencyPosition: "after",
  }
);

let formatter: { format: (value: number) => string };
try {
  formatter = new Intl.NumberFormat(props.locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
} catch (error) {
  formatter = {
    format: (value: number) => `${value} ${props.currency}`,
  };
}

const formatted = computed(() => {
  return formatter.format(+props.value / props.precision);
});
</script>

<template>
  <div
    class="nn-price"
    :class="[props.strikethrough && 'nn-price--strikethrough']"
  >
    <div v-if="props.currencyPosition === 'before'" class="nn-price__currency">
      {{ props.currency }}
    </div>
    <div class="nn-price__value">{{ formatted }}</div>
    <div v-if="props.currencyPosition === 'after'" class="nn-price__currency">
      {{ props.currency }}
    </div>
  </div>
</template>
