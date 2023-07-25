<script lang="ts">
export default {
  name: "NNProductTile",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    image: string;
    title: string;
    sku: string;
    brand?: string;
    url: string;
    linkTag?: string;
    price?: string;
    hoverImage?: string;
  }>(),
  {
    linkTag: "a",
  }
);
</script>

<template>
  <div
    class="nn-product-tile"
    :class="[!!props.hoverImage && 'nn-product-tile--with-hover']"
  >
    <div class="nn-product-tile__top">
      <slot name="top"></slot>
    </div>
    <component
      :is="props.linkTag"
      :href="props.url"
      class="nn-product-tile__images"
    >
      <img
        loading="lazy"
        :src="props.image"
        :alt="props.title"
        class="nn-product-tile__image"
      />
      <img
        v-if="props.hoverImage"
        loading="lazy"
        :src="props.hoverImage"
        :alt="props.title"
        class="nn-product-tile__hover-image"
      />
    </component>
    <div class="nn-product-tile__brand nn-text-m">
      <slot name="brand">{{ props.brand }}</slot>
    </div>
    <div class="nn-product-tile__title nn-heading-s">
      <slot name="title">
        <component :is="props.linkTag" :href="props.url">
          {{ props.title }}
        </component>
      </slot>
    </div>
    <div class="nn-product-tile__sku">
      <slot name="sku">{{ props.sku }}</slot>
    </div>

    <footer class="nn-product-tile__footer">
      <div
        v-if="typeof props.price !== 'undefined'"
        class="nn-product-tile__price"
      >
        <slot name="price">{{ props.price }}</slot>
      </div>
      <slot />
    </footer>
  </div>
</template>
