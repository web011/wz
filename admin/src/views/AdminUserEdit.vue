<template>
    <div>
        <h1>{{id ? '编辑' : '新建'}}管理员</h1>
        <el-form label-width="120px" @submit.native.prevent="save()">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            model : {},
            parent : [],
        }
    },
    methods:{
        async save(){
            let res;console.log(res)
            if(this.id){
                res = await this.$http.put('/api/rest/adminusers/'+this.id,this.model);
            }else{
                res = await this.$http.post('/api/rest/adminusers',this.model);
            }
            this.$router.push('/admin_users/list')
            this.$message({
                type:'success',
                message:"保存成功"
            })
        },
        async fetch(){
            const res = await this.$http.get('/api/rest/adminusers/'+this.id);
            // console.log(res)
            this.model = res.data
        },
        async fetchParents(){
            const res = await this.$http.get('/api/rest/adminusers');
            // console.log(res)
            this.parent = res.data
        },
    },
    created(){
        this.fetchParents();
        this.id && this.fetch()
    }
}
</script>
<style lang="stylus">

</style>