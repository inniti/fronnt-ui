<script lang="ts">
export default {
  name: "NNIconLoader",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--loader" :aria-label="props.label">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="nn-raw-icon nn-raw-icon--loader"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="6.27"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="12"
        y1="17.73"
        x2="12"
        y2="21"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="3"
        y1="12"
        x2="6.27"
        y2="12"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="17.73"
        y1="12"
        x2="21"
        y2="12"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="18.36"
        y1="5.64"
        x2="16.05"
        y2="7.95"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="7.95"
        y1="16.05"
        x2="5.64"
        y2="18.36"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="5.64"
        y1="5.64"
        x2="7.95"
        y2="7.95"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="16.05"
        y1="16.05"
        x2="18.36"
        y2="18.36"
        fill="#fff"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</template>
