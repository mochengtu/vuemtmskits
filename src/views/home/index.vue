<template>
  <div class="home">
      <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {
            title: 'this is home page'
        }
    }
});

</script>

<style lang="scss" scoped>
.home{
    padding: 0;
    margin: 0;
}
</style>