<script lang="ts" setup>
import Icon from "./Icon.vue";
import { FronntIcon } from "@fronnt/icons";
const props = defineProps<{
  icon: FronntIcon;
  primary?: boolean;
}>();
</script>

<template>
  <button
    class="nn-icon-button"
    :class="[props.primary && 'nn-icon-button--primary']"
  >
    <Icon :name="props.icon" />
  </button>
</template>
