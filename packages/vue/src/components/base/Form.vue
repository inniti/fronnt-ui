<script lang="ts">
export default {
  name: "NNForm",
};
</script>

<script lang="ts" setup></script>

<template>
  <form class="nn-form">
    <fieldset class="nn-form__fields">
      <slot />
    </fieldset>
    <div class="nn-form__actions">
      <slot name="actions" />
    </div>
  </form>
</template>
