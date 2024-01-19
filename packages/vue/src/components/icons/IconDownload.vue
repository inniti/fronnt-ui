<script lang="ts">
  export default {
    name: "NNIconDownload"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--download" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--download" viewBox="0 0 24 24" width="24" height="24"><polyline points="8 12 12 16 16 12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="16" x2="12" y2="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="19 17 19 21 5 21 5 17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>