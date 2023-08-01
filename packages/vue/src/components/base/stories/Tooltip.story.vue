<script lang="ts" setup>
import Tooltip from "../Tooltip.vue";
</script>

<template>
  <Story title="Components/Tooltip" group="" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls />
      <p>
        Lorem ipsum dolor sit amet
        <Tooltip>
          consectetur
          <template #popup>
            Some nice tooltip <a href="#">read more</a>
          </template>
        </Tooltip>
        adipisicing elit. Dolore provident a neque architecto alias sed in ipsa
        nesciunt. Dignissimos molestias maiores iste aliquam odio. Dolore amet
        aut nam eum laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet
        <Tooltip>
          consectetur
          <template #popup>
            Some nice tooltip <a href="#">read more</a>
          </template>
        </Tooltip>
        adipisicing elit. Dolore provident a neque architecto alias sed in ipsa
        nesciunt. Dignissimos molestias maiores iste aliquam odio. Dolore amet
        aut nam eum laborum.
      </p>
    </Variant>
  </Story>
</template>
