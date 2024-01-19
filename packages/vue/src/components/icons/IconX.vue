<script lang="ts">
  export default {
    name: "NNIconX"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--x" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--x" viewBox="0 0 24 24" width="24" height="24"><line x1="6" y1="6" x2="18" y2="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="6" y1="18" x2="18" y2="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>