<script lang="ts" setup>
import NNSkeleton from "../Skeleton.vue";
</script>

<template>
  <Story title="Components/Skeleton">
    <template #controls> </template>
    <Variant title="Default">
      <NNSkeleton />
    </Variant>

    <Variant title="Composition">
      <div class="composition">
        <NNSkeleton style="height: 3rem; width: 3rem; border-radius: 3rem" />
        <NNSkeleton style="height: 2rem" />
        <NNSkeleton style="height: 3rem; grid-column: span 2" />
        <NNSkeleton style="grid-column: span 2" />
        <NNSkeleton style="grid-column: span 2" />
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.composition {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
}
</style>
