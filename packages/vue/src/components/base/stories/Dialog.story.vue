<script lang="ts" setup>
import { ref } from "vue";
import NNDialog from "../Dialog.vue";
const title = ref("Some Dialog");
const dismissable = ref(false);

const dialog = ref();
const show = () => {
  dialog.value.open("#app");
};
</script>

<template>
  <Story title="Components/Dialog" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="title" title="Title" />
        <HstCheckbox v-model="dismissable" title="Dismissable" />
      </template>
      <button @click="show">Show</button>
      <NNDialog ref="dialog" :title="title" :dismissable="dismissable">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ullam
          cupiditate blanditiis inventore eum rerum, similique in voluptatum
          recusandae obcaecati quas ratione numquam pariatur? Veritatis sunt
          quis adipisci id unde.
        </p>
        <p><button @click="dialog.close">close</button></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ullam
          cupiditate blanditiis inventore eum rerum, similique in voluptatum
          recusandae obcaecati quas ratione numquam pariatur? Veritatis sunt
          quis adipisci id unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ullam
          cupiditate blanditiis inventore eum rerum, similique in voluptatum
          recusandae obcaecati quas ratione numquam pariatur? Veritatis sunt
          quis adipisci id unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ullam
          cupiditate blanditiis inventore eum rerum, similique in voluptatum
          recusandae obcaecati quas ratione numquam pariatur? Veritatis sunt
          quis adipisci id unde.
        </p>
      </NNDialog>
    </Variant>
  </Story>
</template>
