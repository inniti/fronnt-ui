<script lang="ts">
export default {
  name: "NNShopTheLook",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import ProductTile from "./ProductTile.vue";
import Icon from "../components/base/Icon.vue";

const props = defineProps<{
  caption?: string;
  title: string;
  canvasImage: string;
  products: Array<{
    coordinates: {
      x: number;
      y: number;
    };
    id: string;
    brand: string;
    title: string;
    url: string;
    sku: string;
    image: string;
  }>;
}>();

const active = ref(0);
const slider = ref<HTMLElement>();

function select(idx: number) {
  active.value = idx;
  slider.value?.scrollIntoView({ behavior: 'smooth', block: "start"});
}

function prev() {
  active.value =
    active.value === 0 ? props.products.length - 1 : active.value - 1;
}
function next() {
  active.value =
    active.value === props.products.length - 1 ? 0 : active.value + 1;
}
</script>

<template>
  <div class="nn-shop-the-look">
    <div class="nn-heading-s nn-shop-the-look__caption">{{ props.caption }}</div>
    <div class="nn-heading-l nn-shop-the-look__title">{{ props.title }}</div>

    <div class="nn-shop-the-look__canvas">
      <img
        :src="canvasImage"
        :alt="props.title"
        draggable="false"
        loading="lazy"
      />
      <span
        v-for="(p, idx) in props.products"
        :key="`hotspot-${idx}`"
        :class="[
          'nn-shop-the-look__hotspot',
          active === idx && 'nn-shop-the-look__hotspot--active',
        ]"
        :style="{
          left: `${p.coordinates.x}%`,
          top: `${p.coordinates.y}%`,
        }"
        @click="select(idx)"
      ></span>
    </div>

    <div ref="slider" class="nn-shop-the-look__slider">
      <div class="nn-shop-the-look__arrow nn-shop-the-look__arrow--prev">
        <Icon name="Arrow" tabindex="0" @click="prev" />
      </div>
      <div class="nn-shop-the-look__products">
        <div
          v-for="(product, idx) in props.products"
          :key="product.id"
          class="nn-shop-the-look__product"
          :class="[idx === active && 'nn-shop-the-look__product--active']"
        >
          <slot name="product" :product="product">
            <ProductTile
              :brand="product.brand"
              :title="product.title"
              :image="product.image"
              :url="product.url"
              :sku="product.sku"
            />
          </slot>
        </div>
      </div>
      <div class="nn-shop-the-look__arrow nn-shop-the-look__arrow--next" tabindex="0" @click="next">
        <Icon name="Arrow"  />
      </div>
    </div>
  </div>
</template>
