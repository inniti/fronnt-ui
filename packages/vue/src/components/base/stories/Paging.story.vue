<script lang="ts" setup>
import { ref } from "vue";
import Paging from "../Paging.vue";

const page = ref(6);
const total = ref(20);
</script>

<template>
  <Story title="Components/Paging" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls>
        <HstNumber v-model="page" title="Page" />
        <HstNumber v-model="total" title="Total Pages" />
      </template>
      <Paging v-model="page" :total="total" />
    </Variant>
  </Story>
</template>
