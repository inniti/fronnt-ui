<script lang="ts">
export default {
  name: "NNIconChevrons",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--chevrons" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--chevrons"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polyline
        points="7 17 12 12 7 7"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="13 17 18 12 13 7"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
