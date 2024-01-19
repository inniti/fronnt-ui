<script lang="ts">
  export default {
    name: "NNIconShoppingBag"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--shopping-bag" :aria-label="props.label">
    <svg xmlns="http://www.w3.org/2000/svg" class="nn-raw-icon nn-raw-icon--shopping-bag" viewBox="0 0 24 24" width="24" height="24"><path d="M15,8c0,1.66-1.34,3-3,3s-3-1.34-3-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="3" width="14" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </i>
</template>