<script lang="ts" setup>
import { ref } from "vue";
import { FronntIcon } from "@fronnt/icons";
import IconButton from "../IconButton.vue";
const icon = ref<FronntIcon>("cart");
const primary = ref(false);
</script>

<template>
  <Story title="Components/IconButton" group="">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="icon" title="Icon" />
        <HstCheckbox v-model="primary" title="Primary" />
      </template>
      <IconButton :icon="icon" :primary="primary" />
    </Variant>
  </Story>
</template>
