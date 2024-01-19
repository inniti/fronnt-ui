<script lang="ts">
  export default {
    name: "NNIconHouse"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--house" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--house" viewBox="0 0 24 24" width="24" height="24"><polygon points="20 20 4 20 4 10.22 12 3 20 10.22 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>