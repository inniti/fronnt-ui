<script lang="ts" setup>
import ProductTile from "../ProductTile.vue";
</script>

<template>
  <Story title="Compositions/Product Tile" group="ecommerce">
    <Variant title="Single image">
      <ProductTile
        image="https://via.placeholder.com/500?text=Product+Tile"
        title="Ein Produkt"
        sku="sku-1"
        brand="Eine Marke"
        url="/p/sku-1"
        price="168,00 €"
      >
      </ProductTile>
    </Variant>
    <Variant title="Hover image">
      <ProductTile
        image="https://via.placeholder.com/500?text=Product+Tile"
        hover-image="https://via.placeholder.com/500?text=Product+Tile+Hover"
        title="Ein Produkt"
        sku="sku-1"
        brand="Eine Marke"
        url="/p/sku-1"
        price="168,00 €"
      >
        <div>16 Varianten</div>
      </ProductTile>
    </Variant>
  </Story>
</template>
