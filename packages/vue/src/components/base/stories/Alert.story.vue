<script lang="ts" setup>
import Alert from "../Alert.vue";
</script>

<template>
  <Story title="Components/Alerts" :layout="{ type: 'single' }">
    <div class="alerts">
      <Alert type="error">Something went wrong</Alert>
      <Alert type="warning">Something went almost wrong</Alert>
      <Alert type="info">Something went</Alert>
      <Alert type="success">Something went right</Alert>
    </div>
  </Story>
</template>

<style scoped>
.alerts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
