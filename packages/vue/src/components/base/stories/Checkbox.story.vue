<script lang="ts" setup>
import { ref } from "vue";
import Checkbox from "../Checkbox.vue";

const modelValue = ref<boolean | null>(false);
const modelValueIndeterminate = ref<boolean | null>(null);
const disabled = ref(false);
const label = ref("Something to be checked");
</script>

<template>
  <Story title="Components/Checkbox">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstText v-model="label" title="Label" />
    </template>
    <Variant title="Default">
      <Checkbox v-model="modelValue" :disabled="disabled">
        {{ label }}
      </Checkbox>
    </Variant>
    <Variant title="Indeterminate">
      <Checkbox v-model="modelValueIndeterminate" :disabled="disabled">
        {{ label }}
      </Checkbox>
    </Variant>
  </Story>
</template>
