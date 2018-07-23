//统一转化返回到前端的数据结构
module.exports = function (_status, _data, _message) {
    return {status: _status, data: _data, message: _message};
}