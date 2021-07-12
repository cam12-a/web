$(document).ready(function(event) { 
    var getModal=document.getElementById("showModal");

showModal=document.querySelector("#showModal")

showModal.addEventListener('click',()=>{

    console.log("ok")

    createModal();
    generateLoginBody();
    //gerer la longueur de la fenetre modale
    $('.modalWindow').height(200);
    $('.modalWindow').width(400);
    $('.modalBody').width(398);
    $('.modalBody').height(200);
    $('.modalHeader').width(398);


    var loginWindow=$('.btnSingOut')
    loginWindow.on('click',function(){
      $('.modalWindow').height(200);
      $('.modalWindow').width(400);
      $('.modalBody').width(398);
      $('.modalBody').height(200);
      $('.modalHeader').width(398);



    });

    var signIn=$('.btnSingIn')
    signIn.on('click',function(){
      $('.modalWindow').height(550);
      $('.modalWindow').width(450);
      $('.modalBody').width(450);
      $('.modalBody').height(350);
      $('.modalHeader').width(450);
      this.css({'color':'black'});


    });
});

function createModal(){
    destroyModal();
   
    //Creation de la fenetre registration
    modalWindow=document.createElement('div');

    modalWindow.className="modalWindow";

    BodyContent=document.querySelector("#container")
    //Creation du header
    modalHeader=document.createElement('div');

    btnSingIn=document.createElement("button");
    btnSingIn.appendChild(document.createTextNode("Регистрация"));
    btnSingIn.className="btnSingIn";
    modalHeader.appendChild(btnSingIn);



    btnSingOut=document.createElement("button");
    btnSingOut.appendChild(document.createTextNode("Войти"));
    btnSingOut.className="btnSingOut"
    modalHeader.appendChild(btnSingOut)
    btnSingOut.addEventListener("click",()=>{
        document.querySelector(".modalBody").innerHTML="";
        
        generateLoginBody();

    })
    btnSingIn.addEventListener("click",()=>{
        document.querySelector(".modalBody").innerHTML="";
        generateRegistrationBody();
    })

    btnClose=document.createElement('button');
    btnClose.className="btnClose"
    btnClose.appendChild(document.createTextNode("X"));
    modalHeader.appendChild(btnClose)
    btnClose.addEventListener("click",()=>{
        document.querySelector(".modalWindow").remove();    
    });
    
    

    modalHeader.className="modalHeader";

    modalBody=document.createElement('div');
    modalBody.className="modalBody";
    //Creation du Footer
    modalFooter=document.createElement('div');
    modalFooter.className="modalFooter";
   // btnSubmit=document.createElement('button');
   // btnCancel=document.createElement('button');
   // btnSubmit.className="btnSubmit";
    //btnCancel.className="btnCancel"
    //btnSubmit.appendChild(document.createTextNode("Войти"))
    //btnCancel.appendChild(document.createTextNode("Отменить"))
    //Fermeture de la fenetre si on click sur Отменить
   // btnCancel.addEventListener('click',()=>{
   //     document.querySelector(".modalWindow").remove();
   // })

   // modalFooter.appendChild(btnSubmit);
   // modalFooter.appendChild(btnCancel);
    //modalFooter.appendChild(document.querySelector(".btnSubmit").createTextNode("Войти"));
    //modalFooter.appendChild(document.querySelector(".btnCancel").createTextNode("Отменить"));

    modalWindow.appendChild(modalHeader);
    modalWindow.appendChild(modalBody);
    modalWindow.appendChild(modalFooter);
    BodyContent.append(modalWindow);

    console.log(modalWindow);
    

    



}


function generateLoginBody(){

let form=""

form='<form class="card loginForm">'+
'<div class="input-group">'+
    '<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
    '<input id="email" type="text" class="form-control" name="email" placeholder="Email">'+
  '</div>'+
  '<div class="input-group">'+
    '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'+
    '<input id="password" type="password" class="form-control" name="password" placeholder="Password">'+
  '</div>'+
  '<div class="card-header">'+
  '<div class="form-group">'+
    '<input type="submit" value="Войти" class="btn float-right login_btn">'+
'</div>'+
'<div class="d-flex justify-content-end social_icon">'+
    '<span><i class="fa fa-facebook-square"></i></span>'+
    '<span><i class="fa fa-google-plus-square"></i></span>'+
    '<span><i class="fa fa-twitter-square"></i></span>'+
'</div></div>'
  
$('.modalBody').append(form);

}
function generateRegistrationBody(){
    let form=""
form=+'<form class="card form-horizontal" action="/action_page.php">'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="firstName" style="color:white;">Фамилия:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="firstName" placeholder="Enter firstName" name="firstName" style="color:white;">'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Имя:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="name" placeholder="Enter name" name="name" style="color:white;">'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="lastName" style="color:white;">Отчество:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="lastName" placeholder="Enter name" name="lastName" style="color:white;">'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="email" style="color:white;">Почта:</label>'+
      '<div class="col-sm-10">'+
        '<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" style="color:white;">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Пароль:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="password" class="form-control" id="pwd1" placeholder="Введите пароль" name="pwd">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Повторите пароль:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="password" class="form-control" id="pwd2" placeholder="Повторите пароль" name="pwd">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Дата рождения:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="date" class="form-control" id="dateBirth" placeholder="Дата рождения" name="dateBirth">'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+        
      '<div class="col-sm-offset-2 col-sm-10">'+
        '<div class="checkbox">'+
          '<label style="color:white;"><input type="checkbox" name="remember" > Remember me</label>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+        
      '<div class="col-sm-offset-2 col-sm-10">'+
        '<input type="submit" value="Зарегистрироваться" class="btn sigin_btn">'+
      '</div>'+
    '</div>'+
    '<div class="card-header">'+
    '<div class="d-flex justify-content-end social_icon">'+
        '<span><i class="fa fa-facebook-square"></i></span>'+
        '<span><i class="fa fa-google-plus-square"></i></span>'+
        '<span><i class="fa fa-twitter-square"></i></span>'+
    '</div></div>'+
      '</form>'
$('.modalBody').append(form);
}

function destroyModal(){

    try{
        document.querySelector(".modalBody").remove();
    }catch(error){

    }
}




   
/*var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");
 
closeButton.addEventListner("click", function(){
   modal.classList.toggle("closed");
   modalOverlay.classList.toggle("closed");
});
 
openButton.addEventListner("click", function(){
   modal.classList.toggle("closed");
   modalOverlay.classList.toggle("closed");
});*/