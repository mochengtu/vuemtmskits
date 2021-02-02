<template>
  <IndexContent />

</template>

<script>

import { defineComponent, onMounted } from 'vue';
import { fetchGet } from '@/utils/request';
import IndexContent from '@/layout/IndexContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    IndexContent,
  },
  setup() {
    onMounted(() => {
      fetchGet({
        method: 'get',
        api: 'http://bit.ly/2mTM3nY',
        responseType: 'stream',
        payload: {

        },
        callback:(res) => {
          console.log(res);
        }
      });
    })
    return {

    }
  }
})
</script>

<style>

</style>
