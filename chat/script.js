
async function inputChanged(){
if (document.getElementById("mytexteare").value !== ""
	&& document.getElementById("nameInput").value !== "")
	document.getElementById("sendBtn").style.display = 'block';
}
  mytexteare.onchange= function(){
    inputChanged()
  }
  nameInput.onchange=function(){
    inputChanged()
  }
 
 
  mytexteare.onblur=function(){
    document.getElementById("content").style.transform=
    "translate("+(-10)+"px,"+(-170)+"px)";
  }
  
  async function sendMessage() {	
    var a=document.querySelector("#form").addEventListener("submit",function(event){
      event.preventDefault();
    });
    //document.getElementById("blockMsg").style.transform=
    //"translate("+300+"px,"+0+"px)";
	fetch('add.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Name: document.getElementById("nameInput").value, Text: document.getElementById("mytexteare").value})
  });
    var div=document.createElement('div')
    div.innerHTML='<div> Имя: '+document.getElementById("nameInput").value +'</div><div>Сообщение :'+ document.getElementById("mytexteare").value+'</div>'   
    document.getElementById("msgContent").appendChild(div);
    
}
async function getMsg(){
  $.ajax({
    url:'get.php',
    method:'GET',
    dataType:'JSON',
    success:function(data){
      document.getElementById("msgContent").innerHTML="";
      $.each(data,function(index,elem){
        var div=document.createElement('div');
        //console.log(data[index].fullname);
        div.innerHTML='<div> Имя: '+data[index].fullname +'</div><div>Сообщение :'+ data[index].comment+'</div>'   
        document.getElementById("msgContent").appendChild(div);
      });
    },
    error:function(response,status,error){
      console.log(response.responseText);
    }
  })

  //let response=response.JSON();
  //console(response);
  //var div=document.createElement('div')
  //div.innerHTML='<div> Имя: '+document.getElementById("nameInput").value +'</div><div>Сообщение :'+ document.getElementById("mytexteare").value+'</div>'   
  //document.getElementById("msgContent").appendChild(div);
}

var intervalisTableFull = window.setInterval(function(){
  getMsg();},1000);

/*async function loadMessages() {
  let response = await fetch('https://chat.cam12a.repl.co/get')
	let msg = await response.json()
	messages.value = msg.sort((a, b) => new Date(a.TIME) < new Date(b.TIME) ? -1 : 1)
}*/
 