/**
 * Created by cqw on 2017/3/12.
 */
$(function () {
    //轮播图
   banner();


    //产品导航
    initTab();
});
function banner(){
    //获取dom元素
    var pointsBox=$('.carousel-indicators');
    var imageBox=$('.carousel-inner');

    //数据
    var data=[
        {
            pcUrl:'images/slide_01_2000x410.jpg',
            mSrc:'images/slide_01_640x340.jpg'
        },
        {
            pcUrl:'images/slide_02_2000x410.jpg',
            mSrc:'images/slide_02_640x340.jpg'
        },
        {
            pcUrl:'images/slide_03_2000x410.jpg',
            mSrc:'images/slide_03_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mSrc:'images/slide_04_640x340.jpg'
        }
    ];


    //页面渲染
    function render(){
        //根据浏览器宽度渲染不同元素
        var width=$(window).width();
        var isMobile=width<768?true:false;
        //调用.template,返回值是模板函数
        var pointFunc= _.template($('#point').html());
        var imagesFunc= _.template($('#images').html());
        //调用模板函数,传入数据，返回的是html格式字符串
        var pointHtml=pointFunc({list:data});
        var imageHtml=imagesFunc({model:data,isM:isMobile});
        //字符串加入到父元素中
        pointsBox.html(pointHtml);
        imageBox.html(imageHtml);
    }
    render();
    //根据屏幕大小渲染页面
    $(window).on('resize', function () {
        //随屏幕的大小实时渲染页面
        render();
    })


    //移动端滑动切换
    var startX=0;
    var distance=0;
    var isMove=false;
    $('.wjs_banner').on('touchstart', function (e) {
        //获取原生事件的event对象
        startX= e.originalEvent.touches[0].clientX;

    }).on('touchmove', function (e) {
        var moveX= e.originalEvent.touches[0].clientX;
        distance=moveX-startX;
        isMove=true;
    }).on('touchend', function (e) {
        if(isMove&&Math.abs(distance)>50){
            if(distance>0){
                //右滑，显示上一张
                $('#carousel-example-generic').carousel('prev');
            }else{
                $('#carousel-example-generic').carousel('next');
            }
        }
        //重置
        isMove=false;
        distance=0;
        startX=0;
    });

}


    //产品导航栏滑动效果
function initTab(){
        //获取元素
        var tabsBox=$('.pro_navTabs');
        var ulBox=tabsBox.find("ul");
        var tabs=ulBox.find("li");
        //计算宽度
        var width=0;
        //获取页签宽度
        tabs.each(function () {
            //包含外边距
            var childWidth=$(this).outerWidth(true);

            width+=childWidth;
        });
        ulBox.width(width);
        /*初始化插件*/
        new IScroll('.pro_navTabs',
            {
                scrollX:true,
                scrollY:false
            })

    }


