<script lang="ts">
export default {
  name: "NNBreadcrumbs",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    crumbs: Array<{ label: string; href: string }>;
  }>(),
  {}
);
</script>

<template>
  <nav class="nn-breadcrumbs">
    <ul class="nn-breadcrumbs__list">
      <li
        v-for="(crumb, idx) in props.crumbs"
        :key="idx"
        class="nn-breadcrumbs__crumb"
      >
        <slot name="crumb" :crumb="crumb">
          <a :href="crumb.href">
            {{ crumb.label }}
          </a>
        </slot>
        <template v-if="idx < props.crumbs.length - 1">
          <span class="nn-breadcrumbs__separator">
            <slot name="separator" :idx="idx">/</slot>
          </span>
        </template>
      </li>
    </ul>
  </nav>
</template>
