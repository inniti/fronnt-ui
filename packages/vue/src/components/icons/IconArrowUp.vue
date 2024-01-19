<script lang="ts">
  export default {
    name: "NNIconArrowUp"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--arrow-up" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--arrow-up" viewBox="0 0 24 24" width="24" height="24"><polyline points="8 4 20 4 20 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="20" y1="4" x2="4" y2="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>