<script lang="ts" setup>
import { ref } from "vue";
import Card from "../Card.vue";

const title = ref("Card");
</script>

<template>
  <Story title="Components/Card" :layout="{ type: 'single' }" group="base">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="title" title="Title" />
      </template>
      <Card :title="title">
        <p>Content</p>
      </Card>
    </Variant>
    <Variant title="Custom Slots">
      <template #controls>
        <HstText v-model="title" title="Title" />
      </template>

      <Card :title="title">
        <template #header> Header </template>
        <p>Content</p>

        <template #footer> Footer </template>
      </Card>
    </Variant>
  </Story>
</template>
