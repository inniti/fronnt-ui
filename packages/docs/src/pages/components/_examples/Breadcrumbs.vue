<script lang="ts" setup>
import { NNBreadcrumbs } from "@fronnt/components-vue";
const crumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Living",
    href: "/living/",
  },
  {
    label: "Furniture",
    href: "/living/furniture/",
  },
];
</script>

<template>
  <div class="breadcrumbs">
    <NNBreadcrumbs :crumbs="crumbs" />
    <NNBreadcrumbs :crumbs="crumbs">
      <template #crumb="{ crumb }">
        <a :href="crumb.href">
          <template v-if="crumb.href === '/'">🏠</template>
          <template v-else>{{ crumb.label }}</template>
        </a>
      </template>
      <template #separator> &raquo; </template>
    </NNBreadcrumbs>
  </div>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
