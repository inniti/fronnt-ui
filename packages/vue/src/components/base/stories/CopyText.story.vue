<script lang="ts" setup>
import { ref } from "vue";
import CopyText from "../CopyText.vue";
const text = ref("CopyText");
</script>

<template>
  <Story title="Typography/CopyText" :layout="{ type: 'single' }">
    <template #controls>
      <HstTextarea v-model="text" title="Text" />
    </template>
    <Variant title="Default">
      <CopyText size="regular">{{ text }} regular</CopyText>
      <CopyText size="small">{{ text }} small</CopyText>
      <CopyText size="large">{{ text }} large</CopyText>
    </Variant>
  </Story>
</template>
