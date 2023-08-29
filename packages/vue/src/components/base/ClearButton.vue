<script lang="ts">
export default {
  name: "NNClearButton",
};
</script>

<script lang="ts" setup>
import NNIcon from "./Icon.vue";
</script>

<template>
  <button class="nn-clear-button">
    <NNIcon name="x" class="nn-clear-button__icon" />
  </button>
</template>
