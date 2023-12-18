<script lang="ts" setup>
import { ref } from "vue";
import Flyout from "../Flyout.vue";

const isOpen = ref(false);
</script>

<template>
  <Story title="Components/Flyout" :layout="{ type: 'single' }">
    <template #controls>
      <HstCheckbox v-model="isOpen" title="Is open" />
    </template>

    <Variant title="Default (left)">
      <div style="min-height: 600px">
        <Flyout v-model="isOpen" style="margin-left: 20%">
          <template #trigger>
            <div @click="isOpen = !isOpen">trigger</div>
          </template>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            possimus nobis architecto pariatur itaque provident ut iusto sit
            facere, illo quod libero! Totam debitis deleniti nam nostrum,
            impedit saepe maxime?
          </div>
        </Flyout>
      </div>
    </Variant>

    <Variant title="Right">
      <div style="min-height: 600px">
        <Flyout v-model="isOpen" style="margin-left: 60%" align="right">
          <template #trigger>
            <div @click="isOpen = !isOpen">trigger</div>
          </template>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            possimus nobis architecto pariatur itaque provident ut iusto sit
            facere, illo quod libero! Totam debitis deleniti nam nostrum,
            impedit saepe maxime?
          </div>
        </Flyout>
      </div>
    </Variant>
  </Story>
</template>
