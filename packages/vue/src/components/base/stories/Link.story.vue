<script lang="ts" setup>
import Link from "../Link.vue";
</script>

<template>
  <Story title="Components/Link">
    <Variant title="Block">
      <Link href="/" display="block"> Track parcel </Link>
    </Variant>
    <Variant title="Inline">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        asdfasdf asdf provident! asdf asdf iouzasdfiuh liuazsdfo
        iuzasdlkfjhasdof iuz
        <Link display="inline" href="/"
          >Ipsam deleniti quos esse odit expedita</Link
        >
        Ipsam deleniti quos esse odit expedita, ullam accusamus nihil tempora
        libero nobis autem omnis saepe iure earum, voluptatum, veniam maiores!
      </p>
    </Variant>
  </Story>
</template>
