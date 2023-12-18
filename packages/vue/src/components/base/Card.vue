<script lang="ts">
export default {
  name: "NNCard",
};
</script>

<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
  <div class="nn-card">
    <header class="nn-card__header">
      <div class="nn-card__title">{{ props.title }}</div>
      <div v-if="$slots.header"><slot name="header" /></div>
    </header>

    <div class="nn-card__content">
      <slot />
    </div>

    <div class="nn-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
