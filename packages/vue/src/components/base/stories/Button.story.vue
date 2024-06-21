<script lang="ts" setup>
import { reactive } from "vue";
import { logEvent } from "histoire/client";

import Button from "../Button.vue";
import { NNIconShoppingCart } from "../../icons";

const state = reactive<{ disabled: boolean; size: "default" | "small" }>({
  disabled: false,
  size: "default",
});
</script>

<template>
  <Story title="Components/Button">
    <Variant title="Default">
      <Button
        :disabled="state.disabled"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        Default Button
      </Button>
    </Variant>
    <Variant title="Primary">
      <Button
        variant="primary"
        :disabled="state.disabled"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        Primary Button
      </Button>
    </Variant>
    <Variant title="Tertiary">
      <Button
        variant="tertiary"
        :disabled="state.disabled"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        Tertiary Button
      </Button>
    </Variant>
    <Variant title="Neutral">
      <Button
        variant="neutral"
        :disabled="state.disabled"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        Neutral Button
      </Button>
    </Variant>
    <Variant title="with icon">
      <Button
        :disabled="state.disabled"
        variant="primary"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        <NNIconShoppingCart />
        Add 2 to cart
      </Button>
    </Variant>
    <Variant title="Link">
      <Button tag="a" href="#" :size="state.size" :disabled="state.disabled">
        Link Button
      </Button>
    </Variant>
    <Variant title="icon only">
      <Button
        :disabled="state.disabled"
        variant="tertiary"
        :size="state.size"
        @click="logEvent('Click', $event)"
      >
        <NNIconShoppingCart />
      </Button>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstRadio
        v-model="state.size"
        title="Size"
        :options="[
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' },
        ]"
      />
    </template>
  </Story>
</template>
