<script lang="ts">
export default {
  name: "NNToasts",
};
</script>

<script lang="ts" setup>
import useToasts from "../../composables/useToasts";
import Toast from "./Toast.vue";

const { toasts } = useToasts();
</script>

<template>
  <Teleport to="body">
    <div class="nn-toasts">
      <TransitionGroup
        name="nn-toast-transition"
        tag="div"
        class="nn-toasts__list"
      >
        <Toast
          v-for="toast in toasts"
          :id="toast.id"
          :key="toast.id"
          :type="toast.type"
          :title="toast.title"
          :message="toast.message"
          :action="toast.action"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>
