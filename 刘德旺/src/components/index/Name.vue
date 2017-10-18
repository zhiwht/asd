<template>
<div class="name">
	<div class="topName"></div>
	<div class="select">
		<ul>
			<li>
				<ul>
					<li><router-link to="familyChart">{{familyChart}}</router-link></li>
					<li><router-link to="offspring">{{offspring}}</router-link></li>
				</ul>
			</li>
			<li>
				<ul>
					<li><router-link to="familySize">{{familySize}}</router-link></li>
					<li><router-link to="hallNumber">{{hallNumber}}</router-link></li>
				</ul>
			</li>
		</ul>
	</div>
 	<swiper :options="swiperOption" class="swiper-box">
   		 	<swiper-slide class="swiper-item">Slide 1</swiper-slide>
   		 	<swiper-slide class="swiper-item">Slide 2</swiper-slide>
    		<swiper-slide class="swiper-item">Slide 3</swiper-slide>
    		<swiper-slide class="swiper-item">Slide 4</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
 	 </swiper>
  	<BottomNav></BottomNav>
</div>
</template>

<script>
/***************************Js引入区*************************************/
/*引入的轮播图的插件Js*/
import BottomNav from './BottomNav.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
/***********************************************************************/

export default { 
components: {
    	swiper,
    	swiperSlide,
    	BottomNav
},
	data() {
		return{
				familyChart:"族谱",
				offspring:"世系",
				familySize:"派语、辈份",
				hallNumber:"郡望、堂号",
       			swiperOption: {
          				autoplay: 3000,//设置多久滚动一次;
          				initialSlide: 1,//设置初始的索引;
          				loop: true,//是否让他循环;
          				pagination: '.swiper-pagination',//底部的小点;
          				autoplayDisableOnInteraction:false //为false时手机解除之后继续轮播;
        		}
		}
	}
}
</script>

<style lang="scss">
@import './css/Name.scss';
@import './css/swiper.scss';
#Lbt{
		width:400%;
		list-style: none;
		position:absolute;
		overflow: hidden;
}
html,body {
    	width:100%;
    	position: relative;
    	height: 100%;
    	overflow:hidden; 
}
</style>
