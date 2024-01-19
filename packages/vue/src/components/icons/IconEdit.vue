<script lang="ts">
  export default {
    name: "NNIconEdit"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--edit" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--edit" viewBox="0 0 24 24" width="24" height="24"><polygon points="18.08 3 8.97 12.11 8 16 11.89 15.03 21 5.92 18.08 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="12 4 4 4 4 20 20 20 20 12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>