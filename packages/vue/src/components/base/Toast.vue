<script lang="ts">
export default {
  name: "NNToast",
};
</script>

<script lang="ts" setup>
import useToasts, { type ToastType } from "../../composables/useToasts";
import NNCloseButton from "./CloseButton.vue";

const props = withDefaults(
  defineProps<{
    id: string;
    type?: ToastType;
    title: string;
    message?: string;
    action?: {
      fn: (toast: { id: string }) => void;
      label: string;
    };
  }>(),
  {
    message: undefined,
    type: "info",
    action: undefined,
  }
);

const { close } = useToasts();

const runAction = () => {
  props.action?.fn({ id: props.id });
};
</script>

<template>
  <div class="nn-toast" :class="`nn-toast--${props.type}`">
    <NNCloseButton class="nn-toast__close" @click="close(props.id)" />
    <div class="nn-toast__title">
      {{ props.title }}
    </div>
    <div v-if="props.message" class="nn-toast__content">
      {{ props.message }}
    </div>
    <div v-if="props.action">
      <a class="nn-toast__action" @click="runAction">
        {{ props.action.label }}
      </a>
    </div>
  </div>
</template>
