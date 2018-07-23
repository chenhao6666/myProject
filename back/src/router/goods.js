const db = require('../../../db/dbhelper');

module.exports = {
    gii: (app) => {
        app.get('/index', async (req, res) => {
            let sql = `select * from goods`;
            let data = await db.select(sql);
            res.send(data);
        })
        app.post('/dingdan', async (req, res) => {
            let data1 = {
                OrderId: req.body.OrderId,
                Goods: req.body.Goods,
                OrderPrice: req.body.OrderPrice,
                Date: req.body.Date
            }
            //  console.log('data1',data1);
            let sql = `insert into orders(OrderId,salesGoods,MakeDate,producer,Seller,state,OrderPrice)
            values('${data1.OrderId}','${data1.Goods}','${data1.Date}','null',5,0,${data1.OrderPrice})`;
            // console.log('sql',sql);
            let data = await db.insert(sql);
            res.send('asdasdcc');
        })
    }
}