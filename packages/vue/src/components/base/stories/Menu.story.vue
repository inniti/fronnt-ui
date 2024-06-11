<script lang="ts" setup>
import Menu from "../Menu.vue";
import MenuItem from "../MenuItem.vue";
</script>

<template>
  <Story title="Components/Menu" :layout="{ type: 'single' }">
    <Variant title="Default">
      <div class="container">
        <Menu>
          <MenuItem> some action </MenuItem>
          <MenuItem disabled> disabled action </MenuItem>
          <MenuItem> another action </MenuItem>
        </Menu>
      </div>
    </Variant>
    <Variant title="Custom trigger">
      <div
        class="container"
        style="
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        "
      >
        <Menu align="right">
          <template #trigger="{ isOpen, toggle }">
            <span @click="toggle">Custom Trigger {{ isOpen }}</span>
          </template>
          <MenuItem> some action </MenuItem>
          <MenuItem disabled> disabled action </MenuItem>
          <MenuItem> another action </MenuItem>
        </Menu>
      </div>
    </Variant>
    <Variant title="Custom item label">
      <div class="container">
        <Menu>
          <MenuItem class="custom-item"> some action </MenuItem>
          <MenuItem class="custom-item" disabled> disabled action </MenuItem>
          <MenuItem class="custom-item"> another action </MenuItem>
        </Menu>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  height: 500px;
}

.custom-item {
  color: magenta;
}
</style>
