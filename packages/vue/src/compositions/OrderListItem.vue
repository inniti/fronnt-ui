<script lang="ts">
export default {
  name: "NNOrderListItem",
};
</script>

<script lang="ts" setup>
import Link from "../components/base/Link.vue";
const props = withDefaults(
  defineProps<{
    id: string;
    link: string;
    twoColumns?: boolean;
    [key: string]: unknown;
  }>(),
  {}
);
</script>

<template>
  <div class="nn-order-list-item">
    <header class="nn-order-list-item__header">
      <div class="nn-order-list-item__title nn-heading-m">
        <slot name="title"> {{ props.id }} </slot>
      </div>
      <div class="nn-order-list-item__actions">
        <slot name="actions">
          <Link :href="props.link">Order Details</Link>
        </slot>
      </div>
    </header>

    <div
      class="nn-order-list-item__content"
      :class="[props.twoColumns && 'nn-order-list-item__content--2']"
    >
      <div class="nn-order-list-item__summary">
        <slot name="summary"></slot>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
