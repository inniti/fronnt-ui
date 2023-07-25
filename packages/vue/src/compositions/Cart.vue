<script lang="ts">
export default {
  name: "NNCart",
};
</script>

<script lang="ts" setup>
import CartItem from "./CartItem.vue";

const props = defineProps<{
  items: Array<{
    id: string;
    image: string;
    title: string;
    sku: string;
    quantity?: number;
    quantityStep?: number;
    quantityMin?: number;
    quantityMax?: number;
    note?: string;
  }>;
}>();
</script>

<template>
  <div class="nn-cart">
    <ul class="nn-cart__items">
      <li v-for="item in props.items" :key="item.id" class="nn-cart__item">
        <slot name="item" :item="item">
          <CartItem v-bind="item" />
        </slot>
      </li>
    </ul>
  </div>
</template>
