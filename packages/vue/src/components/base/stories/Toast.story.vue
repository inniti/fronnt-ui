<script lang="ts" setup>
import { ref } from "vue";

import { useToast } from "../Toast.vue";
import Toast from "../Toast.vue";

/**
 * The composable can only be used if the <Toast /> component is provided by any root component in the parent.
 */
const toast = useToast();

/**
 * The type of the component differs only from the colors of the heading and the link to submit.
 */
const type = ref("default");

/**
 * Represent the title of the toast component.
 */
const title = ref("Toast Notification");

/**
 * Labeling of the toast component to be read by the user.
 */
const message = ref("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.");

/**
 * Custom optional link text that a user can click. Custom code can be executed using the onSubmit event.
 */
const submit = ref("Got it");

/**
 * Duration, how long the toast should remain visible on the page.
 */
const timeout = ref(3000);
</script>

<template>
  <Story title="Components/Toast" group="">
    <Variant title="Default">
      <template #controls>
        <HstRadio
          v-model="type"
          title="Type"
          :options="[
            { label: 'Default', value: 'default' },
            { label: 'Info', value: 'info' },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
          ]"
        />

        <HstText v-model="title" title="Title" />
        <HstTextarea v-model="message" title="Message" />

        <HstText v-model="submit" title="Submit" />
        
        <HstNumber title="Timeout" v-model="timeout" />
      </template>

      <button class="button" @click="toast(type, title, message, submit, timeout)">Show Toast</button>

      <Toast />
    </Variant>
  </Story>
</template>

<style scoped>
.button {
  border: 1px solid whitesmoke;
  border-radius: 4px;
  background: white;
  color: black;
  cursor: pointer;
}
</style>
