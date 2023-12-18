<script lang="ts" setup>
import Alert from "../Alert.vue";
import { NNIconErrorCircle } from "../../icons";
</script>

<template>
  <Story title="Components/Alerts" :layout="{ type: 'single' }">
    <div class="alerts">
      <Alert> Something went </Alert>
      <Alert variant="info"> Info </Alert>
      <Alert variant="success"> Success </Alert>
      <Alert variant="warning"> Warning </Alert>
      <Alert variant="error">
        <template #icon>
          <NNIconErrorCircle />
        </template>
        Error
      </Alert>
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
