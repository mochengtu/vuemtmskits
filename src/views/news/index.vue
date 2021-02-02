<template>
  <div class="news">
      <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {
            title: 'this is news page'
        }
    }
});

</script>

<style lang="scss" scoped>
.news{
    padding: 0;
    margin: 0;
}
</style>