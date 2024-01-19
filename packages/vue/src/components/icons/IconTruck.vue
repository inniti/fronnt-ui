<script lang="ts">
  export default {
    name: "NNIconTruck"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--truck" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--truck" viewBox="0 0 24 24" width="24" height="24"><line x1="14" y1="16" x2="10" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="6 16 4 16 4 6 15 6 15 14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="16" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="16" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="15 8 20 9 20 16 18 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>