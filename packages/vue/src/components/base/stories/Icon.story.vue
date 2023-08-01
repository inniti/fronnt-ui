<script lang="ts" setup>
import Icon from "../Icon.vue";

const variants = [
  "arrow-small",
  "arrow",
  "bag",
  "calendar",
  "cart",
  "cart-2",
  "cart-3",
  "check-circle",
  "check",
  "chevron",
  "credit-card",
  "delivery",
  "dots",
  "edit-circle",
  "edit",
  "heart",
  "info-circle",
  "link-small",
  "link",
  "loader",
  "menu",
  "minus-circle",
  "minus",
  "plus-circle",
  "plus",
  "print",
  "promotion",
  "sad",
  "search",
  "share",
  "smile",
  "three-dots",
  "trash-open",
  "trash",
  "truck",
  "user-2",
  "user",
  "x-circle",
  "x",
];
</script>

<template>
  <Story title="Icons" :layout="{ type: 'grid', width: 150 }" group="top">
    <Variant v-for="name in variants" :key="name" :title="name">
      <Icon :name="name" />
    </Variant>
  </Story>
</template>
