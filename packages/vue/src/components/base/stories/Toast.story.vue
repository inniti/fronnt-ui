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
            message: 'With a description',
          })
        "
      >
        Info
      </button>
      <button
        @click="
          add({
            type: 'success',
            title: 'This is a toast message',
            message: 'With a description',
            autoClose: 2000,
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
      <button @click="clear">clear</button>
      <Toasts />
    </Variant>

    <Variant title="Deprecated add function call">
      <button @click="openDeprecated">Success</button>
    </Variant>
  </Story>
</template>
