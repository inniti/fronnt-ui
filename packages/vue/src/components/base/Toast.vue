<script lang="ts">
export default {
  name: "NNToast",
};
</script>

<script lang="ts" setup>
import { computed, ref, watch, onBeforeUnmount } from "vue";
import { FronntIcon } from "@fronnt/icons";
import Icon from "./Icon.vue";

const props = withDefaults(
  defineProps<{
    show: boolean;
    timeout?: number;
    type?: "success" | "error" | "info" | "warning";
    clickable?: boolean;
  }>(),
  {
    timeout: 3000,
    type: "info",
  }
);

const emit = defineEmits(["timeout", "click"]);

const icon = computed<FronntIcon | null>(() => {
  switch (props.type) {
    case "success":
      return "check";
    case "error":
      return "x";
    default:
      return "Arrow";
  }
});

const show = ref(false);

const timeout = ref<ReturnType<typeof setTimeout>>();

const startTimer = () => {
  timeout.value = setTimeout(() => {
    show.value = false;
    emit("timeout");
  }, props.timeout);
};

watch(
  () => props.show,
  (value) => {
    clearTimeout(timeout.value);
    show.value = value;
    if (show.value && props.timeout > 0) {
      startTimer();
    }
  }
);

onBeforeUnmount(() => {
  clearTimeout(timeout.value);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="nn-toast-transition">
      <div
        v-if="show"
        class="nn-toast"
        aria-live="assertive"
        role="alert"
        :class="[
          `nn-toast--${props.type}`,
          props.clickable && `nn-toast--clickable`,
        ]"
        @click="emit('click')"
      >
        <span class="nn-toast__icon">
          <slot name="icon">
            <Icon v-if="icon" :name="icon" />
          </slot>
        </span>
        <span class="nn-toast__content"><slot /></span>
        <Icon name="Chevron" class="nn-toast__chevron" />
      </div>
    </Transition>
  </Teleport>
</template>
