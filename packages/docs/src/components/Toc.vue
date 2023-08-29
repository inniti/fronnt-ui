<script setup lang="ts">
import { onMounted, ref } from "vue";

type Item = { id: string; label: string; level: number };

const toc = ref<Item[]>([]);
const itemRefs = ref<HTMLElement[]>([]);

const el = ref();

const build = () => {
  const list: Item[] = [];
  document.querySelectorAll("h2[id],h3[id],h4[id]").forEach((heading) => {
    const level = +heading.tagName[1];
    const label = heading.textContent;
    if (!label) {
      return;
    }
    const id = heading.getAttribute("id")!;

    list.push({
      id,
      label,
      level,
    });
  });

  toc.value = list;
};

const scrollToHeading = (id: string) => {
  const heading = document.getElementById(id);
  if (heading) {
    window.scrollTo({
      behavior: "smooth",
      top: heading.offsetTop - 100,
      left: 0,
    });
  }
};

onMounted(() => {
  build();
});
</script>

<template>
  <nav id="toc" ref="el">
    <ol>
      <li
        v-for="item in toc"
        ref="itemRefs"
        :key="item.id"
        :class="[`level-${item.level}`]"
      >
        <a :href="`#${item.id}`" @click.prevent="scrollToHeading(item.id)">
          {{ item.label }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
#toc {
  display: block;
  background: white;
  border-radius: 0.25rem;
  padding: 1rem;
}

ol {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  padding: 0;
  margin: 0;
  position: relative;
}
a {
  line-height: 2;
  display: block;
  text-decoration: none;
  padding-left: 1em;
  position: relative;
  &::before {
    content: "#";
    position: absolute;
    color: lightgray;
    left: 0;
    top: 0;
  }
}
a:hover {
  text-decoration: underline;
}
li.level-3 {
  padding-left: 0.75em;
}
</style>
