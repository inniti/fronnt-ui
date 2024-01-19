<script lang="ts">
  export default {
    name: "NNIconHouse2"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--house-2" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--house-2" viewBox="0 0 24 24" width="24" height="24"><polygon points="12 3 4 10.22 4 20 10 20 10 14 14 14 14 20 20 20 20 10.22 12 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>