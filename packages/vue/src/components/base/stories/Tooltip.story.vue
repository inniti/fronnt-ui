<script lang="ts" setup>
import Tooltip from "../Tooltip.vue";
import Button from "../Button.vue";
import IconHeart from "../../icons/IconHeart.vue";
</script>

<template>
  <Story title="Components/Tooltip" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls />
      <div style="display: flex; justify-content: space-between">
        <Tooltip>
          <Button variant="neutral" size="small">
            <IconHeart />
          </Button>

          <template #popup> Check this out, this is a long text</template>
        </Tooltip>
        <Tooltip>
          <Button variant="neutral" size="small">
            <IconHeart />
          </Button>

          <template #popup> Check this out </template>
        </Tooltip>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet
          <Tooltip>
            <span tabindex="0" class="highlight">consectetur</span>
            <template #popup>
              Some nice tooltip <a href="#">read more</a>
            </template>
          </Tooltip>
          adipisicing elit. Dolore provident a neque architecto alias sed in
          ipsa nesciunt. Dignissimos molestias maiores iste aliquam odio. Dolore
          amet aut nam eum laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet
          <Tooltip>
            <span class="highlight" tabindex="0">consectetur</span>
            <template #popup>
              Some nice tooltip <a href="#">read more</a>
            </template>
          </Tooltip>
          adipisicing elit. Dolore provident a neque architecto alias sed in
          ipsa nesciunt. Dignissimos molestias maiores iste aliquam odio. Dolore
          amet aut nam eum laborum.
        </p>
      </div>
      <div style="display: flex; justify-content: space-between">
        <Tooltip>
          <Button variant="neutral" size="small">
            <IconHeart />
          </Button>

          <template #popup> Check this out </template>
        </Tooltip>
        <Tooltip>
          <Button variant="neutral" size="small">
            <IconHeart />
          </Button>

          <template #popup> Check this out </template>
        </Tooltip>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.highlight {
  text-decoration: underline;
  text-decoration-style: dotted;
}
</style>
