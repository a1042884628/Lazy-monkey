<template>
  <div class="table-layout">
    <!-- 头部 -->
    <div class="table-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="path in paths" :key="path">{{path}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索表单部分 -->
    <div class="table-search-form">
      <div class="form-wrap">
        <slot name="search-form"></slot>
      </div>
    </div>
    <!-- 列表和分页部分 -->
    <div class="table-content">
      <div class="table-wrap">
        <slot name="table-wrap"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TableLayout',
  computed: {
    paths () {
      return this.$route.meta.paths
    }
  }
}
</script>

<style lang="less">
@import "../assets/style/variable";
.el-container {
  background: #F7F8F9;
  min-height: calc(100vh);
}
// 头部
.table-header {
  overflow: hidden;
  padding: 12px 16px;
  // 页面路径
  .el-breadcrumb {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        color: #ABB2BE;
        font-size: 12px;
      }
      &:last-of-type .el-breadcrumb__inner {
        color: #606263;
        font-size: 14px;
      }
    }
  }
}
// 搜索
.table-search-form {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  .form-wrap {
    padding: 16px 16px 0 16px;
    width: 100%;
    background: #fff;
    &:empty {
      padding: 0;
    }
  }
  section {
    display: inline-block;
  }
}
// 列表和分页
.table-content {
  margin-top: 10px;
  padding: 0 16px;
  .table-wrap {
    padding: 16px 16px 0 16px;
    background: #fff;
    // 工具栏
    .toolbar {
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      li {
        display: inline-block;
      }
    }
    // 表格
    .el-table {
      // 复选框列
      .el-table-column--selection {
        .cell {
          text-align: center !important;
        }
      }
    }
    // 分页
    .table-pagination {
      padding: 16px 0;
      text-align: left;
    }
  }
}
// 新建/编辑窗口
.opera-tabledata-window {
  .el-form {
    .el-form-item__label {
      float: none;
    }
    .el-form-item__content > * {
      width: 100%;
    }
    .el-input-number {
      .el-input-number__decrease, .el-input-number__increase {
        display: none;
      }
      .el-input__inner {
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }
}
</style>
