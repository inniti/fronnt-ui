<script lang="ts" setup>
import { reactive } from "vue";
import { logEvent } from "histoire/client";

import Button from "../Button.vue";
import Icon from "../Icon.vue";

const state = reactive({
  disabled: false,
});
</script>

<template>
  <Story title="Components/Button">
    <Variant title="Default Button">
      <Button :disabled="state.disabled" @click="logEvent('Click', $event)">
        Default Button
      </Button>
    </Variant>
    <Variant title="Primary Button">
      <Button
        variant="primary"
        :disabled="state.disabled"
        @click="logEvent('Click', $event)"
      >
        Primary Button
      </Button>
    </Variant>
    <Variant title="Subtle Button">
      <Button
        variant="subtle"
        :disabled="state.disabled"
        @click="logEvent('Click', $event)"
      >
        Subtle Button
      </Button>
    </Variant>
    <Variant title="Button with icon">
      <Button :disabled="state.disabled" @click="logEvent('Click', $event)">
        <Icon name="cart" />
        Primary
      </Button>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
