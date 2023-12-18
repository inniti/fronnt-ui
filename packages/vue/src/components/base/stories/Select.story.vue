<script lang="ts" setup>
import { ref } from "vue";
import NNSelect from "../Select.vue";

const disabled = ref(false);
const error = ref(false);
const loading = ref(false);
const searchable = ref(false);

const options = [
  {
    value: "option-1",
    label: "Option 1",
  },
  {
    value: "option-2",
    label: "Option 2",
    disabled: true,
  },
  {
    label: "Option 3",
    options: [
      {
        value: "option-3-1",
        label: "Option 3-1",
      },
      {
        value: "option-3-2",
        label: "Option 3-2",
      },
    ],
  },
  {
    value: "option-4",
    label: "Option 4",
  },
];

const modelSingle = ref();
const modelMulti = ref();

const loadingWhileSearching = ref(false);

const customSearchOptions = ref(options);

const customSearch = (term: string): Promise<void> => {
  loadingWhileSearching.value = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      if (term) {
        customSearchOptions.value = [
          {
            value: "option-4",
            label: "Option 4",
          },
        ];
      } else {
        customSearchOptions.value = options;
      }
      loadingWhileSearching.value = false;
      resolve(undefined);
    }, 500);
  });
};

const onCustomSearchClose = () => {
  customSearchOptions.value = options;
};
</script>

<template>
  <Story title="Components/Select">
    <template #controls>
      <HstCheckbox v-model="disabled" title="Disabled" />
      <HstCheckbox v-model="error" title="Error" />
      <HstCheckbox v-model="loading" title="Loading" />
      <HstCheckbox v-model="searchable" title="Searchable" />
    </template>
    <Variant title="Single selection">
      <div class="stage">
        <NNSelect
          v-model="modelSingle"
          :disabled="disabled"
          :error="error"
          :options="options"
          :loading="loading"
          :searchable="searchable"
        >
        </NNSelect>
      </div>
    </Variant>

    <Variant title="Multi selection">
      <div class="stage">
        <NNSelect
          v-model="modelMulti"
          :disabled="disabled"
          :error="error"
          :options="options"
          :loading="loading"
          :searchable="searchable"
          multiple
        >
        </NNSelect>
      </div>
    </Variant>

    <Variant title="Custom search">
      <div class="stage">
        <NNSelect
          v-model="modelSingle"
          :options="customSearchOptions"
          :loading="loadingWhileSearching"
          searchable
          :search="customSearch"
          @close="onCustomSearchClose"
        >
        </NNSelect>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.stage {
  min-height: 400px;
}
</style>
