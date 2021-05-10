const express= require('express');
const app= express()
app.listen(3000, ()=> console.log('listening a 30000'))
app.use(express.static('public'));
app.post('http://127.0.0.1:5500/js/dzJavaScript.json',(request,response) =>{
	console.log(request);
});
