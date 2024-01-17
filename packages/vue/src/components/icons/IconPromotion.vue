<script lang="ts">
export default {
  name: "NNIconPromotion",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--promotion" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--promotion"
      viewBox="0 0 24 24"
    >
      <line
        x1="15"
        y1="9"
        x2="9"
        y2="15"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="14.5" cy="14.5" r="1.5" />
      <circle cx="9.5" cy="9.5" r="1.5" />
      <polygon
        points="12 3 14.76 5.35 18.36 5.64 18.65 9.24 21 12 18.65 14.76 18.36 18.36 14.76 18.65 12 21 9.24 18.65 5.64 18.36 5.35 14.76 3 12 5.35 9.24 5.64 5.64 9.24 5.35 12 3"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
