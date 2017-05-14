$(function () {
    console.log('首页');
    $('#submit').click(function () {
        var name = $('#name').val();
        if (name === '') {
            alert('请输入名称')
            return;
        }
        var param = {
            name: name
        };
        location.hash = vipspa.stringify('contact', param);
    });

    $('#submit1').click(function () {
        var tel = $('#telno').val();
        console.log('tel=', tel);
        if (tel === '') {
            alert('请输入手机号码')
            return;
        }

        var msg = {
            id: "home_content",
            content: {
                tel: tel
            }
        }
        vipspa.setMessage(msg); // 保存消息
        location.hash = 'content';
    })
})