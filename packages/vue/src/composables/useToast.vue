<script lang="ts">
import { reactive } from 'vue';

// The toast component memory contains a list of objects with the respective toast properties.
const toasts = reactive<[
  {
    id: string,
    type: string,
    title: string,
    message: string,
    submit?: string,
    timeout: number,
    show: boolean
  }
  ]>([
  {
    id: "toast_x",
    type: "default",
    title: "",
    message: "",
    submit: "",
    timeout: 0,
    show: false
  }
]);

const addToast = (
  type: string,
  title: string,
  message: string,
  submit: string,
  timeout: number
) => {
  // Generate ID here so that caller doesn't need to care.
  const id = `toast_${Math.floor(Math.random() * 1000000)}`;

  toasts.push({
    id: id,
    type: type,
    title: title,
    message: message,
    submit: submit,
    timeout: timeout,
    show: true
  });
  // Get reference to the just created toast object.
  const objToast = toasts.filter((item) => item.id === id)[0];

  //Start timeout, after which the taost disappears automatically.
  setTimeout(() => objToast.show = false, timeout);

  return id;
};

const removeToast = (id: string) => {
  const objToast = toasts.filter((item) => item.id === id)[0];

  objToast.show = false;
};

export default function useToast() {
  return { addToast, removeToast, toasts };
}
</script>