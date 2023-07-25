<script lang="ts" setup>
import PDP from "../PDP.vue";
</script>

<template>
  <Story
    title="Compositions/Product Detail Page"
    group="ecommerce"
    :layout="{ type: 'single' }"
  >
    <template #controls> controls </template>
    <PDP
      :gallery="[
        {
          url: 'https://picsum.photos/seed/fronnt-1/300/300',
          alt: 'fronnt-1',
        },
        {
          url: 'https://picsum.photos/seed/fronnt-2/300/300',
          alt: 'fronnt-2',
        },
        {
          url: 'https://picsum.photos/seed/fronnt-3/300/300',
          alt: 'fronnt-3',
        },
        {
          url: 'https://picsum.photos/seed/fronnt-4/300/300',
          alt: 'fronnt-4',
        },
        {
          url: 'https://picsum.photos/seed/fronnt-5/800/600',
          alt: 'fronnt-5',
          featured: true,
        },
      ]"
    >
      <template #buy-box> Buy Box </template>
      <template #default> Page content </template>
    </PDP>
  </Story>
</template>
