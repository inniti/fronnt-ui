<script lang="ts">
export default {
  name: "NNIconQuestionMark",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--question-mark" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--question-mark"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M6.86,8.14c0-2.84,2.3-5.14,5.14-5.14s5.14,2.3,5.14,5.14-2.3,5.14-5.14,5.14v2.71"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="12" cy="20" r="1" />
    </svg>
  </i>
</template>
