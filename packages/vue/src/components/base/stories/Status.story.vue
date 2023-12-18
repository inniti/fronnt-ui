<script lang="ts" setup>
import NNStatus from "../Status.vue";
import { NNIconX } from "../../icons";
import { ref } from "vue";

const severity = ref("neutral");
const label = ref("In Progress");
const active = ref(false);
</script>

<template>
  <Story title="Components/Status">
    <template #controls>
      <HstText v-model="label" title="Label" />
      <HstCheckbox v-model="active" title="Active" />
      <HstSelect
        v-model="severity"
        :options="[
          {
            value: 'neutral',
            label: 'neutral',
          },
          {
            value: 'success',
            label: 'success',
          },
          {
            value: 'warning',
            label: 'warning',
          },
          {
            value: 'error',
            label: 'error',
          },
        ]"
        title="Severity"
      />
    </template>
    <Variant title="Default">
      <NNStatus :severity="severity" :active="active">{{ label }}</NNStatus>
    </Variant>
    <Variant title="Custom icon">
      <NNStatus :severity="severity" :active="active">
        <template #icon><NNIconX /></template>
        {{ label }}
      </NNStatus>
    </Variant>
    <Variant title="Limit space">
      <div style="max-width: 8rem">
        <NNStatus :severity="severity" :active="active">
          {{ label }}
        </NNStatus>
      </div>
    </Variant>
  </Story>
</template>
