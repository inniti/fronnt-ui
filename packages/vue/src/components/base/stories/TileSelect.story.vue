<script lang="ts" setup>
import { ref } from "vue";

import TileSelect from "../TileSelect.vue";

/**
 * Array of options of the tileselect components.
 */
const options = ref([
  { value: "klarna", title: "Klarna" },
  { value: "paypal", title: "PayPal", disabled: true },
  { value: "creditcard", title: "Kreditkarte" },
]);
</script>

<template>
  <Story title="Components/TileSelect" group="base" :layout="{ type: 'single' }">
    <Variant title="Default">

      <TileSelect name="example" :options="options" :speed="200">
        <template #header--0>
          <img width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1024px-Klarna_Payment_Badge.svg.png" alt="Icon" />
          <p class="pricing">Kostenlos</p>
        </template>
        <template #description--0>
          TileSelect 1
        </template>

        <template #header--1>
          <img width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="Icon" />
          <p class="pricing">Kostenlos</p>
        </template>
        <template #description--1>
          TileSelect 2
        </template>

        <template #header--2>
          <img width="90" src="https://www.dentalconfidence.com.au/wp-content/uploads/2016/09/amex-mastercard-visa-logo.png" alt="Icon" />
          <p class="pricing">Kostenlos</p>
        </template>
        <template #description--2>
          TileSelect 3
        </template>
      </TileSelect>

    </Variant>
  </Story>
</template>

<style scoped>
.button {
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.button__text {
  padding: 0.5rem;
}

.pricing {
  margin: 0;
  padding: 0;

  color: var(--nn-color-text);
  font-weight: 400;
}
</style>
