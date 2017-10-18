const axios = require('axios');
var data = '';
axios.get('https://bird.ioliu.cn/joke/rand')
.then(response => {
		data = response.data;
		console.log(data);
})
.catch(error => {
    	console.log(error);
});