<script lang="ts">
export default {
  name: "NNIconCreditCard",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--credit-card" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--credit-card"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="1"
        ry="1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="4"
        y1="10"
        x2="20"
        y2="10"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
