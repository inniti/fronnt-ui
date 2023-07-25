<script lang="ts" setup>
import { ref } from "vue";
import DateRangePicker from "../DateRangePicker.vue";

const model = ref(null);
</script>

<template>
  <Story title="Components/DateRangePicker" :layout="{ type: 'single' }">
    <div class="stage">
      <DateRangePicker v-model="model" />
    </div>
  </Story>
</template>

<style scoped>
.stage {
  height: 500px;
}
</style>
