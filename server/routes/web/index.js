const Article = require('../../models/Article')

module.exports = app =>{
    const router = require('express').Router()
    const monggose = require('mongoose')
    const Category = monggose.model('Category')
    // const Articl = monggose.model('Article')
    router.get('/news/init',async (req,res) => {
        // const parent = await Category.findOne({
        //     name:'新闻分类'
        // });
        // console.log(parent)
        // const cats = await Category.find().where({parent:parent}).lean();
        // console.log(cats)
        const rawNews =  ["7月9日正式服版本更新公告", "7月9日版本更新异常问题说明", "英雄平衡性调整丨鬼谷子加强，玄策/干将等调优", "新皮肤爆料丨一念通天，神魔无惧，李信世冠新装即将登场！", "S20赛季开启，缤纷好礼等你来拿", "英雄调整情报丨鬼谷子加强，玄策/干将优化", "新皮肤爆料丨一念通天，神魔无惧，李信世冠新装即将登场！", "正式服预告⑥ | 新展示背景、新地图氛围，三分奇兵即将上线", "正式服预告⑤ | 体验大升级！背包轻松整理，开黑预约无阻", "【星元部件爆料】公孙离-觅星灵兔", "【已开服】7月9日正式服“三分奇兵”版本更新公告", "7月9日版本更新异常问题说明", "英雄平衡性调整丨鬼谷子加强，玄策/干将等调优", "7月8日外挂专项打击公告", "7月8日净化游戏环境声明及处罚公告", "S20赛季开启，缤纷好礼等你来拿", "【赛季冲刺，新版本探秘】活动公告", "抢先服更新  S20赛季来袭", "【赛季冲刺，新版本探秘】活动FAQ", "赛季冲刺有福利，挑战领好礼", "2020年王者荣耀世界冠军杯小组赛赛程出炉", "2020年王者荣耀世界冠军杯第二轮选拔赛 加赛及抽签规则", "世冠小组赛抽签仪式6月28日现场直播，小组赛之战一触即发！", "2020年王者荣耀世界冠军杯（KCC）赛事规则", "无惧挑战向阳而生，TS冠军之夜今日18:00惊喜来袭"]
        const arr = ["公告","赛事","新闻","活动"]
        const newList = rawNews.map(title =>{
            const randmCats = arr.slice(0).sort((a,b) => Math.random() - 0.5);
            
            return {
                categories:randmCats.slice(0,1),
                title:title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newList)
        res.send(newList)
    })
    router.get('/news/list',async (req,res) => {
        const A = await Article.find();
        A.unshift({
            name:'热门',
            newsList:await Article.find().limit(25).lean()
        })
        const arr = [{},{},{},{},{}];
        function fn(){
            var a = 0;
            var b = 5;
            return function(){
                for(var i = 0;i<arr.length;i++){
                    var list = ['热门','新闻','公告','活动','赛事']
                    arr[i].name = list[i],
                    arr[i].newsList = A[0].newsList.slice(a,b);
                    a+=5;
                    b+=5;
                }
            }
        }
        var fns = fn();
        fns();
        res.send(arr)
    })
    app.use('/web/api',router)
}