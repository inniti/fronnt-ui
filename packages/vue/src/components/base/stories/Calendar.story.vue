<script lang="ts" setup>
import { ref } from "vue";
import Calendar from "../Calendar.vue";

const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth());
</script>

<template>
  <Story title="Components/Calendar" :layout="{ type: 'single' }">
    <Calendar :year="year" :month="month" />
  </Story>
</template>
