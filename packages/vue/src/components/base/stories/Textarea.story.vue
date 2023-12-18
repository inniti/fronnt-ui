<script lang="ts" setup>
import { ref } from "vue";
import Textarea from "../Textarea.vue";

const value = ref("");
const disabled = ref(false);
const error = ref(false);
</script>

<template>
  <Story title="Components/Textarea" :layout="{ type: 'single' }">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstCheckbox v-model="error" title="Error" />
    </template>
    <Variant title="Default">
      <Textarea
        v-model="value"
        :disabled="disabled"
        :error="error"
        rows="6"
        placeholder="Let us know your thoughts..."
      />
    </Variant>
  </Story>
</template>
