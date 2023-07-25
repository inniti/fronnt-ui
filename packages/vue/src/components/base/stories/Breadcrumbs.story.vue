<script lang="ts" setup>
import Breadcrumbs from "../Breadcrumbs.vue";
import Button from "../Button.vue";
const crumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Wohnen",
    href: "/living/",
  },
  {
    label: "Möbel",
    href: "/living/furniture/",
  },
];
</script>

<template>
  <Story
    title="Components/Breadcrumbs"
  >
    <Variant title="Default">
      <Breadcrumbs :crumbs="crumbs" />
    </Variant>
    <Variant title="Custom rendering">
      <Breadcrumbs :crumbs="crumbs" :link-tag="Button">
        <template #crumb="{ crumb }">
          <a :href="crumb.href">
            <template v-if="crumb.href === '/'">🏠</template>
            <template v-else>{{ crumb.label }}</template>
          </a>
        </template>
        <template #separator>&raquo;</template>
      </Breadcrumbs>
    </Variant>
  </Story>
</template>
