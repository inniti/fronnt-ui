<script lang="ts">
export default {
  name: "NNAlert",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import Icon from "./Icon.vue";
const props = withDefaults(
  defineProps<{
    type?: "error" | "warning" | "info" | "success";
  }>(),
  {
    type: "info",
  }
);
const icon = computed(() => {
  switch (props.type) {
    case "error":
      return "X";
    case "success":
      return "Check";
    default:
      return "Heart";
  }
});
</script>

<template>
  <div class="nn-alert" :class="[`nn-alert--${props.type}`]">
    <Icon :name="icon" />
    <div class="nn-alert__message"><slot /></div>
  </div>
</template>
