<script lang="ts" setup>
import { ref } from "vue";
import NNFormField from "../FormField.vue";
import NNInput from "../Input.vue";

const label = ref("Some Form Field");
const error = ref(false);
const required = ref(false);
const notes = ref("Optional notes");
</script>

<template>
  <Story title="Components/FormField">
    <template #controls>
      <HstCheckbox v-model="error" title="Error" />
      <HstText v-model="notes" title="Notes" />
    </template>
    <Variant title="Default">
      <NNFormField :label="label" :error="error" :required="required">
        <NNInput :error="error" clearable />
        <template #notes>{{ notes }}</template>
      </NNFormField>
    </Variant>
  </Story>
</template>
