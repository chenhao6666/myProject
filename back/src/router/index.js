const express = require('express')
const bparser = require('body-parser')
const path = require('path')
const jwt = require('jsonwebtoken')
const url = require('url')
const apiResult = require('../utils/apiResult')

const app = express();

//跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,auth");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") {
        res.sendStatus(200) /*让options请求快速返回*/
    } else {
        next();
    }
});





//创建不过滤路由的数组
// const filterList = ['/login', '/orders', '/stock', '/users', '/adduser' , '/usersname','/index']
//express全局过滤
// app.use((req, res, next) => {
//     let pathname = url.parse(req.url, true).pathname;
//     if (filterList.includes(pathname)) {
//         next();
//     } else {
//         //验证token 并返回结果
//         let token = req.headers['auth'];
//         if (!token) {
//             res.send(apiResult(false, null, 'Token empty!'));
//         } else {
//             jwt.verify(token, 'c-token', async (err, result) => {
//                 if (err) {
//                     console.log(err);

//                     res.send(apiResult(false, null, err));
//                 } else {
//                     next();
//                 }
//             })
//         }

//     }
// })
// 全局过滤  post请求
app.use(bparser.urlencoded({
    extended: false
}))
// 访问静态资源
app.use(express.static(path.join(__dirname, '../../')))

const users = require('./users.js')
const goods = require('./goods.js');
//暴露方法和接口
module.exports = {
    start: (_port) => {
        users.register(app);
        goods.gii(app);
        
        app.listen(_port || 3030, () => {
            console.log(`server is running http://localhost:${_port || 3030}`);
        });
    }
}