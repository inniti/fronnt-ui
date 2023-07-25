<script lang="ts">
export default {
  name: "NNDatePicker",
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";
import NNCalendar from "./Calendar.vue";
import NNPopup from "./Popup.vue";
import NNButton from "./Button.vue";
import NNIconButton from "./IconButton.vue";
import NNIcon from "./Icon.vue";

const now = new Date();

const props = withDefaults(
  defineProps<{
    firstYear?: number;
    lastYear?: number;
    modelValue?: Date | null;
    disabled?: boolean;
  }>(),
  {
    firstYear: 1900,
  }
);

const emit = defineEmits(["update:model-value"]);

const popup = ref();
const model = ref<Date | null>(props.modelValue || null);
const isFocused = ref(false);

watch(
  () => props.modelValue,
  () => {
    model.value = props.modelValue || null;
  }
);

const year = ref(now.getFullYear());
const month = ref(now.getMonth());
const isOpen = ref(false);

const selectDay = (day: Date) => {
  model.value = day;
};

const isStart = (day: Date) => {
  if (model.value) {
    return (
      model.value.getFullYear() === day.getFullYear() &&
      model.value.getMonth() === day.getMonth() &&
      model.value.getDate() === day.getDate()
    );
  }
  return false;
};

const isEnd = (day: Date) => {
  if (model.value) {
    return (
      model.value.getFullYear() === day.getFullYear() &&
      model.value.getMonth() === day.getMonth() &&
      model.value.getDate() === day.getDate()
    );
  }
  return false;
};

const clear = () => {
  model.value = null;
  emit("update:model-value", null);
};

const confirm = () => {
  emit("update:model-value", model.value);
  popup.value.close();
};

const onClose = () => {
  model.value = props.modelValue || null;
  isFocused.value = false;
};

const onOpen = () => {
  isFocused.value = true;
};

const onFocus = () => {
  isFocused.value = true;
};
</script>

<template>
  <div
    ref="el"
    class="nn-date-picker"
    :class="[
      props.disabled && 'nn-date-picker--disabled',
      isOpen && 'nn-date-picker--open',
      isFocused && 'nn-date-picker--focused',
    ]"
  >
    <NNPopup
      ref="popup"
      :disabled="props.disabled"
      @close="onClose"
      @open="onOpen"
      @focus="onFocus"
    >
      <div class="nn-date-picker__field">
        <div class="nn-date-picker__selection">
          <slot name="selection" :value="model">
            <span>{{ model?.toLocaleDateString() }}</span>
          </slot>
        </div>
        <NNIconButton
          class="nn-date-picker__clear"
          @click.stop="clear"
          v-show="model !== null"
          icon="x"
        />
        <NNIcon name="arrow" class="nn-date-picker__icon" />
      </div>

      <template #popup>
        <div class="nn-date-picker__popup">
          <NNCalendar
            v-model:year="year"
            v-model:month="month"
            :first-year="props.firstYear"
            :last-year="props.lastYear"
            @select="selectDay"
            :is-start="isStart"
            :is-end="isEnd"
          />
          <div>
            <div class="nn-date-picker__footer">
              <NNButton @click="confirm" :disabled="model === null">
                confirm
              </NNButton>
            </div>
          </div>
        </div>
      </template>
    </NNPopup>
  </div>
</template>
