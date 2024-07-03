<script lang="ts" setup>
import Toasts from "../Toasts.vue";
import useToasts from "../../../composables/useToasts";

const { add, clear, close } = useToasts();

function openDeprecated() {
  // @ts-ignore
  add("success", "This is a toast message", "With a description");
}
</script>

<template>
  <Story title="Components/Toast">
    <Variant title="Default">
      <button
        @click="
          add({
            type: 'info',
            title: 'This is a toast message',
            message:
              'With a description, which might have a few words. And sentences, which required multiple line breaks.',
            action: {
              label: 'Show cart',
              fn: () => {},
            },
          })
        "
      >
        Info
      </button>
      <button
        @click="
          add({
            type: 'success',
            title: 'This is a toast message with a very long title',
            autoClose: 20000,
            action: {
              label: 'action',
              fn: () => {},
            },
          })
        "
      >
        Success
      </button>
      <button @click="add({ type: 'error', title: 'This is a toast message' })">
        Error
      </button>
      <button
        @click="
          add({
            type: 'warning',
            title: 'This is a toast message',
            action: {
              label: 'Got it',
              fn: ({ id }) => {
                console.log(id);
                close(id);
              },
            },
          })
        "
      >
        Warning
      </button>
      <button
        @click="
          add({
            type: 'warning',
            title: 'This is a toast message with a very long title',
            message: 'And an excessive message text as well',
            action: {
              label: 'Got it',
              fn: ({ id }) => {
                console.log(id);
                close(id);
              },
            },
          })
        "
      >
        looooooong
      </button>
      <button @click="clear">clear</button>
      <Toasts />
    </Variant>

    <Variant title="Deprecated add function call">
      <button @click="openDeprecated">Success</button>
    </Variant>
  </Story>
</template>
