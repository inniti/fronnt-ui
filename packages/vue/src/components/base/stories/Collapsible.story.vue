<script lang="ts" setup>
import { ref } from "vue";
import Collapsible from "../Collapsible.vue";
const show = ref(false);
const speed = ref(200);
</script>

<template>
  <Story title="Components/Collapsible" group="">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="show" title="Show" />
        <HstNumber v-model="speed" title="Speed" />
      </template>
      <Collapsible :show="show" :speed="speed" @toggle="show = $event">
        <template #header>Header</template>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, sit.
          Deserunt dignissimos libero excepturi. Non, ut eveniet laudantium sint
          totam, nihil distinctio facere molestiae provident voluptates laborum.
          Sit, fuga illum?
        </div>
      </Collapsible>
    </Variant>
  </Story>
</template>
