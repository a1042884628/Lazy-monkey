<template>
  <div class="menu" :class="{collapse: menuData.collapse}">
    <div class="logo">
      <div><img src="/static/logo.png"></div>
      <h1 :class="{hidden: menuData.collapse}">Vue ElementUI数据管理系统</h1>
    </div>
    <scrollbar>
      <el-menu
        ref="menu"
        :default-active="activeIndex"
        text-color="#fff"
        active-text-color="#fff"
        :collapse="menuData.collapse"
        :default-openeds="defaultOpeneds"
        :collapse-transition="false"
        @select="handleSelect"
      >
        <MenuItems v-for="menu in menuData.list" :key="menu.index" :menu="menu" :is-root-menu="true"/>
      </el-menu>
    </scrollbar>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MenuItems from './MenuItems'
import Scrollbar from './Scrollbar'
export default {
  name: 'Menu',
  components: {Scrollbar, MenuItems},
  computed: {
    ...mapState(['menuData']),
    // 选中的菜单index
    activeIndex () {
      let path = this.$route.path
      if (path.endsWith('/')) {
        path = path.substring(0, path.length - 1)
      }
      const menuConfig = this.__getMenuConfig(path, 'url', this.menuData.list)
      return menuConfig.index
    },
    // 默认展开的菜单index
    defaultOpeneds () {
      return this.menuData.list.map(menu => menu.index)
    }
  },
  methods: {
    // 处理菜单选中
    handleSelect (menuIndex) {
      const menuConfig = this.__getMenuConfig(menuIndex, 'index', this.menuData.list)
      // 点击当前菜单不做处理
      if (menuConfig.url === this.$route.path) {
        return
      }
      if (menuConfig.url == null || menuConfig.url.trim().length === 0) {
        return
      }
      this.$router.push(menuConfig.url)
    },
    // 获取菜单配置
    __getMenuConfig (value, key, menus) {
      for (const menu of menus) {
        if (menu[key] === value) {
          return menu
        }
        if (menu.children != null && menu.children.length > 0) {
          const menuConfig = this.__getMenuConfig(value, key, menu.children)
          if (menuConfig != null) {
            return menuConfig
          }
        }
      }
      return null
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/style/variable";
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  // LOGO
  .logo {
    height: 60px;
    flex-shrink: 0;
    line-height: 60px;
    overflow: hidden;
    display: flex;
    background: @primary-color - 12;
    padding: 0 16px;
    & > div {
      width: 32px;
      flex-shrink: 0;
      margin-right: 12px;
      img {
        width: 100%;
        flex-shrink: 0;
        vertical-align: middle;
        position: relative;
        top: -2px;
      }
    }
    h1 {
      font-size: 16px;
      font-weight: 500;
      transition: opacity ease .3s;
      overflow: hidden;
      &.hidden {
        opacity: 0;
      }
    }
  }
  // 菜单
  .el-menu {
    border-right: 0;
    user-select: none;
    // 已选中菜单
    /deep/ .el-menu-item.is-active {
      background-color: @primary-color - 30;
    }
    // 子菜单
    /deep/ .el-submenu {
      .el-submenu__title{
        background-color: @primary-color;
      }
      &.is-active {
        .el-submenu__title{
          background-color: @primary-color - 20;
        }
        .el-menu .el-menu-item{
          background-color: @primary-color - 20;
          &.is-active {
            background-color: @primary-color - 40;
          }
        }
      }
      // 菜单上下箭头
      .el-submenu__title i {
        color: #f7f7f7;
      }
    }
    /deep/ .el-menu-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: @primary-color;
      // 菜单图标
      i {
        color: #f7f7f7;
      }
    }
  }
}
</style>
