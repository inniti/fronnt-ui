<script lang="ts" setup>
import { ref } from "vue";
import Alert from "../Alert.vue";
const noIcon = ref(false);
</script>

<template>
  <Story title="Components/🎉 Alerts" :layout="{ type: 'single' }">
    <template #controls>
      <HstCheckbox v-model="noIcon" title="No Icon" />
    </template>
    <div class="alerts">
      <Alert :no-icon="noIcon"> Something went </Alert>
      <Alert type="info" :no-icon="noIcon"> Info </Alert>
      <Alert type="success" :no-icon="noIcon"> Success </Alert>
      <Alert type="warning" :no-icon="noIcon"> Warning </Alert>
      <Alert type="error" :no-icon="noIcon"> Error </Alert>
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
