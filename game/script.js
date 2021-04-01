function drawChecker(){
  let mainBlock=document.querySelector('.main-block');
  let block;
  let flag=true;
  let countRow=0
  let countCol=0
  let getPosition
  for (let i=0;i<8; i++){
    countRow+=1;
    for(let j=0;j<8;j++){
      if (j==0) flag=!flag
      block=document.createElement('div');
      block.id=i+""+j
      if (flag) block.className='block black ';
      else block.className='block white ';

      mainBlock.appendChild(block);
      flag=!flag;
    }
  }
  countCol=0
}
drawChecker();
var a=document.getElementById("00")
a.addEventListener('click',function(){
var xhr= new XMLHttpRequest();
/*let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/add.ajax.php");
url.searchParams.set("col",1);
url.searchParams.set("row",1);
url.searchParams.set("game",1);
url.searchParams.set("user","alseny") */
let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/get.ajax.php");
url.searchParams.set("game",Number.parseInt("1"))
xhr.open("GET",url,false)
//xhr.open("GET","http://dotGame21.std-400.ist.mospolytech.ru/get.ajax.php",false)
xhr.send()
console.log(xhr.status)
console.log(xhr.response)

//console.log(a);

})
/*function sendRequest(){
  var xhr=new XMLHttpRequest()
  xhr.open("GET",'http://dotGame21.std-400.ist.mospolytech.ru/add.ajax.php')
  xhr.send();
  console.log(xhr.responseText)
  


}
sendRequest()
*/