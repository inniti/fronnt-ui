<script lang="ts">
export default {
  name: "NNIconQuestionCircle",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--question-circle" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--question-circle"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M9.23,9.77c0-1.53,1.24-2.77,2.77-2.77s2.77,1.24,2.77,2.77-1.24,2.77-2.77,2.77v1.46"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="12" cy="17" r="1" />
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
