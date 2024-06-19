<script lang="ts">
export default {
  name: "NNCloseButton",
};
</script>

<script lang="ts" setup>
import { NNIconX } from "../icons";
withDefaults(defineProps<{ label?: string }>(), { label: "close" });
</script>

<template>
  <button class="nn-close-button" :aria-label="label">
    <NNIconX />
  </button>
</template>
