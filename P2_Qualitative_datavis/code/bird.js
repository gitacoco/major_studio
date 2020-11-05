var $fragment = $('.fragment')
        var $frame = $('.frame')
        var $result = $('.result')

        //创建打乱顺序的图片文件，思路：使用 underscore.js 的 _.shuffle 方法
        var numRange = _.range(1, 13)
        var randomNum = _.shuffle(numRange)

        for (var fragment_id of randomNum) {
            var $piece = $(`<div class="piece" id="${fragment_id}"></div>`)
            $fragment.append($piece)
            $piece.css("background-image", `url("http://res.cform.cn/unzip/1581566323088_1137315517898494/${fragment_id}.png")`)
            //$piece.appendTo($fragment)
        }

        //实现来回拖动（实际上是点击）的功能
        $('.piece').click(function () {
            var $this = $(this)
            if ($this.hasClass("inside")) {
                $this.appendTo($fragment).toggleClass("inside")
            } else {
                $this.appendTo($frame).toggleClass("inside")
            }

            //使用 if 判断来验证最后的结果是否正确
            //var $piece_inside = $('.inside')
            if ($('.inside').length == 12) {
                var piece_total = []
                $frame.children().each(function () {
                    piece_total.push($(this).attr("id"))
                })
                if (piece_total.join() == "1,2,3,4,5,6,7,8,9,10,11,12") {
                    $result.text("恭喜骨头，拼对啦")
                } else {
                    $result.text("再接再厉骨头，失败乃成功之母！")
                }
            } else {
                $result.text("")
            }
        })