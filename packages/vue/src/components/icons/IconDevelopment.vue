<script lang="ts">
  export default {
    name: "NNIconDevelopment"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--development" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--development" viewBox="0 0 24 24"><line x1="14" y1="5" x2="10" y2="19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 16 21 12 17 8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 8 3 12 7 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>