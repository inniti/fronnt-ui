<script lang="ts" setup>
import { ref } from "vue";
import { logEvent } from "histoire/client";
import Toggle from "../Toggle.vue";

const modelValue = ref(false);
const disabled = ref(false);
</script>

<template>
  <Story title="Components/Toggle">
    <Variant title="Default">
      <Toggle
        v-model="modelValue"
        :disabled="disabled"
        @update:model-value="logEvent('Model value updated', $event)"
      >
        A toggle button
      </Toggle>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
    </template>
  </Story>
</template>
