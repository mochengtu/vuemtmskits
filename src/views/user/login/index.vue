<template>
  <div class="login">
      <h1>{{ title }}</h1>
      <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const title = ref<string>('this is login page');
        return {
            title
        }
    }
});

</script>

<style lang="scss" scoped>
.login{
    padding: 0;
    margin: 0;
}
</style>