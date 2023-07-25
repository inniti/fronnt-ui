<script lang="ts">
export default {
  name: "NNTabs",
};
</script>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from "vue";

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

const activeTab = ref(props.active);
const activeTabWidth = ref(100);
const activeTabX = ref(0);
const triggers = ref<HTMLElement[]>([]);

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
  activeTab.value = i;
  emit("activate", i);
  updateTrigger();
}

function updateTrigger() {
  if (window && activeTrigger.value) {
    activeTabWidth.value = activeTrigger.value.getBoundingClientRect().width;
    activeTabX.value = activeTrigger.value.offsetLeft || 0;

    activeTrigger.value.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

watch(
  () => props.active,
  (newValue) => {
    activeTab.value = newValue;
    updateTrigger();
  }
);

onMounted(() => {
  updateTrigger();
});
</script>

<template>
  <div class="nn-tabs">
    <div class="nn-tabs__header">
      <span class="nn-tabs__highlight" :style="highlightStyle"></span>
      <div
        v-for="(tab, i) in props.tabs"
        :key="i"
        ref="triggers"
        class="nn-tabs__trigger"
        tabindex="0"
        @click="activateTab(i)"
        @keydown.enter="activateTab(i)"
      >
        <slot :name="`trigger-${i}`">{{ tab }}</slot>
      </div>
    </div>
    <div class="nn-tabs__content">
      <div
        v-for="(tab, i) in props.tabs"
        :key="`tab-${i}`"
        class="nn-tabs__tab"
        :class="[activeTab === i && 'nn-tabs__tab--active']"
      >
        <slot :name="`tab-${i}`"></slot>
      </div>
    </div>
  </div>
</template>
