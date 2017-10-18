<template>
<div class="familyName" >
		<!-- 顶部共用部分 -->
		<topShare></topShare>
		<div class="nameImg">
		</div>
		<!-- 内容区域 -->
		<div class="content" >
				<div class="masking">
						<p>点击关闭</p>
				</div>
		</div>
		<!-- 左边的导航条地区 -->
		<div class="rightNav">
				<ul>
						<li>词条目录</li>
						<li>词条目录</li>
						<li>词条目录</li>
						<li>词条目录</li>
						<li>词条目录</li>
						<li>词条目录</li>
				</ul>
		</div>
</div>
</template>
<script>
/*******************组件引用部分*******************/
import topShare from './topShare'
/**************************************************/

/*******************js文件地区*************************/
import {rightNav} from './js/rNav' // 右边导航拦的动画效果,js文件内部进行配置和调用
import {nd} from './js/nd'
/*****************************************************/
export default { 
		data () {
				return{
						data:''
				}
		},
		components:{
				topShare
		},
		mounted() {
    	},
    	methods: {
    	}
}
</script>

<style lang="scss">
@import './css/familyName.scss';
</style>