<script lang="ts" setup>
import vNnClickOutside from "../ClickOutside";

const onClickOutside = () => {
  console.log("clicked outside");
};
</script>

<template>
  <Story title="Directives/ClickOutside" :layout="{ type: 'single' }">
    <Variant title="Default">
      <div v-nn-click-outside="onClickOutside" class="container">
        click outside
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  background: var(--nn-color-gray-100);
  padding: var(--nn-spacing-4) var(--nn-spacing-8);
  margin: 10rem;
}
</style>
