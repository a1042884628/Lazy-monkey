<template>
  <div class="workbench">
    <div class="wrap">
      <h2>欢迎使用懒猴子CG管理系统前端模版</h2>
      <p>您使用的此套项目模版由<em>桂阳阿茄思特网络技术有限公司</em>提供，模版没有任何版权问题，请放心使用！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workbench',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@import "../assets/style/variable";
.workbench {
  height: 100%;
  text-align: center;
  color: #777;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap {
    margin-top: -100px;
  }
  h2 {
    font-size: 32px;
    color: #555;
    margin-bottom: 20px;
  }
  p {
    line-height: 30px;
  }
  em,a {
    font-style: normal;
    font-weight: bold;
    margin: 0 3px;
    color: @primary-color;
  }
}
</style>
