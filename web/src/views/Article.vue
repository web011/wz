<template>
    <div class="page-article" v-if="model">
        <div class="d-flex py-3 px-2 border-bottm">
            <div class="iconfont icon-fanhui text-blue"></div>
            <strong class="flex-1 text-blue pl-2">
                {{model.title}}
            </strong>
            <div class="text-grey fs-xs">
                2020-07-10
            </div>
        </div>
        <div v-html="model.body" class="px-3 body"></div>
        <!-- <div class="px-3 py-3" style="border-top:1px solid #666;">
            <div class="d-flex ai-center">
                <i class="iconfont icon-fanhui text-blue"></i>
                <span class="text-blue fs-lg ml-1">相关咨询</span>
            </div>
            <div>
                <rout-link v-for="item in model.related" :key="item._id" :to="`/articles/${item._id}`"></rout-link>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    props:{
        id:{required:true}
    },
    data(){
        return {
            model:null,
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`articles/${this.id}`);
            this.model = res.data[0];
        }
    },
    created(){
        this.fetch();
    }
}
</script>
<style lang="scss">
.page-article{
    h2{
        width: 100%;
        height: 50px;
        text-align: center;
        padding: 0;
    }
    .icon-fanhui{
        font-size:1.6923rem;
    }
    .body{
        max-width: 100%;
        height: auto;
    }
    iframe{
        width: 100%;
        height: auto;
    }
    a{text-decoration: none;}
    ul{list-style-type: none;}
    ul>li{
        margin-bottom: 10px;
        width: 100%;
    }
}
</style>