<script lang="ts">
export default {
  name: "NNIconShoppingCart2",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--shopping-cart-2" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--shopping-cart-2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polyline
        points="20 4 20 4 18 11 7 11 7 4 4 4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8"
        cy="19"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="17"
        cy="19"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="18 15 7 15 7 4 20 4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
