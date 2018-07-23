$(function () {
    // 获取用户名
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
    // if(username == undefined){
    //     window.location.href="../html/login.html";
    // }       

    var ws;
    ws = new WebSocket('ws://localhost:3031');
    ws.onmessage = function (msg) {
        var msgObj = JSON.parse(msg.data);
        console.log(msgObj);
        // $('<p></p>').text(`${msgObj.time}: ${msgObj.message}`).appendTo('#messageList');
    }
    $('.lei2').hide();
    $('.eat').on('click', function () {
        $('.eat').css('background', '#2c3338')
        $('.eat').css('color', '#3b88af')
        $('.drink').css('color', '#b7bec1')
        $('.drink').css('background', '#303c43')
        $('.lei2').show();
        $('.lei').hide();
    })
    $('.drink').on('click', function () {
        $('.drink').css('background', '#2c3338')
        $('.drink').css('color', '#3b88af')
        $('.eat').css('color', '#b7bec1')
        $('.eat').css('background', '#303c43')
        $('.lei').show();
        $('.lei2').hide();
    })
    var arr = [];
    var Goods = {}
    $.get('http://localhost:3030/index', function (data, err) {
        var data = data;
        var gos = data.map(function (item) {
            return '<li class="shangpin fl">' + '<p class ="xiao">' + item.goodsName + '</p>' + '<p class ="xiao price">' + item.price + '</p>' + '</li>'
        })
        $('.into').append(gos);
        var li = document.querySelectorAll('.shangpin');
        for (var i = 0; i < li.length; i++) {
            li[i].onclick = function () {
                Goods = {}
                $('.mask').show();
                var name = this.innerHTML;
                name = name.replace('<p class="xiao">', '')
                var name1 = name.replace('<p class="xiao price">', '')
                var name2 = name1.replace('<p>', '')
                var name3 = name2.replace('</p>', ',')
                var name4 = name3.replace('</p>', '')
                var arr = name4.split(',')
                var li1 = document.createElement('li')
                var span = document.createElement('span')
                var span2 = document.createElement('span')
                var dele = document.createElement('span')
                var sq = document.createElement('span')
                li1.append(span)
                li1.append(span2)
                li1.append(dele)
                li1.append(sq)
                dele.className = 'dele'
                li1.className = 'clearfix styl'
                span.className = 'fl teaname';
                span2.className = 'fr jiage';
                sq.className = 'sq';
                var text3 = document.createTextNode('-')
                var text2 = document.createTextNode('x')
                var text1 = document.createTextNode(1)
                span.append(arr[0])
                sq.append(text2, text1)
                dele.append(text3)
                span2.append(arr[1])
                $('.toappend')[0].append(li1)
                var span5 = document.createElement('span')
                var span6 = document.createElement('span')
                var span7 = document.createElement('span')
                span5.className = 'ice1'
                span6.className = 'sug'
                span7.className = 'ad'
                $('.styl').append(span5)
                $('.styl').append(span6)
                $('.styl').append(span7)
                Goods.name = $(this).text();
                var jiage = document.getElementsByClassName('jiage');
                var to = [];
                var total = 0
                for (var j = 0; j < jiage.length; j++) {
                    to.push(jiage[j].innerHTML)
                    total += to[j] * 1
                }
                $('.to').html(total)

            }
        }
    })
    var icee = document.getElementsByClassName('ice')[0];
    var icchl = icee.children;
    console.log(icchl)
    icchl[0].onclick = function () {
        this.style.background = '#ccc'
        icchl[1].style.background = '#35414a'
        icchl[2].style.background = '#35414a'
    }
    icchl[1].onclick = function () {
        this.style.background = '#ccc'
        icchl[0].style.background = '#35414a'
        icchl[2].style.background = '#35414a'
    }
    icchl[2].onclick = function () {
        this.style.background = '#ccc'
        icchl[1].style.background = '#35414a'
        icchl[0].style.background = '#35414a'
    }

    var ad3 = document.getElementsByClassName('add')[0]
    var adchl = ad3.children;
    adchl[0].onclick = function () {
        this.style.background = '#ccc'
        adchl[1].style.background = '#35414a'
        adchl[2].style.background = '#35414a'
    }
    adchl[1].onclick = function () {
        this.style.background = '#ccc'
        adchl[0].style.background = '#35414a'
        adchl[2].style.background = '#35414a'
    }
    adchl[2].onclick = function () {
        this.style.background = '#ccc'
        adchl[1].style.background = '#35414a'
        adchl[0].style.background = '#35414a'
    }
    var sug3 = document.getElementsByClassName('suger')[0]
    var sugchl = sug3.children;
    sugchl[0].onclick = function () {
        this.style.background = '#ccc'
        sugchl[1].style.background = '#35414a'
        sugchl[2].style.background = '#35414a'
    }
    sugchl[1].onclick = function () {
        this.style.background = '#ccc'
        sugchl[0].style.background = '#35414a'
        sugchl[2].style.background = '#35414a'
    }
    sugchl[2].onclick = function () {
        this.style.background = '#ccc'
        sugchl[1].style.background = '#35414a'
        sugchl[0].style.background = '#35414a'
    }
    $('.adds').on('click', function () {
        // $(this).css('border','2px solid #ccc')
        $(this).html();
        $(this).css('background', '#ccc');
        if ($(this).html().indexOf('糖') > -1) {
            var tex = document.createTextNode($(this).html())
            $('.sug').html(tex)
        }
        else if ($(this).html().indexOf('冰') > -1) {
            var tex1 = document.createTextNode($(this).html())
            $('.ice1').html(tex1)
        } else {
            var tex2 = document.createTextNode($(this).html())
            $('.ad').html(tex2)
        }
        Goods.suger = $('.sug').html();
       
        Goods.ice = $('.ice1').html();
        
        Goods.add = $('.ad').html();
        // if(Goods.suger == ''){
        //     Goods.suger = '正常';
        // }
        // if(Goods.ice == ''){
        //     Goods.ice = '正常';
        // }
        // if(Goods.add == ''){
        //     Goods.add = '无';
        // }
    })
    $('.no').on('click', function () {
        $('.adds').css('background', '#35414a')
        $('.mask').hide();
    })

    var num = 0;
    $('.en').on('click', function () {
        console.log('11',Goods.suger,Goods.ice,Goods.add);
        if(Goods.suger == undefined){
            Goods.suger = '正常';
        }
        if(Goods.ice == undefined){
            Goods.ice = '正常';
        }
        if(Goods.add == undefined){
            Goods.add = '无';
        }
        $('.adds').css('background', '#35414a')
        $('.mask').hide();
        $('.ad').attr('class', '')
        $('.ice1').attr('class', '')
        $('.sug').attr('class', '')
        $('.styl').attr('class', 'queren')
        $('.shul').html($('.queren').length);
        $('.dele').attr('class', 'del');

        arr.push(Goods);
        var de = document.getElementsByClassName('del')
        for (var i = 0; i < de.length; i++) {
            de[i].onclick = function () {
                var idx = document.getElementsByClassName('del');
                for (i = 0; i < idx.length; i++) {
                    idx[i].index = i;
                }
                arr.splice(this.index, 1);
                console.log(this.index)
                var jiage = document.getElementsByClassName('jiage');
                var to = [];
                var total = 0
                for (var j = 0; j < jiage.length; j++) {
                    to.push(jiage[j].innerHTML)
                    total += to[j] * 1
                }
                $('.to').html(total)
                var baba = $(this).parent();
                baba.remove();
                $('.shul').html($('.queren').length);
                var a = baba.children('.jiage').html() * 1
                total -= a
                $('.to').html(total)
                console.log(arr)
            }
        }



    })
    $('.end').on('click', function () {
        ws.onopen = function () {
        }

        ws.onclose = function () {
        }
        // var _date = new Date()
        var msgObj = {
            // time: _date.getHours() + ':' + _date.getMinutes(),
            message: "1"
        }
        ws.send(JSON.stringify(msgObj));
        var data = new Date;
        var year = data.getFullYear();
        var moth = data.getMonth() + 1;
        var hour = data.getHours()
        var min = data.getMinutes();
        if (moth < 10) {
            moth = '0' + moth;
        }
        if (min < 10) {
            min = '0' + data.getMinutes();
        }
        if (hour < 10) {
            hour = '0' + data.getHours();
        }
        var day = data.getDate();
        if (day < 10) {
            day = '0' + data.getDate();
        }
        num++
        switch (true) {
            case num < 10:
                num = '000' + num
                break;
            case num < 100:
                num = '00' + num
                break;
            case num < 1000:
                num = '0' + num
                break;
        }
        var ddh = year + '' + moth + '' + day + num;
        var spann = document.createElement('span')
        spann.className = 'dingdanhao'
        var t = document.createTextNode(ddh)
        spann.append(t)
        $('.queren').append(spann);
        // console.log(arr)
        var str = ''
        arr.forEach(function (item) {
            // return item+'|'
            str += JSON.stringify(item) + '|'
            // console.log(item)
        })
        arr = []
        var date1 = year + '/' + moth + '/' + day + '/' + hour + ':' + min
        $('.shul').html(0);
        $.post(
            'http://localhost:3030/dingdan',
            { OrderId: ddh, Goods: str, OrderPrice: $('.to').html(), Date: date1 },
            function (res) {
                console.log(res)
            })
        $('.queren').remove();
        $('.to').html('结算成功')
    })


})