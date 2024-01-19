<script lang="ts">
  export default {
    name: "NNIconSlash"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--slash" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--slash" viewBox="0 0 24 24" width="24" height="24"><line x1="14" y1="5" x2="10" y2="19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>