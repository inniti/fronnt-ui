<script lang="ts">
export default {
  name: "NNCartItem",
  components: { StepInput },
};
</script>

<script lang="ts" setup>
import StepInput from "../components/base/StepInput.vue";
import IconButton from "../components/base/IconButton.vue";
import Price from "../components/base/Price.vue";

const props = withDefaults(
  defineProps<{
    id: string;
    image: string;
    title: string;
    sku: string;
    quantity?: number;
    quantityStep?: number;
    quantityMin?: number;
    quantityMax?: number;
    note?: string;
    price?: {
      value: string;
      currency: string;
      currencyPosition: "before" | "after";
    };
  }>(),
  {
    quantity: 1,
    quantityStep: 1,
    quantityMin: 1,
    quantityMax: Infinity,
    note: "",
    price: undefined,
  }
);
const emit = defineEmits(["update-quantity", "remove"]);

function updateQuantity(value: number) {
  emit("update-quantity", {
    id: props.id,
    quantity: value,
  });
}

function remove() {
  emit("remove", props.id);
}
</script>

<template>
  <div class="nn-cart-item">
    <div class="nn-cart-item__image">
      <img :src="props.image" :alt="props.title" />
    </div>
    <div class="nn-cart-item__title">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="nn-cart-item__sku nn-text-s">
      <slot name="sku">{{ props.sku }}</slot>
    </div>
    <div class="nn-cart-item__note">
      <slot name="note">{{ props.note }}</slot>
    </div>

    <div class="nn-cart-item__quantity">
      <StepInput
        :model-value="props.quantity"
        :min="props.quantityMin"
        :max="props.quantityMax"
        :step="props.quantityStep"
        @update:model-value="updateQuantity"
      />
    </div>
    <div class="nn-cart-item__price">
      <slot name="price">
        <Price v-if="props.price" v-bind="props.price" />
      </slot>
    </div>
    <div class="nn-cart-item__actions">
      <IconButton icon="X" class="nn-cart-item__action" @click="remove" />
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>
