<script lang="ts" setup>
import Tag from "../Tag.vue";
</script>

<template>
  <Story title="Components/Tags" :layout="{ type: 'grid', width: '25%' }">
    <Variant title="Default">
      <Tag>default</Tag>
    </Variant>
    <Variant title="Small">
      <Tag size="small"> small </Tag>
    </Variant>
    <Variant title="Custom Styles">
      <Tag style="color: var(--nn-color-error)"> Unikat </Tag>
    </Variant>
  </Story>
</template>
