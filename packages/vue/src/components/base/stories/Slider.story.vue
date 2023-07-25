<script lang="ts" setup>
import Slider from "../Slider.vue";

const slides = [{ id: "1" }, { id: "2" }, { id: "3" }];
</script>

<template>
  <Story title="Components/Slider" :layout="{ type: 'single' }">
    <Slider :slides="slides" arrows title="asdf">
      <template #slide="slide">
        <pre
          style="
            width: 300px;
            background: #0b7285;
            color: white;
            border-radius: 4px;
            padding: 1rem;
          "
          >{{ slide }}</pre
        >
      </template>
    </Slider>
  </Story>
</template>
