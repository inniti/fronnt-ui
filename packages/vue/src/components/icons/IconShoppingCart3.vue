<script lang="ts">
export default {
  name: "NNIconShoppingCart3",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--shopping-cart-3" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--shopping-cart-3"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polyline
        points="20 5 20 5 18 14 7 14 7 5 4 5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="7"
        y1="9"
        x2="19"
        y2="9"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="7"
        y1="5"
        x2="20"
        y2="5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8"
        cy="18"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="17"
        cy="18"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
