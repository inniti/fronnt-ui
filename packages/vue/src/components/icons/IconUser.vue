<script lang="ts">
export default {
  name: "NNIconUser",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--user" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--user"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4,20c0-4.42,3.58-8,8-8s8,3.58,8,8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
