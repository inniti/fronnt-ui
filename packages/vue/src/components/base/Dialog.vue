<script lang="ts">
export default {
  name: "NNDialog",
};
</script>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import NNCloseButton from "./CloseButton.vue";
import { getRandomId } from "../../helpers/dom";

const props = withDefaults(
  defineProps<{
    title: string;
    dismissable?: boolean;
  }>(),
  {}
);

const emit = defineEmits<{
  (e: "open"): void;
  (e: "close"): void;
}>();

const closeButton = ref();
const panel = ref();
const isOpen = ref(false);

const interElement = ref<HTMLElement>();

const handleInert = (inertElementSelector?: string) => {
  if (!inertElementSelector) {
    return;
  }
  const el = document.querySelector(inertElementSelector) as HTMLElement;
  if (!el) {
    return;
  }
  interElement.value = el;

  el.inert = true;
  el.setAttribute("aria-hidden", "true");
};

const resetInert = () => {
  if (interElement.value) {
    const el = interElement.value;
    el.inert = false;
    el.setAttribute("aria-hidden", "false");
    interElement.value = undefined;
  }
};

const open = (inertElementSelector?: string) => {
  isOpen.value = true;
  nextTick().then(() => {
    closeButton.value?.$el?.focus();
  });
  handleInert(inertElementSelector);
  emit("open");
};

const close = () => {
  isOpen.value = false;
  resetInert();
  emit("close");
};

const handleClick = (e: Event) => {
  if (props.dismissable) {
    if (!panel.value?.contains(e.target)) {
      e.stopPropagation();
      close();
    }
  }
};

const handleEsc = () => {
  if (props.dismissable) {
    close();
  }
};

defineExpose({
  open,
  close,
});

const titleId = getRandomId("dialog-title");
</script>

<template>
  <Teleport to="body">
    <Transition name="nn-dialog-transition">
      <div
        v-if="isOpen"
        class="nn-dialog"
        role="dialog"
        :aria-modal="!!interElement"
        aria-live="assertive"
        :aria-labelledby="titleId"
        @keydown.esc="handleEsc"
        @click="handleClick"
      >
        <div ref="panel" class="nn-dialog__panel">
          <div class="nn-dialog__header">
            <div>
              <div :id="titleId" class="nn-dialog__title">
                {{ props.title }}
              </div>
              <slot name="header" />
            </div>
            <NNCloseButton class="nn-dialog__close" @click="close" />
          </div>
          <div class="nn-dialog__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="nn-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
