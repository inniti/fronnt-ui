<script lang="ts">
export default {
  name: "NNTileSelect",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";

import RadioButtons from "./RadioButtons.vue";
import Collapsible from "./Collapsible.vue";

const props = withDefaults(
  defineProps<{
    name: string,
    speed?: number,
    options: Array<{ 
      value: string;
      title: string;
      disabled?: boolean;
    }>;
  }>(),
  {
    speed: 200
  }
);

const speed = ref(props.speed);
const selected = ref(-1);

const modelValue = ref("");
const tileSelectWrapper = ref<Array<HTMLInputElement>>([]);
</script>

<template>
  <div v-for="(tile, index) in props.options" :key="index" class="nn-tileselect">
    <div ref="tileSelectWrapper" class="nn-tileselect__wrapper">
      
      <div class="nn-tileselect__content">
        <Collapsible :show="selected === index" :speed="speed">
          <template #header>
            <div class="nn-tileselect__header">
              <div class="nn-tileselect__radio">
                <RadioButtons
                  v-model="modelValue"
                  :options="[{ value: tile.value, label: '', disabled: tile.disabled }]"
                  :name="props.name"
                  @change="selected = index"
                />
              </div>

              <div class="nn-tileselect__information">
                <p class="nn-tileselect__text">{{ tile.title }}</p>

                <div class="nn-tileselect__information--right">
                  <slot :name="`header--${index}`" />
                </div>
              </div>
            </div>
          </template>
          <div class="nn-tileselect__description">
            <slot :name="`description--${index}`" />
          </div>
        </Collapsible>
      </div>

    </div>
  </div>
</template>
