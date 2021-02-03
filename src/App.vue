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
        api: 'g2/getOnsInfo',
        responseType: 'stream',
        payload: {
          name: 'disease_h5',
        },
        callback:(res) => {
          console.log(res.data);
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
