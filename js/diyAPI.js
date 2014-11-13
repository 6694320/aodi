// 底部导航点击跳转
function gopage(page){
    $.fn.fullpage.moveTo(page,0);
}
// 延迟加载
function lazyLoadImg(container){
    var imgSelect=container+" img";
    $(imgSelect).each(function(index,img){
        var lazySrc=$(img).attr('lazy-img');
        if(lazySrc){
            lazySrc=audiAPI.StaticURL+lazySrc+audiAPI.random();
            $(img).attr('src',lazySrc);
            $(img).attr('lazy-img','');
        }
    });
}
// 弹框
function alertWin(w,h,tex) {
    var i = $("#content").width(),
        s = $("#content").height(),
        o = document.createElement("div");
    o.id = "backgroun_bg", o.style.cssText = "position:absolute;left:0px;top:0px;width:" + i + "px;height:" + s + "px;filter:Alpha(Opacity=30);opacity:0.3;background-color:#000000;z-index:99999;", document.body.appendChild(o);
    $(".pop_box").css({"width":w+"px","height":h+"px"})
    center($(".pop_box"));
    $(".close").on("touchstart click",function(ev){$(".pop_box").hide();$("#backgroun_bg").remove();ev.preventDefault();})
}
function center(e) {
    var t = $(window).width(),
        n = $(window).height(),
        r = $(document).scrollTop(),
        i = (t - e.width()) / 2, 
                 s = (n - e.height()) / 2 + r;
    e.css({
        left: i + "px",
        top: s + "px"
    }),$(window).resize(function() {
        t = $(window).width(), n = $(window).height(), r = $(document).scrollTop(), i = (t - e.width()) / 2, s = (n - e.height()) / 2 + r, e.css({
            left: i + "px",
            top: s + "px"
        })
    }), $(window).scroll(function() {
        t = $(window).width(), n = $(window).height(), r = $(document).scrollTop(), i = (t - e.width()) / 2, s = (n - e.height()) / 2 + r, e.css({
            left: i + "px",
            top: s + "px"
        })
    }),e.show()
}

// 自适应
function onresize(){
    var webWidth=1600;
    var webHeight=700;
    var section2ContentH=598;
    var section4CarW=1159;
    var section4CarH=558;
    var section7ContentW=1400;
    var section20ContainerW=963;
    var section20ContainerH=423;

    var documentWidth = parseInt(document.documentElement.clientWidth);
    var documentHeight = parseInt(document.documentElement.clientHeight);
    var sw=documentWidth/webWidth;
    var sh=documentHeight/webHeight;
    var scaleToMax=(sw>sh)?sw:sh;
    var scaleToMin=(sw<sh)?sw:sh;
    var widthTo=scaleToMax*webWidth;
    var heightTo=scaleToMax*webHeight;

    $(".adaptive").css({width:widthTo,height:heightTo,left:(documentWidth-widthTo)/2,top:(documentHeight-heightTo)/2,position:"absolute"});
    $("#content").css({width:documentWidth,height:documentHeight});
}

$(document).ready(function() {
// 弹框调用
$(".pop").on("click",function(ev){alertWin("730","406");$("#popVedio").attr("src",$(this).attr("data-htmlVedio")),ev.preventDefault();});

onresize();

// 置灰
$(".graybox div").hover(function(){
    $(this).siblings().addClass("gray")
},function(){
     $(this).siblings().removeClass("gray");
});

    $(".bottomNav").hide();
    $('#content').fullpage({
        //Navigation
        anchors:['page1','page2','page3','page4', 'page5','page6','page7','page8','page9', 'page10','page11','page12','page13','page14','page15', 'page16','page17','page18','page19','page20', 'page21','page22','page23','page24','page25', 'page26','page27','page28','page29','page30', 'page31','page32','page33','page34','page35','page36'],
        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        autoScrolling: true,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        // normalScrollElements:'.page17,.page17B',
        scrollOverflow: false,
        touchSensitivity:2,
        normalScrollElementTouchThreshold:5,
        fixedElements: '#header,#footer',
        responsive: 0,
        //Custom selectors
        sectionSelector: '.same',
        // slideSelector: '.slide',
        //events
        onLeave: function(index, nextIndex, direction){
            var mTop=$("#content div").height()*16;
            // page 17 鼠标滚动事件
            /*if(nextIndex==17){
                $.fn.fullpage.setAllowScrolling(false);
                var delta=null;
                var scrollFunc = function (e) {
                    var direct = 0;
                    e = e || window.event;
                    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
                        if (e.wheelDelta > 0) { //当滑轮向上滚动时
                            delta="Up";
                            return false
                        }
                        if (e.wheelDelta < 0) { //当滑轮向下滚动时
                            delta="Down"
                            return false
                        }
                    } else if (e.detail) {  //Firefox滑轮事件
                        if (e.detail> 0) { //当滑轮向上滚动时

                            delta="Up";
                            return false
                        }
                        if (e.detail< 0) { //当滑轮向下滚动时
                            delta="Down"
                            return false
                        }
                    } 
                }
                $("body").bind('mousewheel', function(event) {
                    window.onmousewheel=document.onmousewheel=scrollFunc;
                    if(delta=="Up"&& $(".page17box1").css("display")=="none"){
                        $(".page17box1").show();
                        $(".page17box1 div").css({"opacity":"1"})
                    }
                });
            }*/
        },
        afterLoad: function(anchorLink, index){
            if(index==1){$(".bottomNav").fadeOut(10)}else{$(".bottomNav").fadeIn(600)};
            // page3
            if(index==3){
                $(".date1").animate({"opacity":"1"},800,"easeOutBounce",function(){
                    $(".date2").animate({"opacity":"1"},800,"easeOutBounce",function(){
                        $(".date3").animate({"opacity":"1"},800,"easeOutBounce",function(){
                            $(".date4").animate({"opacity":"1"},800,"easeOutBounce",function(){
                                $(".date5").animate({"opacity":"1"},800,"easeOutBounce")
                            })
                        })
                    })
                })
            }else{
                $(".date1,.date2,.date3,.date4,.date5").stop(true)
                $(".date1,.date2,.date3,.date4,.date5").animate({"opacity":"0"},0,"easeOutBounce")
            }
            // page10 顺序出现
            if(index==10){
                $(".hx01").animate({"opacity":"1"},800,"easeOutBounce",function(){
                    $(".hx02").animate({"opacity":"1"},800,function(){
                        $(".hx03").animate({"opacity":"1"},800,function(){
                            $(".hx04").animate({"opacity":"1"},800,function(){});
                        });
                    });
                })
            }else{
                $(".hx01,.hx02,.hx03,.hx04").stop(true);
                $(".hx01,.hx02,.hx03,.hx04").animate({"opacity":"0"},100)
            }
            // page13
            if(index==13){
                $(".hu01").animate({"opacity":"1"},500,"linear",function(){
                    $(".hu02").animate({"opacity":"1"},500,"linear",function(){
                        $(".hu03").animate({"opacity":"1"},500,"linear",function(){
                            $(".hu04").animate({"opacity":"1"},500,"linear",function(){
                                $(".hu05").animate({"opacity":"1"},500,"linear",function(){
                                    $(".hu06").animate({"opacity":"1"},500,"linear",function(){
                                        $(".hu07").animate({"opacity":"1"},500,"linear",function(){
                                            $(".hu08").animate({"opacity":"1"},500,"linear",function(){
                                                $(".hu09").animate({"opacity":"1"},500,"linear");
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }else{
                $(".hu01,.hu02,.hu03,.hu04,.hu05,.hu06,.hu07,.hu08,.hu09").stop(true).animate({opacity:"0"},0)
            }
            // page25
            if(index==25){
                $(".tdate1,.tcont1").animate({"opacity":"1"},800,"linear",function(){
                    $(".tdate2,.tcont2").animate({"opacity":"1"},800,"linear",function(){
                        $(".tdate3,.tcont3").animate({"opacity":"1"},800,"linear",function(){
                            $(".tdate4,.tcont4").animate({"opacity":"1"},800,"linear");
                        });
                    });
                });
            }else{
                $(".tdate1,.tdate2,.tdate3,.tdate4,.tcont1,.tcont2,.tcont3,.tcont4").stop(true);
                $(".tdate1,.tdate2,.tdate3,.tdate4,.tcont1,.tcont2,.tcont3,.tcont4").animate({"opacity":"0"},100);
            }
            // page26
            if(index==26){
                $(".bh03").animate({"opacity":"1",top:"14%"},800,"easeOutBounce",function(){
                    $(".bh04").animate({"opacity":"1",top:"43%"},800,"easeOutBounce")
                });
            }else{
                $(".bh03").animate({"opacity":"0",top:"0"},0,"easeOutBounce",function(){
                    $(".bh04").animate({"opacity":"0",top:"0"},0,"easeOutBounce")
                });
            }

        },
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });

});

    
