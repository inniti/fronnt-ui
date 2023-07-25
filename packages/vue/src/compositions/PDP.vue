<script lang="ts">
export default {
  name: "NNPDP",
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  gallery: {
    url: string;
    alt: string;
    featured?: boolean;
  }[];
}>();
</script>

<template>
  <div class="nn-pdp">
    <section class="nn-pdp__section">
      <div class="nn-pdp__gallery">
        <picture
          v-for="(image, idx) in props.gallery"
          :key="idx"
          class="nn-pdp__gallery-item"
          :class="[image.featured && 'nn-pdp__gallery-item--featured']"
        >
          <img :src="image.url" :alt="image.alt" />
        </picture>
      </div>
      <div class="nn-pdp__buy-box">
        <div class="nn-pdp__title nn-heading-l">Ein Produkt</div>

        <slot name="buy-box"></slot>
      </div>
    </section>
    <section class="nn-pdp__section">
      <slot />
    </section>
  </div>
</template>
