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

type AddToastOptions = {
  type: ToastType;
  title: string;
  message?: string;
  action?: { fn: (toast: { id: string }) => void; label: string };
  autoClose?: number;
};

function _add(options: AddToastOptions) {
  const id = `toast_${Math.floor(Math.random() * 10000000000)}`;
  toasts.value.unshift({
    id,
    type: options.type,
    title: options.title,
    message: options.message,
    action: options.action,
  });

  if (options.autoClose && !isNaN(options.autoClose)) {
    setTimeout(() => {
      close(id);
    }, options.autoClose);
  }
}

type AddFn =
  | ((args: AddToastOptions) => void)
  | ((
      type: ToastType,
      title: string,
      message?: string,
      action?: { fn: (toast: { id: string }) => void; label: string }
    ) => void);

const add: AddFn = (options: AddToastOptions, ...args: any[]) => {
  let _options: AddToastOptions;

  if (typeof options === "string") {
    console.warn(
      "The usage of useToasts#add with separate arguments is deprecated, use the options object instead"
    );
    _options = {
      type: options as unknown as ToastType,
      title: args[0],
      message: args[1],
      action: args[2],
    };
  } else {
    _options = options;
  }

  _add(_options);
};

function clear() {
  toasts.value = [];
}

function close(id: string) {
  const idx = toasts.value.findIndex((toast) => toast.id === id);
  if (idx > -1) {
    toasts.value.splice(idx, 1);
  }
}

const useToast = () => {
  return {
    toasts,
    add,
    clear,
    close,
  };
};

export default useToast;
