<script lang="ts">
export default {
  name: "NNIconDelivery",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--delivery" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--delivery"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polyline
        points="4 8 12 4 20 8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="20 8 12 12 4 8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="4 16 12 20 20 16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="4"
        y1="8"
        x2="4"
        y2="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="20"
        y1="8"
        x2="20"
        y2="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="8"
        y1="10"
        x2="16"
        y2="6"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
