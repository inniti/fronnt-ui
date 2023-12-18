<script lang="ts">
export default {
  name: "NNBreadcrumbs",
};
</script>

<script lang="ts" setup>
import SeparatorIcon from "../icons/IconSlash.vue";

const props = withDefaults(
  defineProps<{
    crumbs: Array<{ label: string; link?: string }>;
  }>(),
  {}
);
</script>

<template>
  <nav class="nn-breadcrumbs">
    <ol class="nn-breadcrumbs__list">
      <template v-for="(crumb, idx) in props.crumbs" :key="idx">
        <li
          class="nn-breadcrumbs__crumb"
          :class="[
            crumb.link && 'nn-breadcrumbs__crumb--link',
            idx === props.crumbs.length - 1 && 'nn-breadcrumbs__crumb--last',
          ]"
        >
          <a
            v-if="crumb.link"
            class="nn-breadcrumbs__label nn-breadcrumbs__label--link"
            :href="crumb.link"
          >
            <slot name="crumb" :crumb="crumb">
              {{ crumb.label }}
            </slot>
          </a>
          <span v-else class="nn-breadcrumbs__label">
            <slot name="crumb" :crumb="crumb">
              {{ crumb.label }}
            </slot>
          </span>
        </li>
        <span
          v-if="idx < props.crumbs.length - 1"
          class="nn-breadcrumbs__separator"
          aria-hidden="true"
        >
          <slot name="separator" :idx="idx">
            <SeparatorIcon />
          </slot>
        </span>
      </template>
    </ol>
  </nav>
</template>
