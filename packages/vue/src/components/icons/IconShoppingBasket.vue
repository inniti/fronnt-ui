<script lang="ts">
export default {
  name: "NNIconShoppingBasket",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--shopping-basket" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--shopping-basket"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M9,8v-2c0-1.66,1.34-3,3-3s3,1.34,3,3v2"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polygon
        points="18 20 6 20 4 8 20 8 18 20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
