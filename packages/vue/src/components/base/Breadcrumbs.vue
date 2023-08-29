<script lang="ts">
export default {
  name: "NNBreadcrumbs",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    crumbs: Array<{ label: string; link: string }>;
  }>(),
  {}
);
</script>

<template>
  <nav class="nn-breadcrumbs">
    <ol class="nn-breadcrumbs__list">
      <li
        v-for="(crumb, idx) in props.crumbs"
        :key="idx"
        class="nn-breadcrumbs__crumb"
        :class="[crumb.link && 'nn-breadcrumbs__crumb--link']"
      >
        <slot name="crumb" :crumb="crumb">
          <a :href="crumb.link">
            {{ crumb.label }}
          </a>
        </slot>
        <template v-if="idx < props.crumbs.length - 1">
          <span class="nn-breadcrumbs__separator">
            <slot name="separator" :idx="idx">/</slot>
          </span>
        </template>
      </li>
    </ol>
  </nav>
</template>
