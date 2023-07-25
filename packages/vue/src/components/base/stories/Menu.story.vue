<script lang="ts" setup>
import { logEvent } from "histoire/client";

import Menu from "../Menu.vue";
import { FronntIcon } from "@fronnt/icons";

const items: { label: string; icon?: FronntIcon }[] = [
  { label: "Action 1" },
  { label: "Action 2", icon: "cart" },
];
</script>

<template>
  <Story title="Components/Menu" :layout="{ type: 'single' }">
    <Variant title="Default">
      <div class="container">
        <Menu :items="items" @action="logEvent">Menü</Menu>
      </div>
    </Variant>
    <Variant title="Custom item rendering">
      <div class="container">
        <Menu :items="items" @action="logEvent" align="right">
          Trigger
          <template #item="{ item }"> {{ item }}</template>
        </Menu>
      </div>
    </Variant>
    <Variant title="Custom item label">
      <div class="container">
        <Menu :items="items" @action="logEvent">
          <template #item-label="{ item }"> {{ item.label }} CUSTOM </template>
        </Menu>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  height: 500px;
}
</style>
