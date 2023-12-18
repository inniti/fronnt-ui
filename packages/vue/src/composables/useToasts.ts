import { ref } from "vue";

export type ToastType = "info" | "success" | "warning" | "error";

export type Toast = {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  action?: {
    fn: (toast: { id: string }) => void;
    label: string;
  };
};

const toasts = ref<Toast[]>([]);

const add = (
  type: ToastType,
  title: string,
  message?: string,
  action?: { fn: (toast: { id: string }) => void; label: string }
) => {
  toasts.value.unshift({
    id: `toast_${Math.floor(Math.random() * 10000000000)}`,
    type,
    title,
    message,
    action,
  });
};

const clear = () => {
  toasts.value = [];
};

const close = (id: string) => {
  const idx = toasts.value.findIndex((toast) => toast.id === id);
  if (idx > -1) {
    toasts.value.splice(idx, 1);
  }
};

const useToast = () => {
  return {
    toasts,
    add,
    clear,
    close,
  };
};

export default useToast;
