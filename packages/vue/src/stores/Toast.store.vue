<script lang="ts">
import { reactive } from 'vue';

/**
 * The toast component memory contains a list of objects with the respective toast properties.
 */
export const storeToast = reactive<[
  {
    id: number,
    type: string,
    title: string,
    message: string,
    submit?: string,
    timeout: number,
    show: boolean
  }
  ]>([
  {
    id: -1,
    type: "default",
    title: "",
    message: "",
    submit: "",
    timeout: 0,
    show: false
  }
]);
</script>