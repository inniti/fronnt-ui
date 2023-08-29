<script lang="ts">
export default {
  name: "NNCalendar",
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

const now = new Date();

const props = withDefaults(
  defineProps<{
    month: number;
    year: number;
    firstYear?: number;
    lastYear?: number;
    isHighlighted?: (day: Date, filled: boolean) => boolean;
    isStart?: (day: Date) => boolean;
    isEnd?: (day: Date) => boolean;
  }>(),
  {
    firstYear: 1900,
    lastYear: undefined,
    isHighlighted: undefined,
    isStart: undefined,
    isEnd: undefined,
  }
);

const emit = defineEmits([
  "select",
  "enter",
  "leave",
  "update:month",
  "update:year",
]);

const month = ref(props.month);
const year = ref(props.year);

watch(
  () => props.month,
  () => {
    month.value = props.month;
  }
);

watch(
  () => props.year,
  () => {
    year.value = props.year;
  }
);

const years = computed(() => {
  const result = [];
  const lastYear = props.lastYear || now.getFullYear() + 50;
  let current = props.firstYear;

  while (current <= lastYear) {
    result.push(current);
    current++;
  }
  return result;
});

const days = computed(() => {
  const daysInMonth = getDaysInMonth(year.value, month.value + 1);

  const result: Date[] = [...Array(daysInMonth + 1).keys()]
    .splice(1)
    .map((i) => new Date(year.value, month.value, i));

  let iterator = new Date(year.value, month.value);
  for (let i = 1; i < iterator.getDay(); i++) {
    const d = new Date(iterator.getTime());
    d.setDate(iterator.getDate() - i);
    result.unshift(d);
  }
  iterator = result[result.length - 1];
  for (let i = result.length; i < 42; i++) {
    iterator = new Date(iterator.getTime());
    iterator.setDate(iterator.getDate() + 1);
    result.push(new Date(iterator));
  }

  return result.map((d) => {
    const isFilled = month.value !== d.getMonth();
    return {
      date: d,
      isHighlighted:
        typeof props.isHighlighted === "function"
          ? props.isHighlighted(d, isFilled)
          : false,
      isStart: typeof props.isStart === "function" ? props.isStart(d) : false,
      isEnd: typeof props.isEnd === "function" ? props.isEnd(d) : false,
      isFilled,
    };
  });
});

const select = (day: Date) => {
  emit("select", day);
  if (day.getMonth() !== month.value) {
    emit("update:month", day.getMonth());
  }
};

const setMonth = ($event: Event) => {
  month.value = +($event.target as HTMLSelectElement).value - 1;
  emit("update:month", month.value);
};

const setYear = ($event: Event) => {
  year.value = +($event.target as HTMLSelectElement).value;
  emit("update:year", year.value);
};

const selectPrevMonth = () => {
  if (month.value === 0) {
    month.value = 11;
    year.value--;
    emit("update:year", year.value);
  } else {
    month.value--;
  }
  emit("update:month", month.value);
};

const selectNextMonth = () => {
  if (month.value === 11) {
    month.value = 0;
    year.value++;
    emit("update:year", year.value);
  } else {
    month.value++;
  }
  emit("update:month", month.value);
};
</script>

<template>
  <div class="nn-calendar">
    <div class="nn-calendar__header">
      <div
        class="nn-calendar__arrow nn-calendar__arrow--prev"
        @click="selectPrevMonth"
      >
        &larr;
      </div>
      <div class="nn-calendar__month-and-year">
        <select :value="month + 1" @input="setMonth">
          <option v-for="m in 12" :key="`calendar_month_${m}`" :value="m">
            {{ m }}
          </option>
        </select>
        <select :value="year" @input="setYear">
          <option v-for="y in years" :key="`calendar_year_${y}`" :value="y">
            {{ y }}
          </option>
        </select>
      </div>
      <div
        class="nn-calendar__arrow nn-calendar__arrow--next"
        @click="selectNextMonth"
      >
        &rarr;
      </div>
    </div>
    <div class="nn-calendar__weekdays">
      <div class="nn-calendar__weekday">Mo</div>
      <div class="nn-calendar__weekday">Di</div>
      <div class="nn-calendar__weekday">Mi</div>
      <div class="nn-calendar__weekday">Do</div>
      <div class="nn-calendar__weekday">Fr</div>
      <div class="nn-calendar__weekday">Sa</div>
      <div class="nn-calendar__weekday">So</div>
    </div>
    <div class="nn-calendar__days">
      <div
        v-for="day in days"
        :key="day.date.toString()"
        class="nn-calendar__day"
        :class="[
          day.isHighlighted && 'nn-calendar__day--highlighted',
          day.isStart && 'nn-calendar__day--start',
          day.isEnd && 'nn-calendar__day--end',
          day.isFilled && 'nn-calendar__day--filled',
        ]"
        tabindex="0"
        :title="day.date.toLocaleDateString()"
        @click="select(day.date)"
        @pointerenter="emit('enter', day.date)"
        @pointerleave="emit('leave', day.date)"
        @keydown.enter="select(day.date)"
      >
        <slot name="day" :day="day">
          {{ day.date.getDate() }}
        </slot>
      </div>
    </div>
  </div>
</template>
