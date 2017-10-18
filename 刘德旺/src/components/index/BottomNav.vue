<template>
<div class="bottomNav">
		<ul>
				<li v-for = "li in listS">{{li}}</li>
		</ul>
</div>
</template>

<script>
export default { 
data() {
		return{
				listS:{
						index:"首页",
						search:"查谱",
						communication:"通讯",
						my:"我的"
				}
		}
	}
}

</script>
