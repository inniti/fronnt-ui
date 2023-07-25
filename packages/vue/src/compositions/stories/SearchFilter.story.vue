<script lang="ts" setup>
import { ref } from "vue";
import { logEvent } from "histoire/client";
import SearchFilter from "../SearchFilter.vue";

const options = ref([
  {
    value: "blue",
    label: "Blue",
    color: "#78d2ff",
    count: 123,
  },
  {
    value: "green",
    label: "Green",
    color: "#64e73a",
    count: 12,
  },
  {
    value: "red",
    label: "Red",
    color: "#e73a3a",
    count: 900,
  },
  {
    value: "yellow",
    label: "Yellow",
    color: "#fff539",
    count: 123,
  },
  {
    value: "black",
    label: "Black",
    color: "#000",
    count: 12,
  },
  {
    value: "white",
    label: "White",
    color: "#fff",
    count: 900,
  },
]);

const type = ref("default");
const label = ref("Filter");
const layout = ref("list");
</script>

<template>
  <Story
    title="Compositions/Search Filter"
    group="ecommerce"
    :layout="{ type: 'single' }"
  >
    <Variant title="Default">
      <template #controls>
        <HstButtonGroup
          v-model="type"
          title="Type"
          :options="[
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'color',
              value: 'color',
            },
            {
              label: 'tile',
              value: 'tile',
            },
          ]"
        />
        <HstButtonGroup
          v-model="layout"
          title="Layout"
          :options="[
            {
              label: 'list',
              value: 'list',
            },
            {
              label: 'grid',
              value: 'grid',
            },
          ]"
        />
        <HstText v-model="label" title="Label" />
      </template>
      <SearchFilter
        :options="options"
        :label="label"
        :type="type"
        :layout="layout"
        @update:selection="logEvent('selection updated', $event)"
      ></SearchFilter>
    </Variant>
  </Story>
</template>
