<script lang="ts" setup>
import { ref } from "vue";

import NNDrawer from "../Drawer.vue";

const drawer = ref();
const side = ref<"left" | "right">("right");
const title = ref("Title");
</script>

<template>
  <Story title="Components/Drawer" :layout="{ type: 'single' }">
    <template #controls>
      <HstRadio
        v-model="side"
        :options="[
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' },
        ]"
        title="Side"
      />
      <HstText v-model="title" title="Title" />
    </template>
    <Variant title="Default">
      <button @click="drawer.open">open</button>
      <NNDrawer ref="drawer" :side="side" teleport="#app">
        <template #title>{{ title }}</template>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
        <p>
          Reprehenderit quis sint mollit dolore fugiat amet dolor. Incididunt
          velit non tempor qui in commodo enim reprehenderit minim. Tempor
          mollit culpa enim quis officia ad voluptate dolore nisi officia dolore
          amet. Lorem excepteur consectetur commodo minim mollit quis id non
          officia. Ipsum consectetur dolore cupidatat officia minim ullamco enim
          irure cillum proident ex eiusmod. Proident tempor Lorem mollit aute.
          Enim ad consequat ad.
        </p>
      </NNDrawer>
    </Variant>
  </Story>
</template>
