<script setup lang="ts">
import { mainNav } from "../navigation";

const props = defineProps<{ currentPath: string }>();
</script>

<template>
  <nav class="main-nav">
    <ul>
      <li v-for="(item, idx) in mainNav" :key="idx">
        <a
          :href="item.link"
          :class="{
            highlight: item.highlight,
            active: item.link && props.currentPath.startsWith(item.link),
          }"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  display: block;
  flex: 1;
  padding: 4rem 2rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }

  li {
    display: block;
    padding: 0;
    margin: 0;

    a {
      display: block;
      line-height: 3;
      text-decoration: none;
      border-radius: 0.5em;
      padding: 0 1em;
      transition: background-color 100ms ease;
      font-weight: bold;
      position: relative;
      text-align: center;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(100% - 0.5rem);
        left: calc(50% - 0.5rem);
        width: 1rem;
        height: 0.25rem;
        border-radius: 0.125rem;
        background: var(--nn-color-primary);
        display: none;
      }

      &:hover {
        background: #f1f3f5;
      }

      &.active::after {
        display: block;
      }

      &.highlight {
        color: #7950f2;

        &:hover {
          background: #e5dbff;
        }
      }
    }
  }

  @media screen and (min-width: 64rem) {
    padding: 0;
    ul {
      flex-direction: row;
      overflow-x: auto;
    }
  }
}
</style>
