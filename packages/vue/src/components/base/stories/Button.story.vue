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
        Default
      </Button>
    </Variant>
    <Variant title="Primary Button">
      <Button
        primary
        :disabled="state.disabled"
        @click="logEvent('Click', $event)"
      >
        Primary
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
