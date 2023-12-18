<script lang="ts" setup>
import { ref } from "vue";
import NNLeadText from "../LeadText.vue";

const text = ref("Hier könnte Ihre Werbung stehen!");
</script>

<template>
  <Story title="Typography/LeadText" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls>
        <HstTextarea v-model="text" title="Text" />
      </template>
      <NNLeadText>
        {{ text }}
      </NNLeadText>
    </Variant>
  </Story>
</template>
