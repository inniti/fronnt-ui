<script lang="ts">
export default {
  name: "NNModal",
  components: { IconButton },
};
</script>

<script lang="ts" setup>
import { watch, getCurrentInstance, ref, nextTick } from "vue";
import IconButton from "./IconButton.vue";

const props = defineProps<{
  title: string;
  show?: boolean;
  inertElement?: string;
  dismissable?: boolean;
}>();
const emit = defineEmits(["close"]);

const closeButton = ref();
const panel = ref();

const close = () => {
  emit("close");
};

const handleInert = (hidden = false) => {
  if (!props.inertElement) {
    return;
  }
  const inertElement = document.querySelector(
    props.inertElement as string
  ) as HTMLElement;
  if (!inertElement) {
    return;
  }

  if (hidden) {
    inertElement.inert = true;
    inertElement.setAttribute("aria-hidden", "true");
  } else {
    inertElement.inert = false;
    inertElement.setAttribute("aria-hidden", "false");
  }
};

const handleShow = async (show: boolean) => {
  if (show) {
    await nextTick();
    closeButton.value?.$el?.focus();
  }

  handleInert(show);
};

const handleClick = (e: Event) => {
  if (props.dismissable) {
    if (!panel.value?.contains(e.target)) {
      close();
    }
  }
};

const handleEsc = () => {
  if (props.dismissable) {
    close();
  }
};

watch(
  () => props.show,
  (value) => {
    handleShow(!!value);
  }
);

const titleId = `modal-title-${getCurrentInstance()?.uid}`;
</script>

<template>
  <Teleport to="body">
    <Transition name="nn-modal-transition">
      <div
        v-if="props.show"
        class="nn-modal"
        role="dialog"
        aria-modal="true"
        aria-live="assertive"
        :aria-labelledby="titleId"
        @keydown.esc="handleEsc"
        @click="handleClick"
      >
        <div ref="panel" class="nn-modal__panel">
          <div class="nn-modal__header">
            <div>
              <div :id="titleId" class="nn-modal__title nn-text-l">
                {{ props.title }}
              </div>
              <slot name="header" />
            </div>
            <IconButton ref="closeButton" icon="X" @click="close" />
          </div>
          <div class="nn-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="nn-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
