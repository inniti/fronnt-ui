<script lang="ts" setup>
import OrderList from "../OrderList.vue";
import OrderListItem from "../OrderListItem.vue";
import LabelledValue from "../../components/base/LabeledValue.vue";
import Link from "../../components/base/Link.vue";
import { ref } from "vue";

const twoColumns = ref(true);

const items = [
  {
    id: "123456789",
    link: "/account/orders/123456789",
    summary: {
      date: "22.02.2023",
      total: "186,00 €",
      status: "Versendet",
    },
  },
  {
    id: "987654321",
    link: "/account/orders/987654321",
    summary: {
      date: "22.02.2023",
      total: "186,00 €",
      status: "Abgeschlossen",
    },
  },
];
</script>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ItemSummary = {
  date: string;
  total: string;
  status: string;
};
</script>

<template>
  <Story
    title="Compositions/Order List"
    group="ecommerce"
    :layout="{ type: 'single' }"
  >
    <Variant title="Default">
      <OrderList :items="items" />
    </Variant>
    <Variant title="With summary and custom title">
      <OrderList :items="items">
        <template #item="{ item }">
          <OrderListItem
            :id="item.id"
            :link="item.link"
            :two-columns="twoColumns"
          >
            <template #title>Bestellung #{{ item.id }}</template>
            <template #summary>
              <LabelledValue label="Datum">
                {{ (item.summary as ItemSummary).date as string }}
              </LabelledValue>
              <LabelledValue label="Gesamtsumme">
                {{ (item.summary as ItemSummary).total as string }}
              </LabelledValue>
              <LabelledValue label="Status">
                {{ (item.summary as ItemSummary).status as string }}
              </LabelledValue>
              <Link>Paket verfolgen</Link>
            </template>
            <div>Additional content comes here</div>
          </OrderListItem>
        </template>
      </OrderList>

      <template #controls>
        <HstCheckbox v-model="twoColumns" title="Two columns" />
      </template>
    </Variant>
  </Story>
</template>
