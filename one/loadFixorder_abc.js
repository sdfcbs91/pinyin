// ���fixorder_abc.dat��ʽ��js
loadFixorder = {
    src: "fixorder_abc.dat",
    //[aeo]����ɾ��,����������ĸɾ��
    exception:"AEO"
}

loadFixorder.createIframe = function () {
    var src = this.src,
        $iframe = $("<iframe src='" + this.src + "' width='500' height='500'></iframe>").appendTo("body"),
        iframe = $iframe[0];
    if (iframe.attachEvent) {
        iframe.attachEvent('onload', function () {
            loadFixorder.loadIframe(iframe, src);
        });
    } else {
        iframe.onload = function () {
            loadFixorder.loadIframe(iframe,src);
        }
    }
    return $iframe;
}
//��ȡ�ļ�
loadFixorder.loadIframe = function (iframe, errorSrc) {
    try {
        if (!iframe.contentWindow.document) return;
    } catch (e) {
        //�������ʾ,��ô�����Э�鲻������ʸ��ļ�
        console.log($(iframe).html());
        return;
    }

    var $content = $(iframe.contentWindow.document),
    val = $content.find("body pre").html();
    //Ӣ��+��Ӣ��
    var reg1 = /\w+\W+/g,
    reg2 = /\w+/;
    var arr1 = val.match(reg1),
    re = [],
    reStr = '[';

    var matchArr = function (str) {
        var arr = str.split(reg2),
            name = str.match(reg2),
            temp = [];
        name[0] = name[0][0].toUpperCase() + name[0].substring(1).toLowerCase();
        if (name[0].length === 1) {
            if (loadFixorder.exception.indexOf(name[0]) > -1) {
                temp.push($.trim(name[0]));
                temp.push($.trim(arr[1]));
                re.push(temp);
                reStr += '["' + $.trim(name[0]) + '",';
                reStr += '"' + arr[1].replace(/\s/g,"") + '"],';
            }
        } else {
            temp.push($.trim(name[0]));
            temp.push($.trim(arr[1]));
            re.push(temp);
            reStr += '["' + $.trim(name[0]) + '",';
            reStr += '"' + arr[1].replace(/\s/g, "") + '"],';
        }
    }
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].replace("\n", "");
        matchArr(arr1[i])
    }
    reStr += ']';
    var $text = $("<textarea width='500' height='500'></textarea>").appendTo("body");
    console.log(re)
    $text.html(reStr);
}
