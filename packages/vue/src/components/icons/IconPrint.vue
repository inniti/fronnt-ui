<script lang="ts">
export default {
  name: "NNIconPrint",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--print" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--print"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <polyline
        points="8 15 4 15 4 8 20 8 20 15 16 15"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="8"
        y="12"
        width="8"
        height="8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="8"
        y="4"
        width="8"
        height="4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
