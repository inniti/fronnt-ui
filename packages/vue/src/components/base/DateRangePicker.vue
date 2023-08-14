<script lang="ts">
export default {
  name: "NNDateRangePicker",
};
</script>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import NNCalendar from "./Calendar.vue";
import NNIconButton from "./IconButton.vue";
import NNButton from "./Button.vue";
import NNIcon from "./Icon.vue";
import NNFlyout from "./Flyout.vue";

const now = new Date();

const props = withDefaults(
  defineProps<{
    firstYear?: number;
    lastYear?: number;
    modelValue?: { start: Date; end: Date } | null;
    excludeEndDay?: boolean;
    disabled?: boolean;
  }>(),
  {
    firstYear: 1900,
    lastYear: undefined,
    modelValue: null,
  }
);

const emit = defineEmits(["update:model-value"]);

const popup = ref();
const start = ref<Date | null>(props.modelValue?.start || null);
const end = ref<Date | null>(props.modelValue?.end || null);
const candidate = ref<Date | null>(null);

watch(
  () => props.modelValue,
  () => {
    start.value = props.modelValue?.start || null;
    end.value = props.modelValue?.end || null;
  }
);

const year = ref(now.getFullYear());
const month = ref(now.getMonth());

const followingMonth = computed(() => {
  return month.value + 1;
});

const selectDay = (day: Date) => {
  if (start.value === null) {
    start.value = day;
  } else {
    if (end.value === null) {
      if (start.value.getTime() <= day.getTime()) {
        if (props.excludeEndDay) {
          end.value = day;
        } else {
          const endDate = new Date(day);
          endDate.setHours(23);
          endDate.setMinutes(59);
          endDate.setSeconds(59);
          endDate.setMilliseconds(999);
          end.value = endDate;
        }
        month.value = start.value.getMonth();
      } else {
        start.value = day;
      }
    } else {
      start.value = day;
      end.value = null;
    }
  }

  if (start.value !== null && end.value !== null) {
    candidate.value = null;
  }
};

const onEnterDay = (date: Date) => {
  candidate.value = date;
};

const onLeaveDay = () => {
  candidate.value = null;
};

const updateFollowingMonth = (value: number) => {
  month.value = value - 1;
};

const isHighlighted = (day: Date) => {
  if (start.value && end.value) {
    return (
      day.getTime() <= end.value.getTime() &&
      day.getTime() >= start.value.getTime()
    );
  }
  if (start.value && candidate.value) {
    return (
      day.getTime() <= candidate.value.getTime() &&
      day.getTime() >= start.value.getTime()
    );
  }

  return false;
};

const isStart = (day: Date) => {
  if (start.value) {
    if (
      start.value.getFullYear() === day.getFullYear() &&
      start.value.getMonth() === day.getMonth() &&
      start.value.getDate() === day.getDate()
    ) {
      return true;
    }
  }
  return false;
};

const isEnd = (day: Date) => {
  if (end.value) {
    if (
      end.value.getFullYear() === day.getFullYear() &&
      end.value.getMonth() === day.getMonth() &&
      end.value.getDate() === day.getDate()
    ) {
      return true;
    }
  }
  return false;
};

const clear = () => {
  end.value = null;
  start.value = null;
  emit("update:model-value", null);
};

const confirm = () => {
  emit("update:model-value", { start: start.value, end: end.value });
  popup.value.close();
};

const onClose = () => {
  start.value = props.modelValue?.start || null;
  end.value = props.modelValue?.end || null;
};
</script>

<template>
  <div
    class="nn-date-range-picker"
    :class="[props.disabled && 'nn-date-range-picker--disabled']"
  >
    <NNFlyout ref="popup" :disabled="props.disabled" @close="onClose">
      <template #trigger>
        <div class="nn-date-range-picker__field">
          <div class="nn-date-range-picker__selection">
            <slot name="selection" :value="{ start, end }">
              <template v-if="start">
                <span>{{ start?.toLocaleDateString() }}</span>
                <span>–</span>
                <span>{{ end?.toLocaleDateString() }}</span>
              </template>
            </slot>
          </div>
          <NNIconButton
            v-show="start !== null"
            icon="x"
            class="nn-date-range-picker__clear"
            @click.stop="clear"
          />
          <NNIcon name="arrow" class="nn-date-range-picker__icon" />
        </div>
      </template>

      <div class="nn-date-range-picker__popup">
        <div class="nn-date-range-picker__calendars">
          <NNCalendar
            v-model:year="year"
            :month="month"
            :first-year="props.firstYear"
            :last-year="props.lastYear"
            :is-highlighted="isHighlighted"
            :is-start="isStart"
            :is-end="isEnd"
            @select="selectDay"
            @enter="onEnterDay"
            @leave="onLeaveDay"
            @update:month="month = $event"
          />
          <NNCalendar
            v-model:year="year"
            :month="followingMonth"
            :first-year="props.firstYear"
            :last-year="props.lastYear"
            :is-highlighted="isHighlighted"
            :is-start="isStart"
            :is-end="isEnd"
            @select="selectDay"
            @enter="onEnterDay"
            @leave="onLeaveDay"
            @update:month="updateFollowingMonth"
          />
        </div>
        <div>
          <div class="nn-date-range-picker__footer">
            <NNButton
              :disabled="start === null || end === null"
              @click="confirm"
            >
              confirm
            </NNButton>
          </div>
        </div>
      </div>
    </NNFlyout>
  </div>
</template>
