<template>
  <div class="layout">
    <el-container>
      <el-header>
        <LayoutNavMenu />
      </el-header>
      <el-container class="el-container-view">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutNavMenu from '@/layout/TopNavMenu.vue';

export default defineComponent({
  components: {
    LayoutNavMenu,
  },
  setup() {
    return {

    }
  }
});
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;


}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container-view{
  height: calc(100vh - 60px) !important;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>