<script lang="ts">
import { storeToast } from "../../stores/Toast.store.vue";
import { watch } from "vue";

export function useToast() {
  return (
    type: string,
    title: string,
    message: string,
    submit: string,
    timeout: number
  ) => {
    const id = Math.floor(Math.random() * 1000000);

    storeToast.push({
      id: id,
      type: type,
      title: title,
      message: message,
      submit: submit,
      timeout: timeout,
      show: true
    });

    const objToast = storeToast.filter((item) => item.id === id)[0];

    setTimeout(() => objToast.show = false, timeout);
  };
}
</script>

<script lang="ts" setup>
import Icon from "./Icon.vue";

watch(storeToast, (toasts) => {
  const toastId = toasts[toasts.length - 1].id;

  /**
   * Start timeout, after which the taost disappears automatically.
   
  setTimeout(() => 
    toasts.forEach((item) => (item.id === toastId) ? item.show = false : null), 
    toasts[toasts.length - 1].timeout
  );
  */
});
</script>

<template>
  <Teleport to="body">
    <div class="nn-toast__wrapper">
      <Transition name="nn-toast-transition" v-for="toast in storeToast.slice().reverse()">
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