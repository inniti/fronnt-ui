<script lang="ts" setup>
import { ref } from "vue";
import Input from "../Input.vue";
import { clear } from "console";

const modelValue = ref("");

const required = ref(false);
const disabled = ref(false);
const clearable = ref(false);
</script>

<template>
  <Story title="Components/Input Field">
    <Variant title="Default">
      <Input
        v-model="modelValue"
        label="Default Textfield"
        :required="required"
        :disabled="disabled"
        :clearable="clearable"
      />
    </Variant>
    <Variant title="Error">
      <Input
        v-model="modelValue"
        label="With Error"
        :required="required"
        :disabled="disabled"
        :clearable="clearable"
        error
      >
        Optional note
      </Input>
    </Variant>
    <Variant title="No label">
      <Input
        v-model="modelValue"
        :required="required"
        :disabled="disabled"
        :clearable="clearable"
      >
        Note
      </Input>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="required" title="Required" />
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstCheckbox v-model="clearable" title="Clearable" />
    </template>
  </Story>
</template>
