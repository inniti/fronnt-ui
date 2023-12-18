<script lang="ts">
  export default {
    name: "NNIconSmile"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--smile" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--smile" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><path d="M15.94,15c-.9,1.18-2.33,1.95-3.94,1.95s-3.03-.76-3.94-1.95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>