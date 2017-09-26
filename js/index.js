$(function(){
				var waterfall = function(){
					var $box = $(".container>div");
					var wid = $box.eq(0).outerWidth();
					var cols = Math.floor($(".container").width()/wid);
					var higArr=[];
					$box.each(function(index,value){
						var hig = $box.eq(index).outerHeight();
						console.log(this)
						if(index<cols){
							higArr[index]=hig;
						}else{
							console.log(higArr)
							var minHig = Math.min.apply(null,higArr);
							console.log(minHig);
							var minIndex = $.inArray(minHig,higArr)
							var offset = $box.eq(0).outerWidth()*minIndex;
							$(".box").eq(index).css({
								"position":"absolute",
								"top":minHig+"px",
								"left":offset+"px"
							})
							higArr[minIndex]+=$(value).outerHeight();
						}
					})
				}
				$(window).on('load',function(){
					waterfall();
				})
			})