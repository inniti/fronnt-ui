<script lang="ts" setup>
import { ref } from "vue";

import TileSelect from "../TileSelect.vue";

/**
 * Array of options of the tileselect components.
 */
const options = ref([
  { value: "klarna", title: "Klarna", description: "TileSelect 1" },
  { value: "paypal", title: "PayPal", description: "TileSelect 2", disabled: true },
  { value: "creditcard", title: "Kreditkarte", description: "TileSelect 3" },
]);
</script>

<template>
  <Story title="Components/TileSelect" group="base" :layout="{ type: 'single' }">
    <Variant title="Default">

      <TileSelect name="example" :options="options" @update:model-value="(value) => console.log(value)">

        <template #header>
          <img width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="Icon" />
          <p class="pricing">Kostenlos</p>
        </template>
        <template #description="props">
          {{ props.tile.description }}
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
