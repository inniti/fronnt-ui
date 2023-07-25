<script lang="ts" setup>
import ShopTheLook from "../ShopTheLook.vue";

const products = [
  {
    coordinates: {
      x: 10,
      y: 10,
    },
    id: "1",
    brand: "Eine Marke",
    title: "Ein Produkt",
    url: "/",
    sku: "sku-1",
    image: "https://via.placeholder.com/250?text=Produkt+1",
  },
  {
    coordinates: {
      x: 40,
      y: 40,
    },
    id: "2",
    brand: "Eine Marke",
    title: "Ein anderes Produkt",
    url: "/",
    sku: "sku-2",
    image: "https://via.placeholder.com/250?text=Produkt+2",
  },
];
</script>

<template>
  <Story title="Compositions/Shop The Look" :layout="{ type: 'single' }" group="ecommerce">
    <ShopTheLook
      :products="products"
      canvas-image="https://via.placeholder.com/500?text=Shop+The+Look"
      title="Shop the look"
      caption="Inspiration"
    />
  </Story>
</template>
