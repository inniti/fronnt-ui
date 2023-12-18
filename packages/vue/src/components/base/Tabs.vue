<script lang="ts">
export default {
  name: "NNTabs",
};
</script>

<script lang="ts" setup>
import { onBeforeUnmount, onActivated } from "vue";
import { ref, computed, onMounted, watch } from "vue";
import debounce from "../../helpers/debounce";

const emit = defineEmits(["activate"]);
const props = withDefaults(
  defineProps<{
    tabs: string[];
    active?: number;
  }>(),
  {
    active: 0,
  }
);

const element = ref<HTMLElement>();
const activeTab = ref(0);
const activeTabWidth = ref(0);
const activeTabX = ref(0);
const triggers = ref<HTMLElement[]>([]);

const triggersResizeObserver = ref();

const activeTrigger = computed(() => {
  if (Array.isArray(triggers.value) && triggers.value.length > 0) {
    return triggers.value?.[activeTab.value || 0];
  }
  return null;
});
const highlightStyle = computed(() => {
  return {
    transform: `translateX(${activeTabX.value}px) scaleX(${
      activeTabWidth.value / 100
    })`,
  };
});

function activateTab(i: number) {
  if (i !== activeTab.value) {
    activeTab.value = i;
    updateTrigger();
    emit("activate", i);
  }
}

function updateTrigger() {
  if (window && activeTrigger.value) {
    activeTabWidth.value = activeTrigger.value.getBoundingClientRect().width;
    activeTabX.value = activeTrigger.value.offsetLeft || 0;

    activeTrigger.value.scrollIntoView({
      block: "nearest",
      inline: "start",
    });
  }
}

const initResizeObserver = () => {
  triggersResizeObserver.value?.disconnect();
  const triggers = element.value?.querySelectorAll(".nn-tabs__trigger");
  triggers?.forEach((trigger) => {
    triggersResizeObserver.value?.observe(trigger);
  });
};

watch(
  () => props.active,
  (newValue) => {
    if (newValue !== activeTab.value) {
      activeTab.value = newValue;
      updateTrigger();
    }
  },
  { immediate: true }
);

watch(() => props.tabs, initResizeObserver);

onMounted(() => {
  triggersResizeObserver.value = new ResizeObserver(
    debounce(() => {
      updateTrigger();
    }, 100)
  );
  updateTrigger();
});

onActivated(updateTrigger);

onBeforeUnmount(() => {
  triggersResizeObserver.value?.disconnect();
});
</script>

<template>
  <div ref="element" class="nn-tabs">
    <div class="nn-tabs__header">
      <span class="nn-tabs__highlight" :style="highlightStyle"></span>
      <div
        v-for="(tab, i) in props.tabs"
        :key="i"
        ref="triggers"
        class="nn-tabs__trigger"
        :class="[activeTab === i && 'nn-tabs__trigger--active']"
        tabindex="0"
        @click="activateTab(i)"
        @keydown.enter="activateTab(i)"
      >
        <slot :name="`trigger-${i}`">{{ tab }}</slot>
      </div>
    </div>
    <div v-if="$slots['tab-0']" class="nn-tabs__content">
      <div
        v-for="(_, i) in props.tabs"
        :key="`tab-${i}`"
        class="nn-tabs__tab"
        :class="[activeTab === i && 'nn-tabs__tab--active']"
      >
        <slot :name="`tab-${i}`"></slot>
      </div>
    </div>
  </div>
</template>
