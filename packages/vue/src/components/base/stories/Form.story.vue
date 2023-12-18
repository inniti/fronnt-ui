<script lang="ts" setup>
import { ref } from "vue";
import NNForm from "../Form.vue";
import NNFormField from "../FormField.vue";
import NNInput from "../Input.vue";
import NNCheckbox from "../Checkbox.vue";
import NNToggle from "../Toggle.vue";
import NNRadioButtons from "../RadioButtons.vue";
import NNButton from "../Button.vue";

const label = ref("Some Form Field");
const error = ref(false);
const required = ref(false);
const notes = ref("Optional notes");

const onSubmit = (e: SubmitEvent) => {
  const formData = new FormData(e.target as HTMLFormElement);
  for (const [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
};
</script>

<template>
  <Story title="Components/Form">
    <template #controls>
      <HstCheckbox v-model="error" title="Error" />
      <HstText v-model="notes" title="Notes" />
    </template>
    <Variant title="Default">
      <NNForm @submit.prevent="onSubmit">
        <NNFormField :label="label" :error="error" :required="required">
          <NNInput :error="error" clearable name="input" />
          <template #notes>{{ notes }}</template>
        </NNFormField>
        <NNFormField :label="label" :error="error" :required="required">
          <NNCheckbox name="checkbox" value="check-something">
            This is a checkbox</NNCheckbox
          >
          <template #notes>{{ notes }}</template>
        </NNFormField>
        <NNFormField :label="label" :error="error" :required="required">
          <NNRadioButtons
            model-value="a"
            name="radio_buttons"
            :options="[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C' },
            ]"
          />
          <template #notes>{{ notes }}</template>
        </NNFormField>
        <NNFormField :label="label" :error="error" :required="required">
          <NNToggle>This is a toggle</NNToggle>
          <template #notes>{{ notes }}</template>
        </NNFormField>

        <template #actions>
          <NNButton variant="tertiary">Cancel</NNButton>
          <NNButton type="submit" variant="primary">Save</NNButton>
        </template>
      </NNForm>
    </Variant>
  </Story>
</template>
