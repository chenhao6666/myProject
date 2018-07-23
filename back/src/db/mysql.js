var mysql = require('mysql');

module.exports = {
    select(users, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var _selSql = `select * from ${users} where username = '${data.name}' && password = '${data.password}'`;
            connection.query(_selSql, function (err, result) {

                if (err) {
                    // console.log('[SELECT ERROR] - ', err.message);
                    reject(err)
                } else {
                    resolve(result)
                }
            });
            connection.end();
        })
    },

    // 刷新未完成订单
    satio_select_order(orderId) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = 'select * from orders';
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        });
    },

    select_all_orders() {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            // var userGetSql='select * from orders';
            var userGetSql = ' select * from orders union select * from ordersfinsh';

            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        });
    },

    // 制作师接单
    satio_takeOrder(orderId) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var tackOrderSql = 'update orders set state = 1 where orderId = ' + orderId;
            connection.query(tackOrderSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        });
    },

    // 制作师交付订单
    satio_finishOrder(orderId) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            // 把记录复制到orderfinsh表
            var finOrSql1 = `
                insert into ordersfinsh select * from orders where orderId ='${orderId}';
                
            `;
            connection.query(finOrSql1, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            // 把记录在原来的orders表中删除
            var finOrSql2 = `delete from orders where orderId = '${orderId}';`;
            connection.query(finOrSql2, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            // 修改订单状态
            var finOrSql3 = `update  ordersfinish set state = 3 where orderId = '${orderId}';`;
            connection.query(finOrSql3, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
        });
    },

    //查
    sl_select(biaoming) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = 'select * from ' + biaoming;
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 按条件查询
    sl_select_0(biaoming, data) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `select * from ${biaoming} where username='${data}'`;
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    //增
    sl_insert(biaoming, data) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `insert into ${biaoming}(username,name,password,permission)values("${data.username}","${data.name}","${data.password}",${data.permission})`;

            console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 删
    sl_delete(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `delete from ${biaoming} where name = '${data}'`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 库存删
    sl_delete_k(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `delete from ${biaoming} where Raw = '${data}'`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 用户修改
    sl_update(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `update ${biaoming} set username='${data.username}',name='${data.name}',password='${data.password}',permission=${data.permission} where username='${data.up}'`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 库存按条件查询
    sl_select_s(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `select * from ${biaoming} where Raw='${data}'`;
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },

    // 库存改
    sl_upstock(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `update ${biaoming} set Raw='${data.username}',Number=${data.name} where Raw='${data.up}'`;
            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
    // 添加库存
    sl_insert_addstock(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `insert into ${biaoming}(Raw,Number,Unit)values("${data.raw}",${data.num},"${data.unit}")`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
    // 商品查询
    sl_select_goods(biaoming) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = 'select * from ' + biaoming;
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
    // 商品删
    sl_delete_goods(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `delete from ${biaoming} where goodsId = '${data}'`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
    // 商品按条件查询
    sl_select_goods_a(biaoming, data) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '3306',
            database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `select * from ${biaoming} where goodsId='${data}'`;
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    reject('error', err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
    // 商品修改
    sl_update_goods(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `update ${biaoming} set goodsId='${data.goodsid}',goodsName='${data.goodsname}',price='${data.price}' where goodsId='${data.up}'`;

            // console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    },
     // 添加商品
    sl_insert_goods(biaoming, data) {
        var connection = mysql.createConnection({　　
            host: 'localhost',
            　　user: 'root',
            　　password: 'root',
            　　port: '3306',
            　　database: '666milkytea',
        });
        connection.connect();
        return new Promise((resolve, reject) => {
            var userGetSql = `insert into ${biaoming}(goodsId,goodsName,price)values("${data.id}","${data.goodsname}","${data.price}")`;
            console.log(userGetSql);
            connection.query(userGetSql, function (err, result) {　　
                if (err) {　　
                    reject('error' + err.message);
                } else {
                    resolve(result);
                }
            });
            connection.end();
        })
    }
}