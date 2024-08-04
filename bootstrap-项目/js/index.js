/*
使用两张图片设置轮播图
$(function () {
    $ (window).on("resize",function () {
        let clientW = $ (window).width();
        // console.log(clientW);
        // 设置临界值
        let = isShowBigImage = clientW >= 800;

        // 获取所有的item

        let $allItems = $("#lk-carousel .item");
        // 遍历
        $allItems.each(function (index,item){

            // 取出图片路径
            let src = isShowBigImage ? $(item).data("lg-img"):$(item).data("sm-img");
            let imgUrl = 'url("' + src + '")';
            // 设置背景
            $(item).css({
                backgroundImage:imgUrl
            });

            // 设置img标签
            if(!isShowBigImage){
                let $img ="<img src='" + src+ "'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        });
    });
    $(window).trigger("resize");
});
*/

// const exampleEl = document.getElementById('example')
// const tooltip = new bootstrap.Tooltip(exampleEl, options)
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))