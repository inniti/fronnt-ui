<script lang="ts">
export default {
  name: "NNIconHeart",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--heart" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--heart"
      viewBox="0 0 24 24"
    >
      <path
        d="M12,20l7.11-7.11c1.01-1.01,1.78-2.31,1.78-3.85,0-2.78-2.26-5.04-5.04-5.04-2.07,0-2.95,1.17-3.85,2-.9-.83-1.78-2-3.85-2-2.78,0-5.04,2.26-5.04,5.04,0,1.54.77,2.84,1.78,3.85,0,0,7.11,7.11,7.11,7.11Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
