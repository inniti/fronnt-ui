<script lang="ts">
export default {
  name: "NNSelect",
};
</script>

<script lang="ts" setup>
import { ref, computed } from "vue";
import NNFlyout from "./Flyout.vue";
import NNClearButton from "./ClearButton.vue";
import { NNIconChevronsUpDown, NNIconCheck } from "../icons";
import NNLoadingIndicator from "./LoadingIndicator.vue";
import { nextTick } from "vue";
import { unref } from "vue";

type Option = {
  label: string;
  value: string | number;
  disabled?: boolean;
  [key: string | symbol]: unknown;
};

type OptionGroup = {
  label: string;
  options: Option[];
};

type SingleModelValue = string | number;
type MultipleModelValue = Array<string | number>;

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    error?: boolean;
    options: Array<Option | OptionGroup>;
    modelValue?: SingleModelValue | MultipleModelValue | null;
    clearable?: boolean;
    clearValue?: null | SingleModelValue | [];
    multiple?: boolean;
    loading?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
    search?: (term: string) => Promise<void> | void;
  }>(),
  {
    disabled: false,
    error: false,
    options: () => [],
    modelValue: null,
    noSelectionText: "Please choose",
    noResultsText: "No results",
    clearable: true,
    clearValue: null,
    multiple: false,
    loading: false,
    searchable: false,
    searchPlaceholder: "Search...",
    search: undefined,
  }
);

const emit = defineEmits<{
  (e: "select", option: Option): void;
  (e: "deselect", option: Option): void;
  (e: "search", term: string): void;
  (e: "close"): void;
  (e: "clear"): void;
  (
    e: "update:modelValue",
    value: null | SingleModelValue | MultipleModelValue
  ): void;
}>();

const field = ref();
const flyout = ref();
const searchField = ref();
const isOpen = ref(false);
const searchTerm = ref("");
const focusedOption = ref<string | number | null>(null);

const showClearButton = computed(() => {
  if (props.disabled) {
    return false;
  }
  if (!props.clearable) {
    return false;
  }
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0;
  }

  return !!props.modelValue;
});

const showSearchField = computed(() => {
  return props.searchable && isOpen.value;
});

const isGroup = (option: Option | OptionGroup) => !!option.options;

const hasGroups = computed(() => {
  return props.options.find(isGroup) !== null;
});

const filterOptions = (option: Option) => {
  if (!props.searchable) return true;
  if (typeof props.search === "function") return true;

  if (option.group) return true;
  const term = searchTerm.value.toLowerCase().trim();

  if (!term) return true;
  return option.label.toLocaleLowerCase().includes(term);
};

const groupedOptions = computed<OptionGroup[]>(() => {
  let groups: OptionGroup[];

  if (hasGroups.value) {
    // virtual group for ungrouped options
    groups = [
      {
        label: "-",
        options: (props.options.filter((o) => !isGroup(o)) as Option[]).filter(
          filterOptions
        ),
      },
      ...(props.options.filter(isGroup) as OptionGroup[]).map((group) => {
        return {
          label: group.label,
          options: group.options.filter(filterOptions),
        };
      }),
    ];
  } else {
    groups = [
      {
        label: "-",
        options: (props.options as Option[]).filter(filterOptions),
      },
    ];
  }

  return groups;
});

const toggle = () => {
  if (props.disabled) {
    return;
  }

  isOpen.value = !isOpen.value;

  if (props.searchable && isOpen.value) {
    nextTick(() => {
      searchField.value?.focus();
    });
  }
};

const select = (option: Option) => {
  if (option.disabled || option.group) {
    return;
  }
  let newModelValue: SingleModelValue | MultipleModelValue;

  if (props.multiple) {
    newModelValue = Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : [];

    const existingIdx = newModelValue.indexOf(option.value);

    if (existingIdx > -1) {
      emit("deselect", option);
      newModelValue.splice(existingIdx, 1);
    } else {
      emit("select", option);
      newModelValue.push(option.value);
    }
  } else {
    emit("select", option);
    newModelValue = option.value;
  }

  emit("update:modelValue", newModelValue);

  if (!props.multiple) {
    isOpen.value = false;
  }
};

const clear = () => {
  if (!props.disabled && props.clearable) {
    emit("clear");
    emit("update:modelValue", props.clearValue);
    isOpen.value = false;
  }
};

const onSearchTermChange = () => {
  emit("search", unref(searchTerm));
  if (typeof props.search === "function") {
    props.search(unref(searchTerm));
  }
};

const onClose = () => {
  searchTerm.value = "";
  emit("close");
};

const onOptionFocus = (value: string | number) => {
  focusedOption.value = value;
};

const isOptionSelected = (option: Option) => {
  return props.multiple && Array.isArray(props.modelValue)
    ? props.modelValue.indexOf(option.value) > -1
    : props.modelValue === option.value;
};

const getOptionLabel = (value: string | number) => {
  for (let i = 0; i < groupedOptions.value.length; i++) {
    const groupOptions = groupedOptions.value[i].options;
    for (let j = 0; j < groupOptions.length; j++) {
      const option = groupOptions[j];
      if (option.value === value) {
        return option.label;
      }
    }
  }

  return value;
};
</script>

<template>
  <NNFlyout
    ref="flyout"
    v-model="isOpen"
    class="nn-select"
    full-width
    :class="[
      isOpen && 'nn-select--open',
      props.disabled && 'nn-select--disabled',
      props.error && 'nn-select--error',
      props.multiple && 'nn-select--multiple',
      props.loading && 'nn-select--loading',
      props.searchable && 'nn-select--searchable',
    ]"
    @close="onClose"
  >
    <template #trigger>
      <div
        ref="field"
        class="nn-select__field"
        :tabindex="props.disabled ? '-1' : '0'"
        @click="toggle"
        @keydown.enter="toggle"
        @focus="focusedOption = null"
      >
        <input
          v-if="props.searchable"
          v-show="showSearchField"
          ref="searchField"
          v-model="searchTerm"
          type="text"
          autocomplete="off"
          class="nn-select__search"
          :placeholder="props.searchPlaceholder"
          @input="onSearchTermChange"
        />
        <div v-show="!showSearchField" class="nn-select__selection">
          <template
            v-if="
              props.multiple
                ? Array.isArray(props.modelValue) && props.modelValue.length > 0
                : !!props.modelValue
            "
          >
            <slot name="selection" :selection="props.modelValue">
              <template v-if="props.multiple">
                <div
                  v-for="value in props.modelValue as MultipleModelValue"
                  :key="`select-value-${value}`"
                  class="nn-select__selection-value nn-select__selection-value--multiple"
                >
                  {{ getOptionLabel(value) }}
                </div>
              </template>
              <div v-else class="nn-select__selection-value">
                {{ getOptionLabel(props.modelValue as SingleModelValue) }}
              </div>
            </slot>
          </template>
          <div v-else class="nn-select__no-value">
            <slot name="no-value"> Choose </slot>
          </div>
        </div>

        <NNClearButton
          v-if="props.clearable"
          v-show="showClearButton"
          class="nn-select__clear"
          @click.stop="clear"
          @keydown.enter.stop="clear"
        />

        <NNIconChevronsUpDown class="nn-select__chevron" />
      </div>
    </template>

    <div v-if="props.loading" class="nn-select__loading">
      <div class="nn-select__loading">
        <slot name="loading"> <NNLoadingIndicator /> </slot>
      </div>
    </div>
    <div
      v-else-if="!groupedOptions.find((group) => group.options.length > 0)"
      class="nn-select__no-results"
    >
      <slot name="no-results"> No results </slot>
    </div>
    <ul v-else class="nn-select__groups">
      <li
        v-for="(group, idx) in groupedOptions"
        :key="`group_${idx}`"
        class="nn-select__group"
        :class="{ 'nn-select__group--empty': group.options.length === 0 }"
      >
        <span v-show="group.label !== '-'" class="nn-select__group-label">
          {{ group.label }}
        </span>
        <ul class="nn-select__options">
          <li
            v-for="option in group.options"
            :key="`option__${option.value}`"
            class="nn-select__option"
            :class="{
              'nn-select__option--disabled': option.disabled,
              'nn-select__option--focused': option.value === focusedOption,
              'nn-select__option--selected': isOptionSelected(option),
            }"
            :aria-selected="isOptionSelected(option)"
            :tabindex="option.disabled || !isOpen || option.group ? '-1' : '0'"
            role="option"
            @focus="onOptionFocus(option.value)"
            @click="select(option)"
            @keydown.enter="select(option)"
            @keydown.space="select(option)"
          >
            <span class="nn-select__option-label">
              <slot
                name="option"
                :option="option"
                :selected="isOptionSelected(option)"
              >
                {{ option.label }}
              </slot>
            </span>
            <NNIconCheck
              v-if="isOptionSelected(option)"
              aria-hidden="true"
              class="nn-select__option-check"
            />
          </li>
        </ul>
      </li>
    </ul>
  </NNFlyout>
</template>
