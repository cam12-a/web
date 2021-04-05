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
function getPoint(){
  max=76
  rdn=Math.floor(Math.random() * max);
  console.log(rdn)
  if (rdn<10)
    return "0"+rdn;
  else
    return rdn;

}
function setColor(){
  try{
       var a=document.getElementById(getPoint());
      a.style.backgroundColor="red";
      //setTimeout(setColor(),3000);
  }catch(e){

    }
}
function arrayRandom() {
  n=Math.floor(Math.random()*64)
  generatePoint=[n];
  for(i=0;i<n;i++) generatePoint[i]=Math.floor(Math.random()*n);
  return generatePoint;
}

function gameGetMethod(number){
    var xhr= new XMLHttpRequest();
    let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/get.ajax.php");
    url.searchParams.set("game",number);
    xhr.open("GET",url,false);
    xhr.send();
    //console.log(xhr.status);
    arr=JSON.parse(xhr.responseText);
    return arr;
   
}
function gameGetPostMethod(number,col,row,user){
   var xhr= new XMLHttpRequest();
    let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/add.ajax.php");
    url.searchParams.set("col",Number.parseInt(col));
    url.searchParams.set("row",Number.parseInt(row));
    url.searchParams.set("user",user) 
    url.searchParams.set("game",Number.parseInt(number));
    xhr.open("GET",url,false);
    xhr.send();
    arr=JSON.parse(xhr.responseText);
    return arr;
    //console.log(JSON.parse(xhr.responseText));
}
 function printPosition(number,color){
  arr=gameGetMethod(number);
  str="";
  if(arr.lenght==0) 
    document.getElementById("empty").innerHTML="Not point found";
  //console.log(arr.lenght)
  for(i in arr){
      if(arr[i].ID>64) arr[i].ID=arr[i].ID%64
     if(Number.parseInt(arr[i].ID)<0)
      str="0"+arr[i].ID
      else str=arr[i].ID
      console.log(str);
    try{
      document.getElementById(str).style.backgroundColor=color;
    }catch(e){

    }
  }
  str="";
}
function sendRequestGet() {
  arr=arrayRandom();
  for(i=0;i<arr.lenght;i++)
    a=0

}
var intervalId = window.setInterval(function(){
  printPosition(Math.floor(Math.random()*8),"red");
}, 1000);
/*setTimeout(function(){
  a=Math.floor(Math.random()*5)
  printPosition(a,"red")

  window.location.reload(1);
}, 5000);*/
//printPosition(1,"red")

//infinity();
//console.log(gameGetMethod(1))

/*var a=document.getElementById(getPoint());

setTimeout(setColor(),2000);
var elem1=document.getElementById(getPoint());
a.addEventListener('click',function(){

var xhr= new XMLHttpRequest();
/*let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/add.ajax.php");
url.searchParams.set("col",1);
url.searchParams.set("row",1);
url.searchParams.set("game",1);
url.searchParams.set("user","alseny") 
let url=new URL("http://dotGame21.std-400.ist.mospolytech.ru/get.ajax.php");
url.searchParams.set("game",Number.parseInt("1"));
xhr.open("GET",url,false);
//xhr.open("GET","http://dotGame21.std-400.ist.mospolytech.ru/get.ajax.php",false)
xhr.send();
console.log(xhr.status);
console.log(xhr.responseJSON);

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
