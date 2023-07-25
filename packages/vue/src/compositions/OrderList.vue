<script lang="ts">
export default {
  name: "NNOrderList",
  components: { OrderListItem },
};
</script>

<script lang="ts" setup>
import OrderListItem from "./OrderListItem.vue";

const props = defineProps<{
  items: Array<{
    id: string;
    link: string;
    [key: string]: unknown;
  }>;
}>();
</script>

<template>
  <ol class="nn-order-list">
    <li v-for="item in props.items" :key="item.id" class="nn-order-list__item">
      <slot name="item" :item="item">
        <OrderListItem v-bind="item" />
      </slot>
    </li>
  </ol>
</template>
