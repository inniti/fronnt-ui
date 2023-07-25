<script lang="ts" setup>
import ActionButton from "../ActionButton.vue";
const successfulAction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
const failingAction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 2000);
  });
};
const initState = () => {
  return {
    pendingDelay: 60,
    timeout: 3000,
    disabled: false,
    label: "Click me",
  };
};
</script>

<template>
  <Story title="Components/Action Button" group="base">
    <Variant title="Successful Action" :init-state="initState">
      <template #default="{ state }">
        <ActionButton
          :action="successfulAction"
          :timeout="state.timeout"
          :pending-delay="state.pendingDelay"
          :disabled="state.disabled"
        >
          {{ state.label }}
        </ActionButton>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstNumber v-model="state.timeout" title="Timeout" />
        <HstNumber v-model="state.pendingDelay" title="Pending Delay" />
      </template>
    </Variant>
    <Variant title="Failing Action" :init-state="initState">
      <template #default="{ state }">
        <ActionButton
          :action="failingAction"
          :timeout="state.timeout"
          :pending-delay="state.pendingDelay"
          :disabled="state.disabled"
        >
          {{ state.label }}
        </ActionButton>
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# ActionButton

This is an ActionButton
</docs>
