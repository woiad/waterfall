    $(window).on('load',function(){
        waterfall();
      var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'}]}
        /*$(window).on('scroll',function(){
            if(checkScrollslide){
                $.each(dataInt.data,function(key,value){
                    var oBox=$('<div>').addClass('box').appendTo($('#container'));
                    var oPic=$('<div>').addClass('box_img').appendTo($(oBox));
                    var oImg=$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
                })
            }
        })*/
    })
    function waterfall(){
        var $boxs=$('#container>div');
        console.log($boxs.length)
        var w=$boxs.eq(0).outerWidth();
        var cols=Math.floor($(window).width()/w);
        $('#container').width(w*cols).css('margin','0 auto');
        var hArr = [];
        $boxs.each(function(index,value){
            var h = $boxs.eq(index).outerHeight();
            if(index<cols){
                hArr[index]=h;
            }else{
                var minH=Math.min.apply(null,hArr);
                var minHIdex=$.inArray(minH,hArr);
                $(value).css({
                    'position':'absolute',
                    'top':minH+'px',
                    'left':minHIdex*w+'px',
                })
                hArr[minHIdex]+=$boxs.eq(index).outerHeight();
                console.log(hArr[minHIdex]);
//              var len=$("#container .box").length;
                /*var Topp=$("#container .box").eq(len-1).position().top;
                var Toph=$("#container .box").eq(len-1).outerHeight();
                $("#container").css({"height":Topp+Toph+"px"})*/

            }
        })
//      var len=$("#container .box").length;
//      console.log(len+"box长度")
//      var Harr=new Array();
//      console.log(Harr)
//      var a = [];
        /*for(var i=len-7;i<len;i++){
            Harr[i]=$("#container .box").eq(i).position().top+$("#container .box").eq(i).outerHeight();
        }
        var HarrLen=Harr.length;
        var maxH=Math.max(Harr[HarrLen-7],Harr[HarrLen-6],Harr[HarrLen-5],Harr[HarrLen-4],Harr[HarrLen-3],Harr[HarrLen-2],Harr[HarrLen-1])*/
//      var x;
//      var max=Harr[1];
//      for(var i=1;i<=7;i++){
//          Harr[i-1]=$("#container .box").eq(len-i).position().top+$("#container .box").eq(len-i).outerHeight();
//      }
//      var maxH=Math.max.apply(Math,Harr)
//      console.log(maxH)
//      $("#container").css({"height":maxH+"px"})

        /*var maxH=Math.max($("#container .box").eq(len-7).position().top+$("#container .box").eq(len-7).outerHeight(),$("#container .box").eq(len-6).position().top+$("#container .box").eq(len-6).outerHeight(),$("#container .box").eq(len-5).position().top+$("#container .box").eq(len-5).outerHeight(),$("#container .box").eq(len-4).position().top+$("#container .box").eq(len-4).outerHeight(),$("#container .box").eq(len-3).position().top+$("#container .box").eq(len-3).outerHeight(),$("#container .box").eq(len-2).position().top+$("#container .box").eq(len-2).outerHeight(),$("#container .box").eq(len-1).position().top+$("#container .box").eq(len-1).outerHeight())
            $("#container").css({"height":maxH+"px"})*/
            
    }
//  function checkScrollslide(){
//      var $lastBox=$('#container>div').last();
//      var lastBoxDis=$lastBox.offsetTop;
//  }
    /* $(document).ready(function(){
            var len=$('#container .box').length;
            var lastAoxH=$('#container .box').eq(len-1).css("position")
            console.log(lastAoxH)
        })*/
    $(window).on('resize', function(){
        waterfall();
    });


