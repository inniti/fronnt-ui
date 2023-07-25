<script lang="ts" setup>
import { ref } from "vue";
import Tabs from "../Tabs.vue";
const activeTab = ref(1);
</script>
<template>
  <Story title="Components/Tabs" :layout="{ type: 'single' }">
    <Tabs
      :active="activeTab"
      :tabs="[
        'Kontoübersicht',
        'Bestellungen',
        'Persönliche Daten',
        'Adressen',
        'Wunschliste',
        'Newsletter',
      ]"
      @activate="activeTab = $event"
    >
      <template #tab-0> Kontoübersicht </template>
      <template #tab-1> Bestellungen </template>
      <template #tab-2> Persönliche Daten </template>
      <template #tab-3> Adressen </template>
      <template #tab-4> Wunschliste </template>
      <template #tab-5> Newsletter </template>
    </Tabs>
  </Story>
</template>
