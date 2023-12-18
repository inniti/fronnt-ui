<script lang="ts" setup>
import { ref } from "vue";
import Slider from "../Slider.vue";

const slides = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const showArrows = ref(true);
const title = ref("Title");
</script>

<template>
  <Story title="Components/Slider" :layout="{ type: 'single' }">
    <template #controls>
      <HstCheckbox v-model="showArrows" title="Show arrows" />
      <HstText v-model="title" title="Title" />
    </template>
    <Variant title="Default">
      <Slider :arrows="showArrows">
        <template #title>{{ title }}</template>
        <div v-for="slide in slides" :key="slide.id" class="slide">
          {{ slide.id }}
        </div>
      </Slider>
    </Variant>

    <Variant title="Padded">
      <Slider :arrows="showArrows" max-width="'800px'">
        <template #title>{{ title }}</template>
        <div v-for="slide in slides" :key="slide.id" class="slide">
          {{ slide.id }}
        </div>
      </Slider>
    </Variant>
  </Story>
</template>

<style scoped>
.slide {
  width: 20rem;
  background: #0b7285;
  color: white;
  border-radius: 4px;
  padding: 1rem;
  height: 10rem;
}
</style>
