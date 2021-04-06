function drawChecker(){
  let mainBlock=document.querySelector('.main-block');
  let block;
  let flag=true;
  let countRow=8
  let countCol=8
  let cnt=0
  let getPosition
  for (let i=0;i<8; i++){
    countRow+=i
    for(let j=0;j<8;j++){
      countCol+=j
      if (j==0) flag=!flag
      block=document.createElement('div');
      if(i==0)
        block.id=i+j+1;
      else {
        block.id=8*i+j+1;
      }
      if (flag) block.className='block black ';
      else block.className='block white ';

      mainBlock.appendChild(block);
      flag=!flag;
    }
  }
  

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
    str=(arr[i].ROW%8)+(arr[i].COL%8)
    var N = 255;
    var randomArray = Array(N).fill(0).map((x,i) => i + 1).sort(() => Math.random() - 0.5);
    white=Math.floor(Math.random()*255)
    white=0?white=1:white=white
    red=Math.floor(Math.random()*255)
    red=0?red=2:red=red
    blue=Math.floor(Math.random()*255)
    blue=0?blue=3:blue=blue
    color="rgb("+randomArray[white]+","+randomArray[red]+","+randomArray[blue]+")";
    try{
      if (document.getElementById(str).style.backgroundColor===""){
        document.getElementById(str).style.backgroundColor=color;
        document.getElementById("empty").innerHTML="Игрок "+arr[i].USER;
      }
        
    }catch(e){

    }
  }
  str="";
}
function fullTable(el){
    var a=document.getElementsByClassName("main-block");
    var N = 255;
    var randomArray = Array(N).fill(0).map((x,i) => i + 1).sort(() => Math.random() - 0.5);
    white=Math.floor(Math.random()*255)
    white=0?white=1:white=white
    red=Math.floor(Math.random()*255)
    red=0?red=2:red=red
    blue=Math.floor(Math.random()*255)
    blue=0?blue=3:blue=blue
    color="rgb("+randomArray[white]+","+randomArray[red]+","+randomArray[blue]+")";
    try{
      if (a[0].childNodes[el].style.backgroundColor===""){
          a[0].childNodes[el].style.backgroundColor=color;
        document.getElementById("empty").innerHTML="Игрок компьютер";
      }
        
    }catch(e){

    }
  for (i in a[0].childNodes){
    
  }
}

function isTableFull(){
  var mydiv=document.getElementsByClassName('main-block');
  countEl=0;
  for(i in mydiv[0].childNodes){
    //console.log(mydiv[0].childNodes[i].style.backgroundColor)
    //console.log(countEl);
    try{
       if(mydiv[0].childNodes[i].style.backgroundColor!=="")
        countEl+=1
        if(countEl>=64){
          return countEl;
          //for(i in mydiv[0].childNodes)
            //mydiv[0].childNodes[i].style.backgroundColor="transparent"
      }   
    }catch(e){

    }
  }
  
}

function intervalisTableFull(){

}
  var intervalisTableFull = window.setInterval(function(){
    
  if(isTableFull()>=64){
  console.log("in if")
  var mydiv=document.getElementsByClassName('main-block');
  mydiv[0].innerHTML="";
  drawChecker();
  }
else{
    var intervalId = window.setInterval(function(){
    arr=["red","blue","yellow","pink"]
    printPosition(Math.floor(Math.random()*50),arr[Math.floor(Math.random()*4)]);
  }, 1000);
  var intervalFullPoint = window.setInterval(function(){
    var N = 64;
    var randomArray = Array(N).fill(0).map((x,i) => i + 1).sort(() => Math.random() - 0.5);
    var index=Math.floor(Math.random()*64)
    index=0?index=1:index=index;
   fullTable(randomArray[index]);
  }, 6000);
}



}, 7000);










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
