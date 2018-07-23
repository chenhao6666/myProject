require.config({
    paths: {
        'jquery': './jquery.js'
    }
})

define(['jquery'], function ($) {

    return {
        get: function (_url, _data) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: _url,
                    data: _data || {},
                    success: function (res) {
                        resolve(res)
                    },
                    error: function (error) {
                        reject(error)
                    }
                })
            })
        },
        post: function (_url, _data) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: _url,
                    data: _data || {},
                    type: 'post',
                    success: function (res) {
                        resolve(res)
                    },
                    error: function (error) {
                        reject(error)
                    }
                })
            })
        }
    }
})