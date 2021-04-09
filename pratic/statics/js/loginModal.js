var getModal=document.getElementById("showModal");

showModal=document.querySelector("#showModal")

showModal.addEventListener('click',()=>{

    console.log("ok")

    createModal();

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
        Name=document.createElement("input");
        Name.type="text"
        modalBody.appendChild(Name);
    })
    btnSingIn.addEventListener("click",()=>{
        document.querySelector(".modalBody").innerHTML="";
        Name=document.createElement("input");
        Name.type="password"
        modalBody.appendChild(Name);
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
    btnSubmit=document.createElement('button');
    btnCancel=document.createElement('button');
    btnSubmit.className="btnSubmit";
    btnCancel.className="btnCancel"
    btnSubmit.appendChild(document.createTextNode("Войти"))
    btnCancel.appendChild(document.createTextNode("Отменить"))
    //Fermeture de la fenetre si on click sur Отменить
    btnCancel.addEventListener('click',()=>{
        document.querySelector(".modalWindow").remove();
    })

    modalFooter.appendChild(btnSubmit);
    modalFooter.appendChild(btnCancel);
    //modalFooter.appendChild(document.querySelector(".btnSubmit").createTextNode("Войти"));
    //modalFooter.appendChild(document.querySelector(".btnCancel").createTextNode("Отменить"));

    modalWindow.appendChild(modalHeader);
    modalWindow.appendChild(modalBody);
    modalWindow.appendChild(modalFooter);
    BodyContent.append(modalWindow);

    console.log(modalWindow);
    

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