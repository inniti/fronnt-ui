<script lang="ts" setup>
import { ref } from "vue";
import Textarea from "../Textarea.vue";

const value = ref("");
const disabled = ref(false);
const required = ref(false);
const note = ref("");
const error = ref(false);
</script>

<template>
  <Story title="Components/Textarea" :layout="{ type: 'single' }">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstCheckbox v-model="error" title="Error" />
      <HstCheckbox v-model="required" title="Required" />
      <HstText v-model="note" title="Note" />
    </template>
    <Variant title="Default">
      <Textarea
        v-model="value"
        label="A textarea"
        :disabled="disabled"
        :required="required"
        :note="note"
        :error="error"
      />
    </Variant>
  </Story>
</template>
