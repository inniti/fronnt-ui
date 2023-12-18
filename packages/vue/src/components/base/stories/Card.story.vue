<script lang="ts" setup>
import { ref } from "vue";
import Card from "../Card.vue";

const title = ref("Card");
</script>

<template>
  <Story title="Components/Card" :layout="{ type: 'single' }">
    <Variant title="Default">
      <template #controls>
        <HstText v-model="title" title="Title" />
      </template>
      <Card :title="title">
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>
      </Card>
    </Variant>
    <Variant title="Custom Slots">
      <template #controls>
        <HstText v-model="title" title="Title" />
      </template>

      <Card :title="title">
        <template #header> Header slot </template>
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>
        <p>
          Consequat culpa et ipsum nisi laborum sint veniam elit eu. Id et
          cupidatat est proident minim id reprehenderit mollit mollit enim
          eiusmod nisi cupidatat. Qui commodo non magna aute pariatur est
          eiusmod. Velit ut aliquip nulla in irure enim nostrud magna ut tempor
          fugiat ut cupidatat pariatur aliqua. Consequat ad ad sint est nostrud
          laboris voluptate commodo consectetur.
        </p>

        <template #footer> Footer slot </template>
      </Card>
    </Variant>
  </Story>
</template>
