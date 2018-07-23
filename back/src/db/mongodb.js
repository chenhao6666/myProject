const mongodb = require('mongodb');
const mc = mongodb.MongoClient;
var db;

mc.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
}, (error, _db) => {
    db = _db.db('gz1803');
});

module.exports = {
    //查询
    select(_collection, _condition = {}) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).find(_condition).toArray().then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    //添加
    insert(_collection, _data) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).insert(_data).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    //修改
    update(_collection, _condition, _data) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).update(_condition, _data).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },

    //删除
    delete() {}
}