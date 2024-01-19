<script lang="ts">
  export default {
    name: "NNIconInfoCircle"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--info-circle" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--info-circle" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="11" x2="12" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="8" x2="12" y2="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>