<template>
    <div>
        <h1>{{id ? '编辑' : '新建'}}物品</h1>
        <el-form label-width="120px" @submit.native.prevent="save()">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="装备图片url">
                <el-input v-model="model.icon"></el-input>
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
        }
    },
    methods:{
        async save(){
            let res;console.log(res)
            if(this.id){
                res = await this.$http.put('/api/rest/items/'+this.id,this.model);
            }else{
                res = await this.$http.post('/api/rest/items',this.model);
            }
            this.$router.push('/items/list')
            this.$message({
                type:'success',
                message:"保存成功"
            })
        },
        async fetch(){
            const res = await this.$http.get('/api/rest/items/'+this.id);
            this.model = res.data
        },
        afterUpload(res){
            this.$set(this.model,'icon',res.url);
            this.model.icon = res.url;
            console.log(this.model.icon)
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-icon-plus:before{
      margin-top: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>