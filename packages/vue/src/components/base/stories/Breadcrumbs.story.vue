<script lang="ts" setup>
import Breadcrumbs from "../Breadcrumbs.vue";
import NNIcon from '../Icon.vue';
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
  <Story title="Components/🎉 Breadcrumbs">
    <Variant title="Default">
      <Breadcrumbs :crumbs="crumbs" />
    </Variant>
    <Variant title="Custom rendering">
      <Breadcrumbs :crumbs="crumbs">
        <template #crumb="{ crumb }">
          <a :href="crumb.link">
            <template v-if="crumb.link === '/'">
              <NNIcon name="home" style="font-size: 0.875em"/>
            </template>
            <template v-else>{{ crumb.label }}</template>
          </a>
        </template>
        <template #separator> &raquo; </template>
      </Breadcrumbs>
    </Variant>
  </Story>
</template>
