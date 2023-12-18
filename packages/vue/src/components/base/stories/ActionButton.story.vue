<script lang="ts" setup>
import ActionButton from "../ActionButton.vue";
const successfulAction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};
const failingAction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 3000);
  });
};

type State = {
  pendingDelay: number;
  timeout: number;
  disabled: boolean;
  label: string;
  variant: "default" | "primary" | "tertiary" | "neutral";
};

const initState = (): State => {
  return {
    pendingDelay: 60,
    timeout: 2000,
    disabled: false,
    label: "Click me",
    variant: "primary",
  };
};
</script>

<template>
  <Story title="Components/Action Button">
    <template #controls="{ state }">
      <HstText v-model="state.label" title="Label" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstNumber v-model="state.timeout" title="Timeout" />
      <HstNumber v-model="state.pendingDelay" title="Pending Delay" />
      <HstRadio
        v-model="state.variant"
        title="Variant"
        :options="[
          { label: 'primary', value: 'primary' },
          { label: 'default', value: 'default' },
          { label: 'tertiary', value: 'tertiary' },
        ]"
      />
    </template>
    <Variant title="Successful Action" :init-state="initState">
      <template #default="{ state }">
        <ActionButton
          :action="successfulAction"
          :timeout="state.timeout"
          :pending-delay="state.pendingDelay"
          :disabled="state.disabled"
          :variant="state.variant"
        >
          {{ state.label }}
        </ActionButton>
      </template>
    </Variant>
    <Variant title="Failing Action" :init-state="initState">
      <template #default="{ state }">
        <ActionButton
          :action="failingAction"
          :timeout="state.timeout"
          :pending-delay="state.pendingDelay"
          :disabled="state.disabled"
          :variant="state.variant"
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
