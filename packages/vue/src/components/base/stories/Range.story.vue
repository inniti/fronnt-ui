<script lang="ts" setup>
import { ref } from "vue";
import Range from "../Range.vue";
const disabled = ref(false);
const min = ref(100);
const max = ref(900);

const low = ref(200);
const high = ref(700);
</script>

<template>
  <Story title="Components/Range">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="disabled" title="Disabled" />
        <HstNumber v-model="min" title="Min" />
        <HstNumber v-model="max" title="Max" />
      </template>
      <Range
        :low="low"
        :high="high"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="10"
      />
    </Variant>
  </Story>
</template>
