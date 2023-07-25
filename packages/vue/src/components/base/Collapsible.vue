<script lang="ts">
export default {
  name: "NNCollapsible",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import ExpandTransition from "../transitions/Expand.vue";
import Icon from "./Icon.vue";

const props = withDefaults(
  defineProps<{
    show?: boolean;
    speed?: number;
  }>(),
  {
    speed: 0,
  }
);

const emit = defineEmits(["toggle"]);

const contentElement = ref();

const toggle = () => {
  emit("toggle", !props.show);
};
</script>

<template>
  <div
    class="nn-collapsible"
    :class="[props.show && 'nn-collapsible--show']"
    :style="{ '--speed': `${props.speed}ms` }"
  >
    <div
      class="nn-collapsible__header"
      tabindex="0"
      @click="toggle"
      @keydown.enter="toggle"
    >
      <div><slot name="header" /></div>
      <Icon name="Chevron" class="nn-collapsible__chevron" />
    </div>

    <ExpandTransition>
      <div
        v-show="props.show"
        ref="contentElement"
        class="nn-collapsible__content"
      >
        <slot />
      </div>
    </ExpandTransition>
  </div>
</template>
