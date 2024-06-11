<script lang="ts">
export default {
  name: "NNIconGift",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--gift" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--gift"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <rect
        x="6"
        y="14"
        width="12"
        height="6"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="4"
        y="10"
        width="16"
        height="4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.25,9.5c-1.52,0-2.75-1.23-2.75-2.75s1.23-2.75,2.75-2.75,2.75,1.23,2.75,2.75v2.75h-2.75Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.75,9.5c1.52,0,2.75-1.23,2.75-2.75s-1.23-2.75-2.75-2.75-2.75,1.23-2.75,2.75v2.75s2.75,0,2.75,0Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="12"
        y1="10"
        x2="12"
        y2="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
