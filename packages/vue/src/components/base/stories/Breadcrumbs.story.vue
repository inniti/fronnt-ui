<script lang="ts" setup>
import Breadcrumbs from "../Breadcrumbs.vue";
import { NNIconHouse } from "../../icons";
const crumbs = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Wohnen",
    link: "/living/",
  },
  {
    label: "Möbel",
  },
];
</script>

<template>
  <Story title="Components/Breadcrumbs">
    <Variant title="Default">
      <Breadcrumbs :crumbs="crumbs" />
    </Variant>
    <Variant title="Custom rendering">
      <Breadcrumbs :crumbs="crumbs">
        <template #crumb="{ crumb }">
          <template v-if="crumb.link === '/'">
            <NNIconHouse style="font-size: 0.875em" />
          </template>
          <template v-else>{{ crumb.label }}</template>
        </template>
        <template #separator> &raquo; </template>
      </Breadcrumbs>
    </Variant>
  </Story>
</template>
