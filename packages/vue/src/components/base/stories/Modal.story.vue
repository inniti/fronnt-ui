<script lang="ts" setup>
import { ref } from "vue";
import Modal from "../Modal.vue";
const title = ref("Some Modal");
const show = ref(false);
const dismissable = ref(false);
</script>

<template>
  <Story title="Components/Modal" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="title" title="Title" />
        <HstCheckbox v-model="show" title="Show" />
        <HstCheckbox v-model="dismissable" title="Dismissable" />
      </template>
      <button @click="show = true">Show</button>
      <Modal
        :title="title"
        :show="show"
        inert-element="#app"
        :dismissable="dismissable"
        @close="show = false"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ullam
          cupiditate blanditiis inventore eum rerum, similique in voluptatum
          recusandae obcaecati quas ratione numquam pariatur? Veritatis sunt
          quis adipisci id unde.
        </p>
        <p><button>click</button></p>
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
      </Modal>
    </Variant>
  </Story>
</template>
