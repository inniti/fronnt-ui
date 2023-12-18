<script lang="ts" setup>
import { ref } from "vue";
import vNnResize from "../Resize";

const width = ref(0);
const height = ref(0);

const onResize = (event: { width: number; height: number }) => {
  width.value = event.width;
  height.value = event.height;
};
</script>

<template>
  <Story title="Directives/Resize" :layout="{ type: 'single' }">
    <Variant title="Default">
      <div v-nn-resize="onResize" class="container">
        <pre>{{ width }}x{{ height }}</pre>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  background: var(--nn-color-primary-100);
  padding: var(--nn-spacing-4) var(--nn-spacing-8);
}
</style>
