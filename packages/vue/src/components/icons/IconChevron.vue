<script lang="ts">
  export default {
    name: "NNIconChevron"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--chevron" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--chevron" viewBox="0 0 24 24" width="24" height="24"><polyline points="10.25 17 15.25 12 10.25 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>