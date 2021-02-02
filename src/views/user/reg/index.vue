<template>
  <div class="reg">
      <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {
            title: 'this is reg page'
        }
    }
});

</script>

<style lang="scss" scoped>
.reg{
    padding: 0;
    margin: 0;
}
</style>