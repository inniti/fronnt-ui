<script lang="ts" setup>
import { ref } from "vue";
import Dropdown from "../Dropdown.vue";

const modelValue = ref<string | undefined>("apricot");
const modelValue2 = ref<string | undefined>();
const disabled = ref(false);

const options = [
  { id: "violet", label: "Violet" },
  { id: "apricot", label: "Large label for Apricot" },
  { id: "gray", label: "Gray" },
];

function clear() {
  modelValue.value = undefined;
  modelValue2.value = undefined;
}
</script>

<template>
  <Story title="Components/Dropdown">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstButton @click="clear">clear value</HstButton>
    </template>

    <Variant title="Default">
      <div style="height: 20rem">
        <Dropdown
          v-model="modelValue"
          :options="options"
          label="Some Dropdown"
          :disabled="disabled"
        />
      </div>
    </Variant>
    <Variant title="Custom Option Rendering">
      <div style="height: 20rem">
        <Dropdown
          v-model="modelValue"
          :options="options"
          label="Some Dropdown"
          :disabled="disabled"
        >
          <template #selection="{ selection }">
            <span :title="selection?.label"
              >{{ selection?.label }} ({{ selection?.id }})</span
            >
          </template>
          <template #option="{ option }">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0.5rem;
              "
            >
              <span>{{ option.label }}</span>
              <span
                style="
                  font-size: 0.75em;
                  display: inline-block;
                  margin-left: 0.5rem;
                  color: red;
                "
              >
                {{ option.id }}
              </span>
            </div>
          </template>
        </Dropdown>
      </div>
    </Variant>
    <Variant title="No value">
      <div style="height: 20rem">
        <Dropdown
          v-model="modelValue2"
          :options="options"
          label="Some Dropdown"
          :disabled="disabled"
        />
      </div>
    </Variant>
  </Story>
</template>
