<script lang="ts">
  export default {
    name: "NNIconSearch"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--search" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="20" y1="20" x2="16" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>