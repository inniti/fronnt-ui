<script lang="ts" setup>
import { logEvent } from "histoire/client";
import Autocomplete from "../Autocomplete.vue";

const makeLoadFunction = () => {
  return (input: string): Promise<{ id: string; label: string }[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!input) {
          resolve([]);
          return;
        }
        resolve([
          {
            id: "a",
            label: "A",
          },
          {
            id: "b",
            label: "B",
          },
          {
            id: "c",
            label: "C",
          },
          {
            id: "d",
            label: "D",
          },
        ]);
      }, 400);
    });
  };
};

const load1 = makeLoadFunction();
const load2 = makeLoadFunction();
</script>

<template>
  <Story title="Components/Autocomplete">
    <Variant title="Default">
      <div style="height: 20rem">
        <Autocomplete :load="load1" @select="logEvent('select', $event)" />
      </div>
    </Variant>
    <Variant title="Custom Results">
      <div style="height: 20rem">
        <Autocomplete :load="load2" @select="logEvent('select', $event)">
          <template #result="{ result }">
            <pre>{{ result }}</pre>
          </template>
        </Autocomplete>
      </div>
    </Variant>
  </Story>
</template>
