<script lang="ts">
export default {
  name: "NNIconCheckCircle",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--check-circle" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--check-circle"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="8 12.42 10.58 15 16 9.09"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
