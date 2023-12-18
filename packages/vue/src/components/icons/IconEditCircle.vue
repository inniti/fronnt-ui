<script lang="ts">
  export default {
    name: "NNIconEditCircle"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--edit-circle" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--edit-circle" viewBox="0 0 24 24"><polygon points="18.08 3 8.97 12.11 8 16 11.89 15.03 21 5.92 18.08 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21,12c0,4.97-4.03,9-9,9S3,16.97,3,12,7.03,3,12,3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>