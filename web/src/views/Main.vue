<template>
  <div class="">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <i class="sprite top-img"></i>
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立刻下载</button>
    </div>
    <div class="nav bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around w-100">
        <div class="nav-item active jc-space-between">
          <router-link class="nav-link" tag='div' to='/'>首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag='div' to='/'>攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag='div' to='/'>赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';
.topbar{
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>