<template>
  <div>
      <swiper>
        <swiper-slide><img src="../assets/mes.jpg" alt="" width="100%" height="150px"></swiper-slide>
        <swiper-slide><img src="../assets/mes1.jpg" alt="" width="100%" height="150px"></swiper-slide>
        <swiper-slide><img src="../assets/mes2.jpg" alt="" width="100%" height="150px"></swiper-slide>
        <div class="pagination-home text-right px-3" slot="pagination"></div>
      </swiper>
      <div class="nav-icons text-center bg-white mt-3 d-flex flex-wrap pt-3 text-dark-1">
        <div class="nav-item mb-2" v-for="i in 10" :key="i">
          <img src="../assets/mes.jpg" alt="" width="50px">
          <!-- <i class="sprite sprite-news"></i> -->
          <div>爆料站</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
        }
      }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.pagination-home{
  .swiper-pagingation-bullet {
    opacity: 1;
    background-color: 0.1538rem;
    background-color: #fff;
    &.swpier-pagingation-bullet-active{
      background: map-get($colors, 'info' );
    }
  }
}
.nav-icons{
  .nav-item{
    width: 25%;
  }
}
</style>