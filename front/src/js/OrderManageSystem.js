require.config({
    paths: {
        'jquery': '../../assets/jquery-3.3.1',
        'http': './httpclient'
    }
})

require(['jquery', 'http'], function ($, http) {
    $(function () {

        // 获取username
        // var username;
        // var user = window.location.href.indexOf('?name=');
        // if (user < 0) {
        //     console.log('-1');
        // }else{
        //     //decodeURI解决中文乱码问题
        //     username = decodeURI(window.location.href.substring(user+6));
        // }
        // console.log('username',username);

        // $('#username').text(username);
        // if(username == undefined){
        //     window.location.href="../html/login.html";
        // }       
        //存放管理员名
        // var url = window.location.href;
        // url1 = (url.split('?')[1]).split('=')[1];
        // console.log(url1);
        // $.ajax({
        //     url: 'http://localhost:3030/users',
        //     success: function (res) {
        //         res.data.forEach(item => {
        //             if (url1 == item.index) {
        //                 document.getElementById('username').innerHTML = item.name;
        //             }
        //         });
        //     }
        // })

        var username = JSON.parse(window.localStorage.getItem('Information'));
        if (username) {
            document.getElementById('username').innerHTML = username.name;
            $('.getOut').on('click', function () {
                window.localStorage.removeItem('Information')
                // window.localStorage.clear()
                window.location.href = './login.html';
            })
        } else {
            alert('请先登录');
            window.location.href = './login.html';
        }

        function getData() {
            $.post(
                'http://localhost:3030/orderList', {
                    orderId: ''
                },
                function (res) {
                    // console.log('res.data',res.data);
                    showOrder(res.data);
                }
            )
        }
        var msgObj;
        var ws;
        ws = new WebSocket('ws://localhost:3031');
        ws.onmessage = function (msg) {
            msgObj = JSON.parse(msg.data);
            // console.log('msgObj.message',msgObj.message);
            getData();
        }

        // 数据写入Li
        function showOrder(data) {
            // console.log('data',data);
            $("#orderBox").children("li").remove();
            for (var i = 0; i < data.length; i++) {
                var orderId = data[i].OrderId;
                var orderDate = data[i].MakeDate;
                var goodsArr0 = data[i].salesGoods.slice(0, -1);
                // console.log('goodsArr0',goodsArr0);
                var goodsArr = goodsArr0.split('|');
                var goodsState = data[i].state;
                if (goodsState == 1) {
                    var btnClass = 'btn btn-success';
                    var btnValue = '交付';
                } else if (goodsState == 0) {
                    var btnClass = 'btn btn-primary';
                    var btnValue = '接单';
                }
                // console.log('goodsArr',goodsArr);
                var li = `
                <li>
                    <h3>Order:</h3><h3 class="oId">${orderId}</h3>
                    <span id="orderDate">
                        Date:${orderDate}
                    </span>
                    <input type="button" value="${btnValue}" id="tackOrder" class="${btnClass}">
                `;
                for (var a = 0; a < goodsArr.length; a++) {
                    var obj = eval('(' + goodsArr[a] + ')');
                    // console.log('obj',obj);
                    var p = `
                        <p>
                            <span>${obj.name}
                            </span>
                            <span>糖：${obj.suger}/ 
                            </span>
                            <span>冰：${obj.ice}/ 
                            </span>
                            <span>其他：${obj.add}
                            </span>
                        </p>
                    `;
                    li += p;
                }
                li += `</li>`;
                $('#orderBox').append(li);
            }
        }
        getData();
        $('#orderBox').on('click', function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            // console.log(target);
            // console.log($(target).hasClass('btn btn-primary'));

            // 判断点击的是哪个接单按钮
            if ($(target).hasClass('btn btn-primary') && $(target).val() == '接单') {
                $(target).removeClass('btn btn-primary');
                $(target).addClass('btn btn-success');
                $(target).val('交付');
                console.log('$(target).parent()', $($(target).parent()).children('h3')[1].innerHTML);
                var orderId = $($(target).parent()).children('h3')[1].innerHTML;
                $.post(
                    'http://localhost:3030/takeOrder', {
                        orderId: orderId,
                        username: username
                    },
                    function (res) {
                        console.log('res.data', res);
                        // showOrder(res.data);
                    }
                )
                ws.onopen = function () {}

                ws.onclose = function () {}
                var msgObj = {
                    message: orderId + 'state:1'
                }
                // console.log('msgObj', msgObj);
                ws.send(JSON.stringify(msgObj));
                //判断点击哪个交付订单
            } else if ($(target).hasClass('btn btn-success') && $(target).val() == '交付') {
                var orderId = $($(target).parent()).children('h3')[1].innerHTML;
                console.log('finishID', orderId);
                $.post(
                    'http://localhost:3030/finishOrder', {
                        orderId: orderId
                    },
                    function (res) {
                        console.log('res.data', res.data);
                        // getData();         
                    }
                )
                location.reload();
            }
        })
    })
})