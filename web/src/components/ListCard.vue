<template>
    <m-card :icon="icon" :title="title">
        <div class="card-body pt-3">
            <div class="nav jc-between">
              <div class="nav-item" :class="{active:active == i}" v-for="(item ,i) of categories" :key="i" @click="active = i">
                <div class="nav-link">{{item.name}}</div>
              </div>
            </div>
            <div class="pt-3">
              <swiper ref="list" @slide-change="() => active = $refs.list.swiper.realIndex">
                <swiper-slide v-for="(item,i) in categories" :key="i">
                  <slot name="items" :item="item"></slot>
                </swiper-slide>
              </swiper>
            </div>
        </div>
      </m-card>
</template>
<script>
export default {
    props:{
        icon:{type:String,required:true},
        title:{type:String,required:true},
        categories:{type:Array,required:true}
    },
    data(){
        return {
            active:0
        }
    },
    
}
</script>