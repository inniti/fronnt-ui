<script lang="ts" setup>
import Link from "../Link.vue";
import CopyText from "../CopyText.vue";
</script>

<template>
  <Story title="Components/Link">
    <Variant title="Default">
      <Link href="/"> Track parcel </Link>
    </Variant>
    <Variant title="In long text">
      <CopyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        asdfasdf asdf provident! asdf asdf iouzasdfiuh liuazsdfo iuzasdlkfjhasdof iuz
        <Link href="/">Ipsam deleniti quos esse odit expedita</Link> Ipsam
        deleniti quos esse odit expedita, ullam accusamus nihil tempora libero
        nobis autem omnis saepe iure earum, voluptatum, veniam maiores!
      </CopyText>
    </Variant>
  </Story>
</template>
