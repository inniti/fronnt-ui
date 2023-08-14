<script lang="ts">
export default {
  name: "NNAlert",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import Icon from "./Icon.vue";
import type { FronntIcon } from "@fronnt/icons";

const props = withDefaults(
  defineProps<{
    type?: "error" | "warning" | "info" | "success";
  }>(),
  {
    type: "info",
  }
);
const icon = computed<FronntIcon>(() => {
  switch (props.type) {
    case "error":
      return "x";
    case "success":
      return "check";
    default:
      return "heart";
  }
});
</script>

<template>
  <div class="nn-alert" :class="[`nn-alert--${props.type}`]">
    <Icon :name="icon" />
    <div class="nn-alert__message"><slot /></div>
  </div>
</template>
