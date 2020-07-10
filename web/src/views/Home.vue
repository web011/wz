<template>
  <div>
      <swiper>
        <swiper-slide><img src="//ossweb-img.qq.com/upload/adw/image/20200702/1872789c248441e82ab767d31bb22845.jpeg" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="//ossweb-img.qq.com/upload/adw/image/20200709/45401f66073e85baf1c697c97458f07b.jpeg" alt="" class="w-100"></swiper-slide>
        <swiper-slide><img src="//ossweb-img.qq.com/upload/adw/image/20200709/2f27e3f4051b1b6d15acec3d6164fb1a.jpeg" alt="" class="w-100"></swiper-slide>
        <div class="pagination-home text-right px-3" slot="pagination"></div>
      </swiper>
      <div class="nav-icons text-center bg-white mt-3 pt-3 text-dark-1">
        <div class="d-flex flex-wrap">
          <div class="nav-item mb-2" v-for="i in 10" :key="i">
            <i class="sprite sprite-news"></i>
            <div class="py-1">爆料站</div>
          </div>
        </div>
        <div class="bg-light py-2 fs-sm">
          <i class="sprite sprite-arrow mr-1"></i>
          收起
        </div>
      </div>
      <!-- end of nav icons -->
      <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
        <template #items="{item}">
          <div v-for="(items,i) in item.newsList " :key="i" class="py-2 fs-md d-flex">
            <span class="text-info">[{{items.categories[0]}}]</span>
            <span class="px-2">|</span>
            <span class="flex-1 text-dark-1 text-ellipse pr-2">{{items.title}}</span>
            <span class="text-grey-1 fs-sm">{{items.createdAt | date}}</span>
          </div>
        </template>
      </m-list-card>
      <m-card icon="hero" title="英雄列表"></m-card>
      <m-card icon="play" title="精彩视频"></m-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    filters:{
      date(val){
        return dayjs(val).format('MM/DD')
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
        },
        newsCats:[],
      }
    },
    methods:{
      async fetchNewsCats(){
        const res = await this.$http.get('news/list');
        this.newsCats = res.data;
        console.log(this.newsCats) 
      }
    },
    created(){
      this.fetchNewsCats();
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
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item{
    width: 25%;
    border-right:1px solid $border-color;
    &:nth-child(4) {
      border-left: none;
    }
  }
}
</style>