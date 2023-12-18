<script lang="ts">
  export default {
    name: "NNIconPlus"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--plus" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--plus" viewBox="0 0 24 24"><line x1="7" y1="12" x2="17" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="17" x2="12" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>