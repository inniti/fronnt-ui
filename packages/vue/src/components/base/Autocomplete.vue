<script lang="ts">
export default {
  name: "NNAutocomplete",
};
</script>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import debounce from "../../helpers/debounce";
import LoadingIndicator from "./LoadingIndicator.vue";
import IconButton from "./IconButton.vue";

type Result = {
  id: string;
  label: string;
};
const emit = defineEmits(["select"]);
const results = ref<Result[]>([]);
const loading = ref(false);
const term = ref("");
const element = ref();
const props = withDefaults(
  defineProps<{
    load: (term: string) => Promise<Result[]>;
  }>(),
  {
    load: () => Promise.resolve([]),
  }
);

const load = async (force?: boolean) => {
  const _term = (term.value || "").trim();
  if (loading.value && !force) return;
  if (_term.length === 0) return;
  loading.value = true;
  try {
    const _results = await props.load(_term);
    if (_term.length > 0) {
      results.value = _results;
    }
  } catch (error) {
    results.value = [];
  }
  loading.value = false;
};
const debouncedLoad = debounce(load, 300);

const onInput = (event: Event) => {
  debouncedLoad();
};

const loadAndSelectFirst = async () => {
  await load(true);
  if (results.value.length > 0) {
    selectResult(results.value[0]);
  }
};

const selectResult = (result: Result) => {
  emit("select", result);
  results.value = [];
  loading.value = false;
};

const reset = () => {
  results.value = [];
  loading.value = false;
  term.value = "";
};

const showResults = computed(() => {
  return results.value.length > 0;
});

const onDocumentClick = (e: Event) => {
  if (!element.value?.contains(e.target as HTMLElement)) {
    console.log("click outside");
    results.value = [];
    loading.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentClick);
});
</script>

<template>
  <div
    ref="element"
    class="nn-autocomplete"
    :class="[loading && 'nn-autocomplete--loading']"
  >
    <div class="nn-autocomplete__control">
      <input
        v-model.trim="term"
        type="text"
        class="nn-autocomplete__input"
        @input="onInput"
        @focus="load(false)"
        @keydown.enter="loadAndSelectFirst"
        @keydown.esc="reset"
      />
      <IconButton
        v-show="term"
        icon="X"
        class="nn-autocomplete__clear"
        tabindex="0"
        @click="reset"
        @keydown.enter="reset"
      />
      <LoadingIndicator v-if="loading" class="nn-autocomplete__loading" />
    </div>
    <ul v-show="showResults" class="nn-autocomplete__results">
      <li
        v-for="result in results"
        :key="result.id"
        class="nn-autocomplete__result"
        tabindex="0"
        @click="selectResult(result)"
        @keydown.enter="selectResult(result)"
      >
        <slot name="result" :result="result"> {{ result.label }}</slot>
      </li>
    </ul>
  </div>
</template>
