$(document).ready(function(event) { 
    var getModal=document.getElementById("showModal");

showModal=document.querySelector("#showModal")

showModal.addEventListener('click',()=>{

    console.log("ok")

    createModal();
    generateLoginBody();

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
form="<form class='card'>"+
'<div class="input-group form-group">'+
    '<div class="input-group-prepend">'+
       '<span class="input-group-text"><i class="fa fa-user"></i></span>'+
    '</div>'+
    '<input type="text" class="form-control" placeholder="username">'+
    
'</div>'+
'<div class="input-group form-group">'+
    '<div class="input-group-prepend">'+
        '<span class="input-group-text"><i class="fa fa-key" aria-hidden="true"></i></span>'+
    '</div>'+
    '<input type="password" class="form-control" placeholder="password">'+
'</div>'+
'<div class="row align-items-center remember">'+
    '<input type="checkbox">Remember Me'+
'</div>'+
'<div class="form-group">'+
    '<input type="submit" value="Login" class="btn float-right login_btn">'+
'</div></form>'+
'<div class="card-header">'+
'<div class="d-flex justify-content-end social_icon">'+
    '<span><i class="fa fa-facebook-square"></i></span>'+
    '<span><i class="fa fa-google-plus-square"></i></span>'+
    '<span><i class="fa fa-twitter-square"></i></span>'+
'</div></div>'
$('.modalBody').append(form);

}
function generateRegistrationBody(){
    let form=""
form='<form class="card">'+
'<div class="row">'+
  '<div class="col">'+
    '<input type="text" class="form-control" placeholder="Имя">'+
  '</div>'+
  '<div class="col">'+
    '<input type="text" class="form-control" placeholder="Фамилия">'+
  '</div>'+
  
'</div>'+
'<div class="row">'+
    '<div class="col">'+
        '<input type="text" class="form-control" placeholder="Почта">'+
    '</div>'+
    '<div class="col">'+
        '<input type="date" class="form-control" placeholder="Дата рождения">'+
    '</div>'+
'</div>'+'<div class="form-group">'+
'<input type="submit" value="Зарегистрироваться" class="btn sigin_btn">'+
'</div>'+
'</form>'+
'<div class="card-header">'+
'<div class="d-flex justify-content-end social_icon">'+
    '<span><i class="fa fa-facebook-square"></i></span>'+
    '<span><i class="fa fa-google-plus-square"></i></span>'+
    '<span><i class="fa fa-twitter-square"></i></span>'+
'</div></div>'
$('.modalBody').append(form);
}

function destroyModal(){

    try{

        document.querySelector(".modalBody").remove();
       
    }catch(error){

    }
}



  });




   
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