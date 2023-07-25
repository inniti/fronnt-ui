<script lang="ts" setup>
import { ref } from "vue";
import DatePicker from "../DatePicker.vue";

const model = ref(new Date());
</script>

<template>
  <Story title="Components/DatePicker" :layout="{ type: 'single' }">
    <div class="stage">
      <DatePicker v-model="model" />
    </div>
  </Story>
</template>

<style scoped>
.stage {
  height: 500px;
}
</style>
