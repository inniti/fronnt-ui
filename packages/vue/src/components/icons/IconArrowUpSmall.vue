<script lang="ts">
  export default {
    name: "NNIconArrowUpSmall"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--arrow-up-small" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--arrow-up-small" viewBox="0 0 24 24" width="24" height="24"><line x1="17" y1="7" x2="7" y2="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 12.66 17 7 11.34 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>