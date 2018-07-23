const db = require('../db/dbhelper');
const apiResult = require('../utils/apiResult.js')
const jwt = require('jsonwebtoken');
const url = require('url');

const mysql = require('../db/mysql')
module.exports = {
    register: (app) => {
        //登录路由
        app.post('/login', async (req, res) => {
            let data = {
                name: req.body.username,
                password: req.body.password
            }
            try {
                let result = await db.mysql.select('users', data);
                let secret = 'c-token';
                let token;
                if (result.length > 0) {
                    let token = jwt.sign({
                        name: req.body.username
                    }, secret, {
                        'expiresIn': 60 * 60 * 24
                    })
                    let dataset = {
                        name: result[0].name,
                        per: result[0].permission,
                        idx: result[0].index
                    }
                    res.send(apiResult(result.length > 0, dataset, token));
                } else {
                    res.send(apiResult(false));
                }
            } catch (error) {
                console.log(error);
                res.send(apiResult(false, error));
            }
        })

        //账务查询
        app.get('/orders', async (req, res) => {
            let result = await db.mysql.select_all_orders();
            res.send(apiResult(true, result));
        })


        // 用户查询
        app.get('/users', async (req, res) => {
            let data = await db.mysql.sl_select('users')
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        //用户名查询
        app.get('/usersname', async (req, res) => {

            let data = await db.mysql.sl_select('users')
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 用户按条件查询
        app.get('/user', async (req, res) => {
            let data = (url.parse(req.url, true).query).data;
            let datas = await db.mysql.sl_select_0('users', data)
            if (datas) {
                res.send(apiResult(true, datas));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 添加用户
        app.post('/adduser', async (req, res) => {
            let data = {
                username: req.body.username,
                name: req.body.name,
                password: req.body.password,
                permission: req.body.permission
            }
            let dataset = await db.mysql.sl_insert('users', data);
            if (dataset) {
                res.send(apiResult(true, dataset));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 删除用户
        app.post('/removeusers', async (req, res) => {
            // 前端传过来的name
            let name = req.body.name;
            let data = await db.mysql.sl_delete('users', name)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 更改用户
        app.post('/update', async (req, res) => {
            let name = req.body;
            let data = await db.mysql.sl_update('users', req.body)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 库存查询
        app.get('/stock', async (req, res) => {
            let result = await db.mysql.sl_select('stock')
            if (result) {
                res.send(apiResult(true, result));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        //账务查询所有订单
        app.get('/orders', async (req, res) => {
            let result = await db.mysql.select_all_orders();
            res.send(apiResult(true, result));
        })

        // 删除库存
        app.post('/remove', async (req, res) => {
            // 前端传过来的name
            let raw = req.body.raw;
            let data = await db.mysql.sl_delete_k('stock', raw)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 库存按条件查询
        app.get('/stock_0', async (req, res) => {
            let data = (url.parse(req.url, true).query).data;
            let datas = await db.mysql.sl_select_s('stock', data)
            if (datas) {
                res.send(apiResult(true, datas));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 更改库存
        app.post('/upstock', async (req, res) => {
            let name = req.body;
            let data = await db.mysql.sl_upstock('stock', req.body)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        // 添加库存
        app.post('/addstock', async (req, res) => {
            let data = {
                raw: req.body.raw,
                num: req.body.num,
                unit: req.body.unit,
            }
            let dataset = await db.mysql.sl_insert_addstock('stock', data);
            if (dataset) {
                res.send(apiResult(true, dataset));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })

        //制作师傅显示订单
        app.post('/orderList', async (req, res) => {
            let orderId0 = req.body.orderId
            let dataset = await db.mysql.satio_select_order(orderId0);
            if (dataset.length > 0) {
                // console.log('dataset',dataset);
                res.send(apiResult(true, dataset));
            }
        })

        // 制作师接单
        app.post('/takeOrder', async (req, res) => {
            // console.log('takeOrder', req.body);
            let orderId0 = req.body.orderId;
            let producer = req.body.username;
            // console.log('producer', producer);
            let dataset = await db.mysql.satio_takeOrder(orderId0, producer);
            if (dataset.length > 0) {
                // console.log('dataset',dataset);
                res.send(apiResult(true, dataset));
            }
        })

        //制作师完成订单
        app.post('/finishOrder', async (req, res) => {
            // console.log('finishOrder', req.body.orderId);
            let orderId0 = req.body.orderId
            let dataset = await db.mysql.satio_finishOrder(orderId0);
            // if(dataset.length > 0){
            //     console.log('dataset',dataset);
            //     // res.send(apiResult(true,dataset));
            // }
        })
         // 商品查询
        app.get('/sl_goods', async (req, res) => {
            let data = await db.mysql.sl_select_goods('goods')
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })
        // 删除商品
        app.post('/goods_remove', async (req, res) => {
            // 前端传过来的name
            let name = req.body.raw;
            let data = await db.mysql.sl_delete_goods('goods', name)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })
        // 商品按条件查询
        app.get('/goods_a', async (req, res) => {
            let data = (url.parse(req.url, true).query).id;
            let datas = await db.mysql.sl_select_goods_a('goods', data)
            if (datas) {
                res.send(apiResult(true, datas));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })
        // 更改商品
        app.post('/updategoods', async (req, res) => {
            let name = req.body;
            console.log(name)
            let data = await db.mysql.sl_update_goods('goods', req.body)
            if (data) {
                res.send(apiResult(true, data));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })
        // 添加商品
        app.post('/add_goods', async (req, res) => {
            let data = {
                id: req.body.id,
                goodsname: req.body.goodsname,
                price: req.body.price,
            }
            console.log(data)
            let dataset = await db.mysql.sl_insert_goods('goods', data);
            if (dataset) {
                res.send(apiResult(true, dataset));
            } else {
                res.send(apiResult(false, null, 'user exists'));
            }
        })
    }
}