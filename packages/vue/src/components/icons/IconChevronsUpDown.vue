<script lang="ts">
  export default {
    name: "NNIconChevronsUpDown"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--chevrons-up-down" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--chevrons-up-down" viewBox="0 0 24 24" width="24" height="24"><polyline points="16 9 12 5 8 9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8 15 12 19 16 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>