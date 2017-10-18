/*******************************************************************************************
右侧隐藏效果

函数逻辑：
	 		1.获取节点名称方便来对节点进行操作;
	 		2.获取手指触屏在familyName[0]这个节点里的横坐标和纵坐标(获取横坐标是为判断移动方向,
	 		获取纵坐标是为了向下滑动时不让右侧导航条响应);
	 		3.当手指响应"touchmove"事件时利用xS和xE的差来让右侧导航条移动;
	 		4.当手指响应"touchend"事件时让右侧导航条弹出来
	 		5. masking[0]点击时让右侧导航条隐藏
	 		
********************************************************************************************/
function rightNav(conf){
		var content = document.getElementsByClassName(conf.touchTier);
		var Rn = document.getElementsByClassName(conf.rightNav);   //右边的导航条
		var  masking = document.getElementsByClassName(conf.masking);    //蒙版层
		var body = document.getElementsByTagName("body");
		// 所有鼠标接触的位置
		var xS;     //手指接触的时候的纵坐标;
		var xE;    //手指离开的时候的纵坐标;
		var yS;   //手指横的时候的横坐标;
		var yM;  //手指在移动时的纵坐标;
		var xM; //手指在移动时的横坐标;
		var tF=true; //为了判断导航是否到了一定值设置的逻辑值
		var colorOP = 0; //背景透明色的值
		/********************手指解除时*************************/
		content[0].addEventListener('touchstart',(ev)=>{
				xS  = ev.changedTouches[0].pageX;
				yS  = ev.changedTouches[0].pageY;
		}),
		/********************手指在屏幕移动时*******************/
		content[0].addEventListener('touchmove',(ev)=>{
				var yM = ev.changedTouches[0].pageY;
				if((Rn[0].offsetLeft<=0)){
						tF = false;
						ev.preventDefault()
						return;
				}
				if((tF && (yS-yM<5 && yS-yM>-5)) && (xS>innerWidth-20)){/*判断手指是否横屏滑动
																		和是否在指定区域滑动*/
						colorOP = colorOP+0.01;
						xM  = ev.changedTouches[0].pageX;
						Rn[0].style.right = xS-xM+"px";
						masking[0].style.opacity = colorOP;
				}
		}),
		/********************手指在屏幕离开时*******************/
		content[0].addEventListener('touchend',(ev)=>{
				xE  = ev.changedTouches[0].pageX;
				if(xE-xS<0 && (xS>innerWidth-20)){
						masking[0].style.opacity = "0.5";
						Rn[0].style.right = 0;
						body[0].style.overflowY = "hidden";
				}
		}),
		/**********************点击蒙版层时**********************/
		masking[0].addEventListener('click',()=>{
				masking[0].style.opacity = 0;
				Rn[0].style.right = '-62%';
				body[0].removeAttribute("style");
				tF = true;
		})
}/* 结束处*/
		/********************配置执行*******************/
window.onload=function(){
		rightNav({
				touchTier:'content',//触摸层的类名
				rightNav:'rightNav',//右侧导航的类名
				masking:'masking'//蒙版层类名
		});
}
		
