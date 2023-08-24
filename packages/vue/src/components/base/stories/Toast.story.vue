<script lang="ts" setup>
import { ref } from "vue";
import Toast from "../Toast.vue";
const show = ref(false);
const clickable = ref(false);
const type = ref();
const timeout = ref(3000);

const onClick = () => {
  show.value = false;
};
</script>

<template>
  <Story title="Components/Toast">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="clickable" title="Clickable" />
        <HstRadio
          v-model="type"
          title="Type"
          :options="[
            { label: 'Default', value: null },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
          ]"
        />
        <HstNumber v-model="timeout" />
      </template>
      <button @click="show = true">Show</button>
      <Toast
        :type="type"
        :show="show"
        :clickable="clickable"
        :timeout="timeout"
        @timeout="show = false"
        @click="onClick"
      >
        Das hat geklappt!
      </Toast>
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
