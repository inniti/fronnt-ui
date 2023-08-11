<script lang="ts" setup>
import useToast from "../../composables/useToast.vue";
import Icon from "./Icon.vue";

const { toasts } = useToast();
</script>

<template>
  <Teleport to="body">
    <div class="nn-toast__wrapper">
      <Transition name="nn-toast-transition" v-for="toast in toasts.slice().reverse()">
        <div :class="`nn-toast nn-toast--${toast.type}`" v-if="toast.show">
          <div class="nn-toast__close" @click="toast.show = false">
            <Icon name="x" />
          </div>

          <h1 class="nn-text-m nn-toast__title">{{ toast.title }}</h1>
          <p class="nn-text-m nn-toast__message">{{ toast.message }}</p>
          <a class="nn-text-m nn-toast__clickable" v-if="toast.submit"><b>{{ toast.submit }}</b></a>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>