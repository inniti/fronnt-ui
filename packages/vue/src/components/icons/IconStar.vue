<script lang="ts">
export default {
  name: "NNIconStar",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--star" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--star"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polygon
        points="12 4 14.47 8.94 20 9.73 16 13.57 16.94 19 12 16.44 7.06 19 8 13.57 4 9.73 9.53 8.94 12 4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
