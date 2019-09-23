const express=require('express');
const multer=require('multer');
let server=express();
server.listen(8080);
server.use(multer({dest:'./uploadPic/'}).any())
server.get('/tags', (req,res)=>{
    res.send(['首页','推荐','娱乐','体育','生活','家具','音乐','搞笑']);
});
server.post('/uploadPic',(req,res)=>{
    console.log(req.files);
    res.send("ok");
})