            //色領域にマウスカーソルがホバーしているなら吹き出しを表示する
            $('.sho_1').hover(
                function() {
                $("#popup_sho_1").show();},
                function() {
                $("#popup_sho_1").hide();}
            );

            $('.sho_2').hover(
                function() {
                $("#popup_sho_2").show();},
                function() {
                $("#popup_sho_2").hide();}
            );

            $('.chu_1').hover(
                function() {
                $("#popup_chu_1").show();},
                function() {
                $("#popup_chu_1").hide();}
            );

            $('.chu_2').hover(
                function() {
                $("#popup_chu_2").show();},
                function() {
                $("#popup_chu_2").hide();}
            );

            $('.ko_1').hover(
                function() {
                $("#popup_ko_1").show();},
                function() {
                $("#popup_ko_1").hide();}
            );

            $('.ko_2').hover(
                function() {
                $("#popup_ko_2").show();},
                function() {
                $("#popup_ko_2").hide();}
            );

            $('.dai_2').hover(
                function() {
                $("#popup_dai_2").show();},
                function() {
                $("#popup_dai_2").hide();}
            );

            $('.dai_3').hover(
                function() {
                $("#popup_dai_3").show();},
                function() {
                $("#popup_dai_3").hide();}
            );

            $('.dai_4').hover(
                function() {
                $("#popup_dai_4").show();},
                function() {
                $("#popup_dai_4").hide();}
            );

            $(function() {
                $('#image').hover(
                    function() { //色領域にマウスカーソルがホバーしているとき開始
                    function MouseMoveFunc(e) { //マウスカーソルが移動するたびに実行する関数

                        // マウスカーソルの座標を取得
                        var mouse_x = e.clientX + 5; //マウスカーソルのX座標 5px右へ調整
                        var mouse_y = $(window).scrollTop() + e.clientY + 5; //マウスカーソルのY座標 現在のスクロール位置＋5px下へ調整

                        // 吹き出しの位置座標を取得したマウスカーソルの座標に変換
                        $("#popup").css({
                            "display":"inline-block",
                            "position": "absolute",
                            "left": mouse_x,
                            "top": mouse_y
                        });
                    }

                    if (document.addEventListener) {
                        document.addEventListener("mousemove", MouseMoveFunc);
                    } else if (document.attachEvent) {
                        document.attachEvent("onmousemove", MouseMoveFunc);
                    }
                });
            });
