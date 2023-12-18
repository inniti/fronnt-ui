<script lang="ts" setup>
import Toasts from "../Toasts.vue";
import useToasts from "../../../composables/useToasts";

const { add, clear, close } = useToasts();
</script>

<template>
  <Story title="Components/Toast">
    <Variant title="Default">
      <button
        @click="add('info', 'This is a toast message', 'With a description')"
      >
        Info
      </button>
      <button
        @click="add('success', 'This is a toast message', 'With a description')"
      >
        Success
      </button>
      <button @click="add('error', 'This is a toast message')">Error</button>
      <button
        @click="
          add('warning', 'This is a toast message', undefined, {
            label: 'Got it',
            fn: ({ id }) => {
              console.log(id);
              close(id);
            },
          })
        "
      >
        Warning
      </button>
      <button @click="clear">clear</button>
      <Toasts />
    </Variant>
  </Story>
</template>
