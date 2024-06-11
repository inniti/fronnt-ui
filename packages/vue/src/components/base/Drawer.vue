<script lang="ts">
export default {
  name: "NNDrawer",
};
</script>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import NNCloseButton from "./CloseButton.vue";

const props = withDefaults(
  defineProps<{ side?: "left" | "right"; teleport?: string }>(),
  {
    side: "right",
    teleport: "body",
  }
);

const emit = defineEmits<{
  (e: "open"): void;
  (e: "close"): void;
}>();

const isOpen = ref(false);
const closeButton = ref();
const panel = ref();

async function open() {
  isOpen.value = true;
  emit("open");
  await nextTick();
  closeButton.value?.$el?.focus();
}

function close() {
  isOpen.value = false;
  emit("close");
}

function onClick(e: Event) {
  if (isOpen.value && !panel.value.contains(e.target)) {
    close();
  }
}

defineExpose({
  open,
  close,
});
</script>

<template>
  <Teleport :to="props.teleport">
    <div
      class="nn-drawer"
      :class="[isOpen && 'nn-drawer--open', `nn-drawer--${props.side}`]"
      @keydown.esc="close"
      @click="onClick"
    >
      <div class="nn-drawer__panel" ref="panel">
        <div class="nn-drawer__header">
          <div class="nn-drawer__title">
            <slot name="title" />
          </div>

          <NNCloseButton
            ref="closeButton"
            class="nn-drawer__close"
            @click="close"
          />
        </div>

        <div class="nn-drawer__content">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
