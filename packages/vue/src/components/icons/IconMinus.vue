<script lang="ts">
  export default {
    name: "NNIconMinus"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--minus" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--minus" viewBox="0 0 24 24" width="24" height="24"><line x1="7" y1="12" x2="17" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>