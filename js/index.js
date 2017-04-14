/**
 * Created by cqw on 2017/3/12.
 */
$(function () {
    //�ֲ�ͼ
   banner();


    //��Ʒ����
    initTab();
});
function banner(){
    //��ȡdomԪ��
    var pointsBox=$('.carousel-indicators');
    var imageBox=$('.carousel-inner');

    //����
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


    //ҳ����Ⱦ
    function render(){
        //��������������Ⱦ��ͬԪ��
        var width=$(window).width();
        var isMobile=width<768?true:false;
        //����.template,����ֵ��ģ�庯��
        var pointFunc= _.template($('#point').html());
        var imagesFunc= _.template($('#images').html());
        //����ģ�庯��,�������ݣ����ص���html��ʽ�ַ���
        var pointHtml=pointFunc({list:data});
        var imageHtml=imagesFunc({model:data,isM:isMobile});
        //�ַ������뵽��Ԫ����
        pointsBox.html(pointHtml);
        imageBox.html(imageHtml);
    }
    render();
    //������Ļ��С��Ⱦҳ��
    $(window).on('resize', function () {
        //����Ļ�Ĵ�Сʵʱ��Ⱦҳ��
        render();
    })


    //�ƶ��˻����л�
    var startX=0;
    var distance=0;
    var isMove=false;
    $('.wjs_banner').on('touchstart', function (e) {
        //��ȡԭ���¼���event����
        startX= e.originalEvent.touches[0].clientX;

    }).on('touchmove', function (e) {
        var moveX= e.originalEvent.touches[0].clientX;
        distance=moveX-startX;
        isMove=true;
    }).on('touchend', function (e) {
        if(isMove&&Math.abs(distance)>50){
            if(distance>0){
                //�һ�����ʾ��һ��
                $('#carousel-example-generic').carousel('prev');
            }else{
                $('#carousel-example-generic').carousel('next');
            }
        }
        //����
        isMove=false;
        distance=0;
        startX=0;
    });

}


    //��Ʒ����������Ч��
function initTab(){
        //��ȡԪ��
        var tabsBox=$('.pro_navTabs');
        var ulBox=tabsBox.find("ul");
        var tabs=ulBox.find("li");
        //������
        var width=0;
        //��ȡҳǩ���
        tabs.each(function () {
            //������߾�
            var childWidth=$(this).outerWidth(true);

            width+=childWidth;
        });
        ulBox.width(width);
        /*��ʼ�����*/
        new IScroll('.pro_navTabs',
            {
                scrollX:true,
                scrollY:false
            })

    }


