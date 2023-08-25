<script lang="ts">
export default {
  name: "NNTileSelect",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";

import RadioButtons from "./RadioButtons.vue";
import Collapsible from "./Collapsible.vue";

defineEmits(['update:modelValue']);

const modelValue = ref("");

const props = withDefaults(
  defineProps<{
    name: string,
    options?: Array<{ 
      value: string;
      title: string;
      description: string;
      disabled?: boolean;
    }>;
  }>(),
  {
    options: () => [
      { value: "", title: "", description: "", disabled: false }
    ]
  }
);
</script>

<template>
  <div v-for="(tile, index) in props.options" :key="index" class="nn-tileselect">
    <div class="nn-tileselect__wrapper">
      
      <div class="nn-tileselect__content">
        <Collapsible :show="modelValue === tile.value" :speed="200">
          <template #header>
            <div class="nn-tileselect__header">
              <div class="nn-tileselect__radio">
                <RadioButtons
                  v-model="modelValue"
                  :options="[{ value: tile.value, label: '', disabled: tile.disabled }]"
                  :name="props.name"
                  @change="$emit('update:modelValue', modelValue)"
                />
              </div>

              <div class="nn-tileselect__information">
                <div class="nn-tileselect__text">{{ tile.title }}</div>

                <div class="nn-tileselect__information--right">
                  <slot name="header" :tile="tile" />
                </div>
              </div>
            </div>
          </template>
          <div class="nn-tileselect__description">
            <slot name="description" :tile="tile" />
          </div>
        </Collapsible>
      </div>

    </div>
  </div>
</template>
