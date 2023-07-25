<script lang="ts" setup>
import { ref } from "vue";
import Price from "../Price.vue";
const value = ref("19,99");
const currency = ref("€");
const currencyPosition = ref<"after" | "before">("after");
</script>

<template>
  <Story title="Components/Price" group="ecommerce">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="value" title="Value" />
        <HstButtonGroup
          v-model="currencyPosition"
          title="Currency Position"
          :options="[
            { value: 'after', label: 'After' },
            { value: 'before', label: 'Before' },
          ]"
        />
      </template>
      <Price
        :value="value"
        :currency="currency"
        :currency-position="currencyPosition"
      />
    </Variant>
    <Variant title="Strikethrough">
      <template #controls>
        <HstText v-model="value" title="Value" />
        <HstButtonGroup
          v-model="currencyPosition"
          title="Currency Position"
          :options="[
            { value: 'after', label: 'After' },
            { value: 'before', label: 'Before' },
          ]"
        />
      </template>
      <Price
        strikethrough
        :value="value"
        :currency="currency"
        :currency-position="currencyPosition"
      />
    </Variant>
  </Story>
</template>
