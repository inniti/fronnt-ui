<script lang="ts" setup>
import { logEvent } from "histoire/client";
import NNCloseButton from "../CloseButton.vue";
</script>

<template>
  <Story title="Components/CloseButton">
    <Variant title="Default">
      <NNCloseButton @click="logEvent('click', $event)" />
    </Variant>
  </Story>
</template>
