<template>
    <div class="login-container">
        <el-card header="请先登陆">
            <el-form @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>


<script>
export default {
    data(){
        return {
            model : {}
        }
    },
    methods:{
        async login(){
            const res = await this.$http.post('/api/login',this.model)
            // 关闭网页就没有了
            // sessionStorage.token = res.data.token
            // 地址一样就一直有
            localStorage.token = res.data.token
            this.$router.push('/');
            this.$message({
                type:'success',
                message:'登陆成功'
            })
        }
    },
    // created(){
    //     this.login();
    // }
}
</script>
<style>
  .login-container{
        width: 25rem;
        margin: 5rem auto;
    }
</style>