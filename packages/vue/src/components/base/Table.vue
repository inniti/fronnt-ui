<script lang="ts">
export default {
  name: "NNTable",
};
</script>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

type Column = {
  id: string;
  label: string;
  width?: string;
};

const props = withDefaults(
  defineProps<{
    columns: Column[];
    minColumnWidth?: number;
    rows: Record<string, unknown>[];
  }>(),
  {
    minColumnWidth: 160,
    columns: () => [],
    rows: () => [],
  }
);

const internalColumns = ref<{ id: string; width?: string; label: string }[]>(
  []
);
const tableElement = ref<HTMLElement>();

watch(
  () => props.columns,
  () => {
    internalColumns.value = [...props.columns];
  },
  {
    deep: true,
    immediate: true,
  }
);

const columnStyles = computed(() => {
  return {
    gridTemplateColumns: internalColumns.value
      .map((c) => {
        if (c.width) {
          return c.width;
        }

        const width =
          props.columns.find((col) => col.id === c.id)?.width || "1fr";

        return `minmax(${props.minColumnWidth}px, ${width})`;
      })
      .join(" "),
  };
});
</script>

<template>
  <div ref="tableElement" class="nn-table">
    <table class="nn-table__table">
      <thead :style="columnStyles" class="nn-table__header">
        <tr class="nn-table__header-row">
          <th
            v-for="column in props.columns"
            :key="`nn-table-header_${column.id}`"
            class="nn-table__header-column"
          >
            <span class="nn-table__column-label">
              <slot :name="`header-${column.id}`" :column="column">
                {{ column.label }}
              </slot>
            </span>
          </th>
        </tr>
      </thead>
      <tbody :style="columnStyles" class="nn-table__body">
        <tr
          v-for="(row, idx) in rows"
          :key="`nn-table-row_${idx}`"
          class="nn-table__row"
        >
          <td
            v-for="column in props.columns"
            :key="`nn-table-body_${column.id}`"
            class="nn-table__cell"
          >
            <slot :name="`cell-${column.id}`" :column="column" :row="row">
              {{ row[column.id] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
