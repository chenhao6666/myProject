require.config({
    paths: {
        'jquery': './jquery',
        'http': '../js/httpclient'
    }
})

require(['jquery', 'http'], function ($, http) {
    $(function () {
        //ajax


        $('.btnbar').on('click', function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            var username = $('#username').val().trim();
            var password = $('#password').val().trim();
            if (!username || !password) {
                $.confirm({
                    title: '提示!',
                    content: '请填写用户名或密码'
                });
            } else {
                http.post('http://localhost:3030/login', {
                    username: $('#username').val().trim(),
                    password: $('#password').val().trim()
                }).then(function (res) {
                    console.log(res);

                    if (res.status) {
                        var per = res.data.per;
                        var data = res.data;
                        data = JSON.stringify(data);
                        console.log(data);

                        window.localStorage.setItem('Information', data)


                       

                        // console.log(per);
                        if (target.innerHTML == '收银系统' && per != 3 && 4) {
                            window.location.href = '../html/SinglePointSystem.html';
                        } else if (target.innerHTML == '后台系统' && per <= 4) {
                            window.location.href = '../html/index.html';
                        } else if (target.innerHTML == '订单系统' && per <= 4) {
                            window.location.href = '../html/OrderManageSystem.html';
                        } else {
                            $.confirm({
                                title: '提示！',
                                content: '权限不足！'
                            })
                        }
                    } else {
                        if (res.message === "Token empty!") {
                            $.confirm({
                                title: '提示',
                                content: '请登录'
                            })
                        } else {
                            $.confirm({
                                title: '提示',
                                content: '用户名或密码不正确！'
                            })
                        }
                    }
                })
            }
        })
    })

})