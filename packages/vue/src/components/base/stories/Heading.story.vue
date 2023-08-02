<script lang="ts" setup>
import { ref } from "vue";
import Heading from "../Heading.vue";
const text = ref("Heading");
</script>

<template>
  <Story title="Typography/Heading" :layout="{ type: 'single' }">
    <template #controls>
      <HstText v-model="text" title="Text" />
    </template>
    <Variant title="Default">
      <Heading size="1" variant="light">{{ text }}</Heading>
      <Heading size="1" variant="black">{{ text }}</Heading>
      <Heading size="2" variant="light">{{ text }}</Heading>
      <Heading size="2" variant="black">{{ text }}</Heading>
      <Heading size="3" variant="light">{{ text }}</Heading>
      <Heading size="3" variant="black">{{ text }}</Heading>
      <Heading size="4" variant="light">{{ text }}</Heading>
      <Heading size="4" variant="black">{{ text }}</Heading>
      <Heading size="5" variant="light">{{ text }}</Heading>
      <Heading size="5" variant="black">{{ text }}</Heading>
      <Heading size="6" variant="light">{{ text }}</Heading>
      <Heading size="6" variant="black">{{ text }}</Heading>
    </Variant>
  </Story>
</template>
