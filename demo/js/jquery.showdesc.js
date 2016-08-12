(function($){
	//鼠标是否在 对话框和目标节点上over
	var desc_over = false;
	//定时器
	var timeout = null;
	function removedata(){
		if(!desc_over){$(".desc_54556").remove();}
	}
	function showElement(mode){
		var top = mode.offset().top-$(document).scrollTop();
		var left = mode.offset().left - $(document).scrollLeft();
		var bottom = $(window).height()- mode.offset().top +$(document).scrollTop()-mode.height()
		var right = $(window).width() +$(document).scrollLeft()- mode.offset().left - mode.width()
		var max = Math.max.apply(null, [top,bottom,left,right])
		
		console.log(max)
		if(max==top){
			return "top"
		}else if(max==left){
			return "left"
		}else if(max==bottom){
			return "bottom"
		}else if(max==right){
			return "right"
		}
		
	}
	
	
	
	$.fn.descshow=function(data){
		if($(this)!=null){
			//leave事件隐藏对话框
			var leave_time = 500;
			$(this).mouseover(function(){
				var _flage = showElement($(this));
				console.log(_flage);
				desc_over = true;
				window.clearInterval(timeout);
				var jiantou_width = data.arrowLenght;
				var jiantou_space = 10;
				var border_radius=5;
				var top = $(this).offset().top;
				var left =$(this).offset().left;
				
				if($(".desc_54556")[0]==null){
					//左侧
					if(_flage=="right"){
						top= top-data.height/2;
						top+=$(this).height()/2;
						left= left+ $(this).width();
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div id="desc_inn_3354" style="left:'+(jiantou_space+jiantou_width)+'px;min-width:'+data.width+'px;min-height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;top:0;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px">'+data.content+'</div>';
						var jiantou_1='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid '+data.borderColor+';position:relative;left:'+jiantou_space+'px;top:'+jiantou_top+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:absolute;left:'+(jiantou_space+data.borderWidth)+'px;top:'+jiantou_top+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px">'+jiantou_1+jiantou_2+innner_div+'</div>')

						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						})
					}else if(_flage=="top"){
						left= left-data.width/2;
						left-=$(this).width()/2;
						left= left+ $(this).width();
						top= top-data.height;
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div id="desc_inn_3354" style="top:'+(-(jiantou_space+jiantou_width))+'px;min-width:'+data.width+'px;min-height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px">'+data.content+'</div>';
						var jiantou_1='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-top:'+jiantou_width+'px solid '+data.borderColor+';position:relative;left:'+(data.width/2-data.arrowLenght)+'px;top:'+(data.height-data.arrowLenght-jiantou_space)+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-top:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:relative;left:'+(data.width/2-data.arrowLenght)+'px;top:'+(data.height-data.arrowLenght*2-jiantou_space-data.borderWidth)+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px;">'+jiantou_1+jiantou_2+innner_div+'</div>')
						
						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						}) 
					}else if(_flage=="left"){
						top= top-data.height/2;
						top+=$(this).height()/2;
						
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div id="desc_inn_3354" style="right:'+(jiantou_space+data.arrowLenght)+'px;min-width:'+data.width+'px;min-height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px">'+data.content+'</div>';
						var jiantou_1='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-left:'+jiantou_width+'px solid '+data.borderColor+';position:absolute;right:'+jiantou_space+'px;top:'+(data.height/2-data.arrowLenght)+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-top:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid transparent;border-left:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:absolute;right:'+(jiantou_space+data.borderWidth)+'px;top:'+(data.height/2-data.arrowLenght)+'px;"></div>'
						$('body').append('<div class="desc_54556" style=";position:absolute;top:'+top+'px;left:'+left+'px;">'+jiantou_1+jiantou_2+innner_div+'</div>')
						
						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						}) 
					}else if(_flage=="bottom"){
						left= left-data.width/2;
						left-=$(this).width()/2;
						left= left+ $(this).width();
						top= top+$(this).height();
						var jiantou_top =data.height/2-jiantou_width;
						var innner_div='<div id="desc_inn_3354" style="top:'+(jiantou_space+data.arrowLenght)+'px;min-width:'+data.width+'px;min-height:'+data.height+'px;border:'+data.borderWidth+'px solid '+data.borderColor+';position:absolute;background-color:'+data.backgroundColor+';border-radius:'+border_radius+'px">'+data.content+'</div>';
						var jiantou_1='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid '+data.borderColor+';position:absolute;left:'+(data.width/2-data.arrowLenght)+'px;top:'+jiantou_space+'px;"></div>';
						var jiantou_2='<div style="width:0; height:0;border-left:'+jiantou_width+'px solid transparent;border-right:'+jiantou_width+'px solid transparent;border-bottom:'+jiantou_width+'px solid '+data.backgroundColor+';z-index:100;position:absolute;left:'+(data.width/2-data.arrowLenght)+'px;top:'+(jiantou_space+data.borderWidth)+'px;"></div>'
						$('body').append('<div class="desc_54556"  style=";position:absolute;top:'+top+'px;left:'+left+'px;">'+jiantou_1+jiantou_2+innner_div+'</div>')
						
						$(".desc_54556").mouseover(function(){
							desc_over = true;
						})
						$(".desc_54556").mouseleave(function(){
							desc_over = false;
							timeout =  setTimeout(function(){removedata()},leave_time);
						}) 
					}
					data.appendContext($("#desc_inn_3354"))
				}
				// "width:0; height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:30px solid yellow;"
			})
			$(this).mouseleave(function(){
				desc_over = false;
				window.clearInterval(timeout);
				timeout =  setTimeout(function(){removedata()},leave_time);
			})
		}
	}
})(jQuery)