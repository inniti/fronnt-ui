<script lang="ts" setup>
const allIcons = import.meta.glob("./*.vue", { eager: true });

const icons = Object.keys(allIcons).map((moduleName) => {
  return {
    name: moduleName.substring(6).replace(".vue", ""),
    component: (allIcons[moduleName] as { default: unknown }).default,
  };
});
</script>

<template>
  <Story title="Icons" :layout="{ type: 'grid', width: 150 }" group="top">
    <Variant v-for="icon in icons" :key="icon.name" :title="icon.name">
      <component :is="icon.component" />
    </Variant>
  </Story>
</template>
