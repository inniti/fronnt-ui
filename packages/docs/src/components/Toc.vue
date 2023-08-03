<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

type Item = { id: string; label: string; level: number };

const toc = ref<Item[]>([]);

const activeId = ref();

let observer: IntersectionObserver;

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

const register = () => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.getAttribute("id");
      }
    });
  });

  document.querySelectorAll("h2[id],h3[id],h4[id]").forEach((heading) => {
    observer.observe(heading);
  });
};

onMounted(() => {
  build();
  register();
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<template>
  <nav id="toc">
    <ol>
      <li
        v-for="item in toc"
        :key="item.id"
        :class="[activeId === item.id && 'active', `level-${item.level}`]"
      >
        <a :href="`#${item.id}`">{{ item.label }}</a>
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
li::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -0.125rem;
  width: 0.125rem;
  height: 2em;
}
li.active::before {
  background: gray;
}
a {
  line-height: 2;
  display: block;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
li.level-3 {
  padding-left: 0.75em;
}
</style>
