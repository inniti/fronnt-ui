<script lang="ts" setup>
import Cart from "../Cart.vue";
import CartItem from "../CartItem.vue";
import { logEvent } from "histoire/client";

const items = [
  {
    id: "1",
    image: "https://via.placeholder.com/150",
    title: "Ein Artikel",
    sku: "sku-1",
    quantity: 1,
    price: {
      value: "123,45",
      currency: "€",
      currencyPosition: "after",
    },
  },
  {
    id: "2",
    image: "https://via.placeholder.com/120",
    title: "Ein anderer Artikel",
    sku: "sku-2",
    quantity: 4,
    note: "Hier könnte noch was stehen",
    
  },
];
</script>

<template>
  <Story
    title="Compositions/Cart"
    group="ecommerce"
    :layout="{ type: 'single' }"
  >
    <Cart :items="items">
      <template #item="{ item }">
        <CartItem
          v-bind="item"
          @update-quantity="logEvent('Update cart item quantity', $event)"
          @remove="logEvent('Remove cart item', $event)"
        >
          <template #title>🎁 {{ item.title }}</template>
        </CartItem>
      </template>
    </Cart>
  </Story>
</template>
