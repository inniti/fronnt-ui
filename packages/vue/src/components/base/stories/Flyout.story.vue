<script lang="ts" setup>
import Flyout from "../Flyout.vue";
</script>

<template>
  <Story title="Components/Flyout" :layout="{ type: 'single' }">
    <Variant title="Default (left)">
      <div style="min-height: 600px">
        <Flyout style="margin-left: 20%">
          <template #trigger> trigger </template>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            possimus nobis architecto pariatur itaque provident ut iusto sit
            facere, illo quod libero! Totam debitis deleniti nam nostrum,
            impedit saepe maxime?
          </p>
        </Flyout>
      </div>
    </Variant>

    <Variant title="Right">
      <div style="min-height: 600px">
        <Flyout style="margin-left: 60%" align="right">
          <template #trigger> trigger </template>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            possimus nobis architecto pariatur itaque provident ut iusto sit
            facere, illo quod libero! Totam debitis deleniti nam nostrum,
            impedit saepe maxime?
          </p>
        </Flyout>
      </div>
    </Variant>
  </Story>
</template>
