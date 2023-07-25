<script lang="ts">
export default {
  name: "NNBadge",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  count: number | string;
}>();

const displayedCount = computed(() => {
  if (isNaN(+props.count)) {
    return props.count;
  }
  return (props.count as number) <= 999 ? props.count : "999+";
});
</script>

<template>
  <span class="nn-badge" :title="props.count.toString()">{{
    displayedCount
  }}</span>
</template>
