$(document).ready(function () {
  clearLocalStorage();
	$(".addStudent").on('click',function(){
		destroyModal();
		generateModalWindows("Добавление нового ученика");
		addStudentForm();

    getLevel('.level');
	});
	$(".editCategory").on('dblclick',function(){
		destroyModal();
		generateModalWindows("Изменение информации о ученике");
   
		editStudentInfo($(this).find("input:hidden").val());
    getLevel('.level');
    getObjectData('id_student',$(this).find("input:hidden").val(),'./../../Admin/studentJSONData')
		
	});


 
  $(".assignSubject").on('click',function(){
    destroyModal();
    
    validateSchedule();
    generateModalWindows("Назначить преподавателю дисциплину");
    getLevelOnChange('.levelSubject');
    getTeacherList(".TeacherInLevel");
    modalAssignSubject('./../../Admin/AssignSubject/');

  });



  $('body').on('change','.gradeID',function () {
      $(".showSubjectDiv").show();
      $(".SubjectiSTeachedInLevel").html("");
      validateSchedule();
    // $(".TeacherInLevel").html("");
    var id_teacher=0;
    try{
      $("#id_teacher").ddslick({
      width:"200px",
      height:"80px",
      imagePosition:"left",
      onSelected: function(data){
        console.log("form grade")
        console.log(data);
        console.log(data.selectedData.value);
        $(".teacherId").val(data.selectedData.value)
     
        
    } 
    })
    }catch(error){
      console.log(error.message);
    }
    if($(".modalHeader").text()=="Составление расписанияX")
      getObjectSubjectByGrade(".SubjectiSTeachedInLevel","idCours");
    if($(".modalHeader").text()=="Назначить преподавателю дисциплинуX")
      getObjectSubjectByGrade(".SubjectiSTeachedInLevel","coursID");

    
  });


  $(".addTeacher").on('click',function(){
    destroyModal();
    generateModalWindows("Добавление нового преподавателя");
    addTeacherForm('./../../Admin/AddTeacher/','0');
   
  });
  $(".editProduct").on('click',function(){
      destroyModal();
      generateModalWindows("Изменение информации о продукте");
      addProductForm();
  });
  $('.deleteStdent').on('click',function () {
      destroyModal();
      generateModalWindows("Удаление студента");
      deleteObject('./../../Admin/DeleteStudent/',$(this).parents('tr').find("input:hidden").val(),'id_student');

  });
  $('.editTeacher').on('dblclick',function(){
    destroyModal();
    generateModalWindows("Изменение информации о преподавателя");
    addTeacherForm('./../../Admin/UpdateTeacher/',$(this).find("input:hidden").val());
    getObjectTeacher($(this).find("input:hidden").val(),'./../../Admin/getTeacherInfo/');
    
  });
  $('.deleteTeacher').on('click',function () {
    destroyModal();
    generateModalWindows("Удаление преподавателя");
    deleteObject('./../../Admin/DeleteTeacher/',$(this).parents('tr').find("input:hidden").val(),'id_teacher');
  });
  $('.addSubject').on('click',function(){
    destroyModal();
    generateModalWindows("Добавление дисциплины");
    getLevel('.level');
    SubjectModal('./../../Admin/AddSubject/',$(this).find("input:hidden").val());

  });
  $('.deleteSubject').on('click',function(){
      destroyModal();
      generateModalWindows("Удаление дисциплины");
      deleteObject('./../../Admin/DeleteSubject/',$(this).parents('tr').find("input:hidden").val(),'id_cours')
  });

  $('.editSubject').on('dblclick',function(){
    destroyModal();
    generateModalWindows("Изменение дисциплины");
    getObjectSubject($(this).find("input:hidden").val(),'./../../Admin/GetOneSubject/');
    getLevel('.level');

    SubjectModal('./../../Admin/UpdateSubject/',$(this).find("input:hidden").val());

  });
  $(".addSchedule").on('click',function () {
    validateSchedule();
    destroyModal();
    
    generateModalWindows("Составление расписания");
    generateModalSchedule('./../../Admin/AddSchedule/');
    getLevelOnChange('.levelSubject');
    getTeacherList(".TeacherInLevel");
    //getTeacherListByGardeAndSubject(".TeacherInLevel");
     getObjectSubjectByGrade(".SubjectiSTeachedInLevel","idCours");
    setDate("#dateSchedule");
    getPreSchedule();

  });
  
  $('body').on('change','.idCours',function () {
     //getObjectSubjectByGrade(".SubjectiSTeachedInLevel","idCours");
    getTeacherListByGardeAndSubject(".TeacherInLevel");

  })

  setTimeout(function() {
    $('#error').fadeOut('fast');
}, 1000); 
  
  setDate(".currentDate");
  setDate(".dateSchedule");
    getPreSchedule();
  $(".schedule").on('click',function(){
      //event.preventDefault();
      clearScheduleTable();
       getPreSchedule();
     console.log($(".currentDate").val())
     
  });
 
   $("#teacherScheduleGrade").on('change',function(){
     localStorage.setItem( 'gradeID', JSON.stringify($("select[name='teacherScheduleGrade']").val()));
     $(".gradeID").val(JSON.parse(localStorage.getItem('currentDate')));
    clearScheduleTable();
    getPreSchedule();
   // sendDataToSchedulePage();
  

  });
$(".currentDate").on('change',function(){
   clearScheduleTable();
    localStorage.setItem( 'currentDate', JSON.stringify($(this).val()));
     $(".currentDate").val(JSON.parse(localStorage.getItem('currentDate')));
     getPreSchedule();

    
});


  


$(".btn_edit").on("click",function(){
 
  $(".toEdit").removeAttr('disabled');
  $(".submitEdit").show();
  $(".btn_cancel").show();
  $(this).hide();
 
});
$(".btn_cancel").on("click",function () {
     $(".toEdit").attr('disabled','true');
    $(".submitEdit").hide();
    $(".btn_edit").show();
    $(this).hide();
})


$(".editPWD").on("click",function(){

   destroyModal();
    generateModalWindows("Изменение пароля");
    generateModalUpdatePWD();
    $(".pwd").on("change",function(){
      console.log($(".pwd").val());
       console.log(validPassword('.pwd','.Confirmpwd'));
      if(!validPassword(".pwd",".Confirmpwd"))
        $(".btn_updatepwd").hide();
      else
        $(".btn_updatepwd").show();
    })
    $(".Confirmpwd").on("change",function(){
      console.log($(".Confirmpwd").val());
       console.log(validPassword('.pwd','.Confirmpwd'));
      if(!validPassword(".pwd",".Confirmpwd"))
        $(".btn_updatepwd").hide();
      else
        $(".btn_updatepwd").show();
    })

    if($(".Confirmpwd").val()!="" && $(".pwd").val()!="" && validPassword('.pwd','.Confirmpwd'))
        $(".btn_updatepwd").show();
   

});



});

function clearScheduleTable() {
  
   $('.t1 td').html("");
      $('.t2 td').html("");
      $('.t3 td').html("");
      $('.t4 td').html("");
      $('.t5 td').html("");
      $('.t6 td').html("");
      $('.t1 td:first-child').html("08:30-10:05");
      $('.t2 td:first-child').html("10:15-11:50");
      $('.t3 td:first-child').html("12:00-13:30");
      $('.t4 td:first-child').html("14:00-15:30");
      $('.t5 td:first-child').html("15:50-17:25");
      $('.t6 td:first-child').html("17:35-19:10");


}

function isDateChanged(){
  /*if(JSON.parse(localStorage.getItem('currentDate'))!=""){
    dateStr=localStorage.getItem('currentDate')
  
    console.log(JSON.parse(localStorage.getItem('currentDate')));
    $(".currentDate").val(JSON.parse(localStorage.getItem('currentDate')));
    //localStorage.removeItem('currentDate');
  }
*/

}

function clearLocalStorage() {
 //localStorage.removeItem('currentDate');
}

function sendDataToSchedulePage() {
  try{
 $.each(JSON.parse(localStorage.getItem('sendedData')),function (index,element) {
   var toDateFormat=element.dateSchedule.split("-");
        //sendDataToOtherPage=JSON.parse(localStorage.getItem('sendedData'));
      var d=new Date(toDateFormat[0],toDateFormat[1]-1,toDateFormat[2]);
    
      addToDiv="";
      element.dateSchedule=toDateFormat[2]+"-"+toDateFormat[1]+"-"+toDateFormat[0];

      whereToAppend=$('table').find('08:30-10:05').prevObject[0].rows[1].className;
      if(d.getDay()==1){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';
      
        
        if(element.Time==="08:30-10:05")
          $(".mondayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".mondayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".mondayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".mondayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".mondayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".mondayt6").append(addToDiv);
        
      console.log(element.Time==="08:30-10:05");
         
    
      }
      if(d.getDay()==2){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';

        if(element.Time==="08:30-10:05")
          $(".tuesdayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".tuesdayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".tuesdayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".tuesdayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".tuesdayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".tuesdayt6").append(addToDiv);
      }
      if(d.getDay()==3){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';

       if(element.Time==="08:30-10:05")
          $(".wednesdayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".wednesdayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".wednesdayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".wednesdayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".wednesdayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".wednesdayt6").append(addToDiv);
      }
      if(d.getDay()==4){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';

       if(element.Time==="08:30-10:05")
          $(".thursdayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".thursdayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".thursdayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".thursdayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".thursdayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".thursdayt6").append(addToDiv);
      }
      if(d.getDay()==5){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';

       if(element.Time==="08:30-10:05")
          $(".fridayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".fridayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".fridayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".fridayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".fridayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".fridayt6").append(addToDiv);
      }
      if(d.getDay()==6){
        addToDiv='<div>'+
      '<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13 ">'+
      element.coursName+'</span>'+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Time+'</div>'+
        '<div class="margin-10px-top font-size14">'+element.Firstname+' '+element.name+' '+element.Lastname+'</div>'+
        '<div class="margin-10px-top font-size14" mondayscheduleDate>'+element.dateSchedule+'</div>';

        if(element.Time==="08:30-10:05")
          $(".saturdayt1").append(addToDiv);
        if(element.Time==="10:15-11:50")
          $(".saturdayt2").append(addToDiv);
        if(element.Time==="12:00-13:30")
          $(".saturdayt3").append(addToDiv);
        if(element.Time==="14:00-15:30")
          $(".saturdayt4").append(addToDiv);
        if(element.Time==="15:50-17:25")
          $(".saturdayt5").append(addToDiv);
        if(element.Time==="17:35-19:10")
          $(".saturdayt6").append(addToDiv);
      }
     addToDiv="";
 });
}catch(erro)
{
  
}
}






function getPreSchedule(){
 
  $.ajax({
    url:'./../../Admin/scheduleList/',
    type: 'POST',
    data:{"teacherScheduleGrade":$("select[name='teacherScheduleGrade']").val(),"date1":$(".currentDate ").val()},
    dataType:'JSON',
    success:function (data) {
      let sendDataToOtherPage;
     
     $.each(data,function(index,element){
      var toDateFormat=element.dateSchedule.split("-");
        sendDataToOtherPage=data;
      
     });
      localStorage.setItem( 'sendedData', JSON.stringify(sendDataToOtherPage));
      sendDataToSchedulePage();
      console.log(data);
      console.log(sendDataToOtherPage);
      
    },
    error:function error(response,status,error)
    {
      console.log(response.error);
      console.log(response.status)
      //console.log(response.responseText);
    }
  });

}




function getTeacherListByGardeAndSubject(appendTo) {
 
    $.ajax({
    url:'./../../Admin/getTeacherListByGardeAndSubject/',
    type: 'POST',
    data:{"coursID":$(".idCours").val()},
    dataType:'JSON',
    success:function (data) {
      $(appendTo).html("");

       selectTeacher="";
       imgURL="http://localhost/CI/uploads/4261.jpg";
          selectTeacher+='<select name="id_teacherSchedule" id="id_teacherSchedule">'+
          '<option value="'+0+'" > преподавателя</option>';
          $.each(data,function(index,element) {
            imgURL="http://localhost/CI/"+element.picture;
            //imgURL="https://i.imgur.com/XkuTj3B.png";
            console.log(imgURL);
            selectTeacher+='<option value="'+element.id_teacher+'"data-imagesrc="'+imgURL+'">'+element.Firstname+" "+element.name+" "+element.Lastname+'</option>'
          });
          selectTeacher+='</select>';
         $(appendTo).append(selectTeacher);
         
          $("#id_teacherSchedule").ddslick({
      width:"200px",
      height:"80px",
      imagePosition:"left",
      onSelected: function(data){
        console.log("form cours")
        console.log(data);
        //console.log(data.selectedData.value);
        $(".teacherId").val(data.selectedData.value)
     
        
    } 
    });
      console.log(data);
    },
    error:function error(response,status,error)
    {
      console.log(response.error);
      console.log(response.responseText);
    }
  });


}

function reverseStr(str){
  return str.split("").reverse().join("");
}

function setDate(place){
  var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);

var today =day+"."+month+"."+now.getFullYear();
  //document.getElementsByClassName('.currentDate').valueAsDate=reverseStr(today);
  if( $('.form-group').find(place).val()=="")
    $('.form-group').find(place).val(now.getFullYear()+"-"+month+"-"+day);

}

function getObjectSubjectByGrade(appendTo,className){

   $.ajax({
    url:'./../../Admin/getObjectSubjectByGrade/',
    type: 'POST',
    data:{"id_grade":$(".gradeID").val()},
    dataType:'JSON',
    success:function (data) {
       selectCours="";
          selectCours+='<select name="id_cours" class="'+className+'">'+
          '<option value="'+0+'">Выберите дисциплину</option>';
          $.each(data,function(index,element) {
            selectCours+='<option value="'+element.id_cours+'">'+element.name;+'</option>'
          });
          selectCours+='</select>';
        
         $(appendTo).append(selectCours);
          selectCours="";
      console.log(data);
    },
    error:function error(response,status,error)
    {
      console.log(response.error);
      console.log(response.responseText);
    }
  });
  

}
 function getTeacher() {
  $.ajax({
    url:'./../../Admin/getTeacherByCours/',
    type: 'POST',
    data:{"id_grade":$(".assignSubject").val()},
    dataType:'JSON',
    success:function (data) {
      console.log(data);
    },
    error:function error(response,status,error)
    {
      console.log(response.error);
    }
  });
  

}



 

function getTeacherList(appendTo){
     
  $.ajax({
    url:'./../../Admin/getTeacherList/',
    type: 'POST',
    data:{"id_teacher":$(".gradeID").val()},
    dataType:'JSON',
    success:function (data) {
      $(appendTo).html("");

       selectTeacher="";
       imgURL="http://localhost/CI/uploads/4261.jpg";
          selectTeacher+='<select name="id_teacher" id="id_teacher">'+
          '<option value="'+0+'" > преподавателя</option>';
          $.each(data,function(index,element) {
            imgURL="http://localhost/CI/"+element.picture;
            //imgURL="https://i.imgur.com/XkuTj3B.png";
            console.log(imgURL);
            selectTeacher+='<option value="'+element.id_teacher+'"data-imagesrc="'+imgURL+'">'+element.Firstname+" "+element.name+" "+element.Lastname+'</option>'
          });
          selectTeacher+='</select>';
         $(appendTo).append(selectTeacher);
         
          
      console.log(data);
    },
    error:function error(response,status,error)
    {
      console.log(response.error);
      console.log(response.responseText);
    }
  });

}


function generateModalUpdatePWD() {
  let form="";
  form='<form class="card form-horizontal" method="Post" action="./../../Admin/UpdatePasswordFromProfile/">'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">Новый пароль</label>'+
      '<div class="col-sm-10">'+
      '<input type="password" name="pwd" class="pwd" id="pwd" required>'+
      '</div>'+
      '</div>'+
      '<div class="form-group  ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">Повторите пароль</label>'+
      '<div class="col-sm-10">'+
        '<input type="password" name="Confirmpwd" class="Confirmpwd" id="Confirmpwd" required>'+
      '</div>'+
    '</div>'+
    '</div>'+
     '<div class="form-group">'+
        '<input type="submit" value="Назначить" class="btn float-right login_btn btn_updatepwd">'+
    '</div></form>';
  $('.modalBody').append(form);
}


function validPassword(pwd1,pwd2) {
  if($(pwd1).val()!=$(pwd2).val())
    return false
  else
    return true;
}



function generateModalSchedule(actionName) {
 
let form="";
  form='<form class="card form-horizontal" method="Post" action="'+actionName +'">'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">Выберите уровень:</label>'+
      '<div class="col-sm-10 levelSubject">'+
      '</div>'+
      '</div>'+
      '<div class="form-group showSubjectDiv showSubjectScheduleDiv">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">дисциплина:</label>'+
      '<div class="col-sm-10 SubjectiSTeachedInLevel">'+
      '</div>'+
    '</div>'+
    '</div>'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">преподаватель:</label>'+
      '<div class="col-sm-10 TeacherInLevel ">'+
      '</div>'+
    '</div>'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">Дата:</label>'+
      '<div class="col-sm-10 ">'+
      '<input type="date" name="dateSchedule" class="dateSchedule" id="dateSchedule">'+
      '</div>'+
    '</div>'+
    '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">преподаватель:</label>'+
      '<div class="col-sm-10">'+
      '<select class="timesMultiselect" name="timeSchedule[]" multiple="multiple">'+
      '<option value="08:30-10:05">08:30-10:05</option>'+
      '<option value="10:15-11:50">10:15-11:50</option>'+
      '<option value="12:00-13:30">12:00-13:30</option>'+
      '<option value="14:00-15:30">14:00-15:30</option>'+
      '<option value="15:50-17:25">15:50-17:25</option>'+
      '<option value="17:35-19:10">17:35-19:10</option>'+
      '</select>'+
      '</div>'+
    '</div>'+
    '<input type="hidden" class="teacherId" name="teacheID">'+
    '<div class="form-group">'+
        '<input type="submit" value="Назначить" class="btn float-right login_btn confirm_btn">'+
    '</div></form>';
  $('.modalBody').append(form);

}


function validateSchedule() {
  if($(".gradeID").val()==0){
     $(".showSubjectDiv").hide();
  }
  else{
    $(".showSubjectDiv").show();
  }
}


function getStudentList(){

  $.ajax({
        url: './../../Admin/AllStudent',
        type: 'POST',
        data: {"id_student":'1'},
        dataType:'JSON',
        success: function (data) {
          selectStudent="";
          selectStudent+='<div class="form-group">'+
                            '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Выберите студента:</label>'+
                            '<div class="col-sm-10">'+
                              '<select name="id_student">';
          $.each(data,function(index,element) {
            selectStudent+='<option value="'+element.id_student+'">'+element.Firstname+" "+element.Lastname+
            " "+element.name+'</option>'
          });
          selectStudent+='</div></div>';
          selectStudent+='</select>';
          selectStudent+='<div class="form-group">'+
              '<input type="submit" value="Сохранить" class="btn float-right login_btn">'+
              '</div></div></form>';
          $('.teacherForm').append(selectStudent);
          selectStudent="";
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });

}

function getLevel(appendTo){
  $.ajax({
        url: './../../Admin/Levels',
        type: 'POST',
        data: {"id_grade":'1'},
        dataType:'JSON',
        success: function (data) {
          selectLevel="";
          selectLevel+='<select name="id_grade" class="gradeID">';

          $.each(data,function(index,element) {
            selectLevel+='<option value="'+element.id_grade+'">'+element.gradeName;+'</option>'
          });
          selectLevel+='</select>';
         // $('.levelStudent').append(selectLevel);
         $(appendTo).append(selectLevel);
          selectLevel="";
          console.log(data);
         // data=[];
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
}

function getLevelOnChange(appendTo){
  $.ajax({
        url: './../../Admin/Levels',
        type: 'POST',
        data: {"id_grade":'1'},
        dataType:'JSON',
        success: function (data) {
          selectLevel="";
          selectLevel+='<select name="id_grade" class="gradeID">'+
          '<option value="'+0+'">Выберите уровень</option>';
          $.each(data,function(index,element) {
            selectLevel+='<option value="'+element.id_grade+'">'+element.gradeName;+'</option>'
          });
          selectLevel+='</select>';
         // $('.levelStudent').append(selectLevel);
         $(appendTo).append(selectLevel);
          selectLevel="";
          console.log(data);
         // data=[];
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
}


function getObjectData(ToSend,a,url) 

      {
      $.ajax({
        url: url,
        type: 'POST',
        data: {"id_student":a},
        dataType:'JSON',
        success: function (data) {
          
          $.each(data,function(index,element) {
            $("#Firstname").val(element.Firstname);
            $("#name").val(element.name);
            $("#Lastname").val(element.Lastname);
            $("#phone").val(element.phone);
            $("#dateBirth").val(element.dateBirth);
            $('select option[value="'+element.id_grade+'"]').attr("selected",true);

          });
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
  }


function getObjectTeacher(a,url) 

      {
      $.ajax({
        url: url,
        type: 'POST',
        data: {"id_teacher":a},
        dataType:'JSON',
        success: function (data) {
          $.each(data,function(index,element) {
            $("#Firstname").val(element.Firstname);
            $("#name").val(element.name);
            $("#Lastname").val(element.Lastname);
            $("#phone").val(element.phone);
            $("#dateBirth").val(element.dateBirth);

          });
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
  }


function getObjectSubject(a,url) 

      {
      $.ajax({
        url: url,
        type: 'POST',
        data: {"id_cours":a},
        dataType:'JSON',
        success: function (data) {
          $.each(data,function(index,element) {
            $("#name").val(element.name);
            $("#description").val(element.description);
            $('select option[value="'+element.id_grade+'"]').attr("selected",true);
            $('#old_id_grade').val(element.id_grade);
          });
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
  }

function generateModalWindows(modalTitle){
	
	destroyModal();
	 //Creation de la fenetre registration
    modalWindow=document.createElement('div');

    modalWindow.className="modalWindow";
    //Ou griffer le modal
    BodyContent=document.querySelector("#contentCategory")
    //Creation du header
    modalHeader=document.createElement('div');


    btnClose=document.createElement('button');
    btnClose.className="btnClose"
    modalHeader.appendChild(document.createTextNode(modalTitle));
    
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

    modalWindow.appendChild(modalHeader);
    modalWindow.appendChild(modalBody);
    modalWindow.appendChild(modalFooter);
    BodyContent.append(modalWindow);

    console.log(modalWindow);

}


function deleteObject(actionName,id,idName) {
  let form="";
  form='<form class="card form-horizontal" method="Post" action="'+actionName +'">'+
      '<div class="form-group">'+
        '<p class="deleteMSG" style="margin-left:10px; color:white;">Вы действительно хотите удалить</p>'+
      '</div>'+
      '<input type="hidden" value="'+id+'" name="'+idName+'">'+
    '<div class="form-group">'+
        '<input type="submit" value="Да" class="btn float-right login_btn confirm_btn">'+
    '</div></form>';
  $('.modalBody').append(form);

}

function modalAssignSubject(actionName)
{
  let form="";
  form='<form class="card form-horizontal" method="Post" action="'+actionName +'">'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">Выберите уровень:</label>'+
      '<div class="col-sm-10 levelSubject">'+
      '</div>'+
      '</div>'+
      '<div class="form-group showSubjectDiv">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">дисциплина:</label>'+
      '<div class="col-sm-10 SubjectiSTeachedInLevel">'+
      '</div>'+
    '</div>'+
    '</div>'+
      '<div class="form-group ">'+
      '<label class="control-label col-sm-3 text-white" for="name" style="color:white;">преподаватель:</label>'+
      '<div class="col-sm-10 TeacherInLevel">'+
      '</div>'+
    '</div>'+
    '<input type="hidden" class="teacherId" name="teacheID">'+
    '<div class="form-group">'+
        '<input type="submit" value="Назначить" class="btn float-right login_btn confirm_btn">'+
    '</div></form>';
  $('.modalBody').append(form);
}


function SubjectModal(url,id) {
  
  let form=""

form='<form class="card form-horizontal" method="Post" action="'+url+'" enctype="multipart/form-data">'+
      '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Наименование:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="name" placeholder="Наименование" name="name">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Описание:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="description" placeholder="Описание" name="description">'+
      '</div>'+
    '</div>'+
    '<div class="form-group ">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Описание:</label>'+
      '<div class="col-sm-10 level">'+
      
      '</div>'+
    '</div>'+
    '<input type="hidden" name="id_cours" value="'+id+'">'+
    '<input type="hidden" name="old_id_grade" id="old_id_grade">'+
  '<div class="card-header">'+
  '<div class="form-group">'+
    '<input type="submit" value="Сохранить" class="btn float-right login_btn">'+
'</div></div></form>';
  
$('.modalBody').append(form);


}
function addStudentForm(){

let form=""

form='<form class="card form-horizontal levelStudent" method="Post" action="./../../Admin/addStudent/" enctype="multipart/form-data">'+
      '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Фамилия:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Firstname" placeholder="Фамилия" name="Firstname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Имя:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="name" placeholder="Имя" name="name">'+
      '</div>'+
    '</div>'+
   '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Lastname" style="color:white;">Отчество:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Lastname" placeholder="Отчество" name="Lastname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="phone" style="color:white;">Телефон:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="phone" placeholder="Телефон" name="phone">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="dateBirth" style="color:white;">Дата рождения:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="date" class="form-control" id="dateBirth" placeholder="Дата рождения" name="dateBirth">'+
      '</div>'+
    '</div>'+

  '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Фото:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="file" class="form-control" id="picture" name="picture">'+
      '</div>'+
    '</div>'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Выберите студента:</label>'+
        '<div class="col-sm-10 level">'+
         '</div>'+
    '</div>'+
    '<div class="card-header">'+
      '<div class="form-group">'+
        '<input type="submit" value="Сохранить" class="btn float-right login_btn">'+
    '</div></div></form>';

$('.modalBody').append(form);

}
function destroyModal(){

    try{
        document.querySelector(".modalWindow").remove();
    }catch(error){

    }
}
async function editStudentInfo(id) {
	let form=""

form='<form id="editStudent" class="card levelStudent" method="Post" action="./../../Admin/UpdateCategory/" enctype="multipart/form-data">'+
'<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Фамилия:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Firstname" placeholder="Фамилия" name="Firstname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Имя:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="name" placeholder="Имя" name="name">'+
      '</div>'+
    '</div>'+
   '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Lastname" style="color:white;">Отчество:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Lastname" placeholder="Отчество" name="Lastname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="phone" style="color:white;">Телефон:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="phone" placeholder="Телефон" name="phone">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="dateBirth" style="color:white;">Дата рождения:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="date" class="form-control" id="dateBirth" placeholder="Дата рождения" name="dateBirth">'+
      '</div>'+
    '</div>'+
  '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Фото:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="file" class="form-control" id="picture" name="picture" onchange="uploadFile()">'+
      '</div>'+
    '</div>'+
    '<input type="hidden" name="id_student" value="'+id+'">'+
    '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Выберите студента:</label>'+
        '<div class="col-sm-10 level">'+
         '</div>'+
    '</div>'+
    '<div class="card-header">'+
      '<div class="form-group">'+
        '<input type="submit" value="Сохранить" class="btn float-right login_btn">'+
    '</div></div></form>';
  
$('.modalBody').append(form);
}

function uploadFile() 
     {

      $.ajax({
        url: './../../Admin/do_upload/',
        type: 'POST',
        data: new FormData(editStudent),
        contentType:false,
        processData:false,
        cache:false,
        dataType:'JSON',
        success: function (data) {
        
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
}

function getAvatar($id){
  avatar= '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Имя:</label>'+
      '<div class="col-sm-10">'+
        '<li class="nav-item text-nowrap">'+
        '<img src="" style="width: 40px;height: 40px;margin-top: 4px;margin-bottom:auto;" id="avatar">'+
        '</li>'+
      '</div>'+
    '</div>';
    $.ajax({
        url: './../../Admin/do_upload/',
        type: 'POST',
        data: new FormData(editStudent),
        contentType:false,
        processData:false,
        cache:false,
        dataType:'JSON',
        success: function (data) {
        
          console.log(data);
        },
        error: function(request, status, error)
        {
          console.log(request.error);
          console.log(request.status);

        }
    });
    $(".modalBody").append(avatar);
}


function addTeacherForm(url,id){

let form=""

form='<form class="card form-horizontal teacherForm" method="Post" action="'+url+'" enctype="multipart/form-data">'+
      '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Firstname" style="color:white;">Фамилия:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Firstname" placeholder="Фамилия" name="Firstname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="name" style="color:white;">Имя:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="name" placeholder="Имя" name="name">'+
      '</div>'+
    '</div>'+
   '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="Lastname" style="color:white;">Отчество:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="Lastname" placeholder="Отчество" name="Lastname">'+
      '</div>'+
    '</div>'+
  '<div class="form-group">'+
      '<label class="control-label col-sm-2 text-white" for="phone" style="color:white;">Телефон:</label>'+
      '<div class="col-sm-10">'+
        '<input type="text" class="form-control" id="phone" placeholder="Телефон" name="phone">'+
      '</div>'+
    '</div>'+
    '<div class="form-group"><label class="control-label col-sm-2" for="position" style="color:white;">Дата рождения:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="date" class="form-control" id="dateBirth" placeholder="Дата рождения" name="dateBirth">'+
      '</div>'+
    '</div>'+
  '<div class="form-group"><label class="control-label col-sm-2" for="pwd" style="color:white;">Фото:</label>'+
      '<div class="col-sm-10">'+          
        '<input type="file" class="form-control" id="picture" name="picture">'+
      '</div>'+
    '</div>'+
    '<input type="hidden" name="id_teacher" value="'+id+'">'+
  '<div class="card-header">'+
  '<div class="form-group">'+
    '<input type="submit" value="Сохранить" class="btn float-right login_btn">'+
'</div></div></form>';

$('.modalBody').append(form);

}