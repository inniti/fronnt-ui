<script lang="ts" setup>
import { ref } from "vue";
import Input from "../Input.vue";

const disabled = ref(false);
const clearable = ref(true);
const textValue = ref("");
const numberValue = ref(0);
const error = ref(false);
</script>

<template>
  <Story title="Components/Input">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstCheckbox v-model="clearable" title="Clearable" />
      <HstCheckbox v-model="error" title="Error" />
    </template>

    <Variant title="Text">
      <Input
        v-model="textValue"
        :disabled="disabled"
        :clearable="clearable"
        placeholder="Please enter text"
        :error="error"
        class="test"
      />
    </Variant>
    <Variant title="Number">
      <Input
        v-model.number="numberValue"
        :disabled="disabled"
        :clearable="clearable"
        type="number"
        placeholder="Please enter a number"
        :error="error"
        pattern="\d*"
      />
    </Variant>
    <Variant title="Prefix">
      <Input
        v-model="textValue"
        :disabled="disabled"
        :clearable="clearable"
        :error="error"
      >
        <template #prefix> https:// </template>
      </Input>
    </Variant>
    <Variant title="Postfix">
      <Input
        v-model="numberValue"
        :disabled="disabled"
        type="number"
        :clearable="clearable"
        placeholder="Please enter a number"
        :error="error"
      >
        <template #postfix>€</template>
      </Input>
    </Variant>
  </Story>
</template>
