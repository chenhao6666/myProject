const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '666milkytea',
    useConnectionPooling: true
})

connection.connect(function (err) {
    if (err) {
        return console.log(err.massage);
    }
})

module.exports = {
    select: (sql) => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                resolve(results);
            // connection.end();
            });
        })
    },
    insert:(sql)=>{
        return new Promise((resolve,reject)=>{
            connection.query(sql,(err,res)=>{
                if(err){
                    return console.error(err.massage)
                }
                resolve(res)
            })
       
        })
    }
}