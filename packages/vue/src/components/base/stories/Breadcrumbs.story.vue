<script lang="ts" setup>
import Breadcrumbs from "../Breadcrumbs.vue";
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
    link: "/living/furniture/",
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
          <a :href="crumb.link">
            <template v-if="crumb.link === '/'">🏠</template>
            <template v-else>{{ crumb.label }}</template>
          </a>
        </template>
        <template #separator> &raquo; </template>
      </Breadcrumbs>
    </Variant>
  </Story>
</template>
