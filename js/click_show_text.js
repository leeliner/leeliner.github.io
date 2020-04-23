var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("暴富", "长高", "立业", "成家", "幸福", "进步", "快乐", "健康", "潇洒", "可爱", "", "独秀");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FFFFFF"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}