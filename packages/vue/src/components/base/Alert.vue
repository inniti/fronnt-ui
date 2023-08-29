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
    type?: "primary" | "error" | "warning" | "info" | "success";
    icon?: FronntIcon | null;
    noIcon?: boolean;
  }>(),
  {
    type: "primary",
    icon: null,
    noIcon: false,
  }
);
const icon = computed<FronntIcon>(() => {
  switch (props.type) {
    case "warning":
    case "error":
      return "error-circle";
    case "success":
      return "check-circle";
    default:
      return "info-circle";
  }
});
</script>

<template>
  <div
    class="nn-alert"
    :class="[`nn-alert--${props.type}`, props.noIcon && 'nn-alert--no-icon']"
  >
    <Icon v-if="!props.noIcon" :name="icon" />
    <div class="nn-alert__message"><slot /></div>
  </div>
</template>
