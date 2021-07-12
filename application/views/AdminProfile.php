      <button  style="float: right;" class="editPWD">Сменить пароль</button>
    <form method="Post" action="./../EditAdminData/" class="adminForm justify-content-center">
       <?php  foreach($notes as $key) { ?>

        <div class="form-group">
          <label for="email">Логин</label>
          <input type="email" class="form-control tocenter" id="email" aria-describedby="emailHelp" value="<?php echo $key->email?>" disabled >


        </div>
         <input type="hidden" class="form-control tocenter" id="email" aria-describedby="emailHelp" value="<?php echo $key->email?>"  name="email">
         <div class="form-group">
          <label for="Firstname">Фамилия</label>
          <input type="text" class="form-control tocenter toEdit" id="Firstname" value="<?php echo $key->Firstname?>" disabled name="Firstname">
        </div>

         <div class="form-group">
          <label for="name">Имя</label>
          <input type="text" class="form-control tocenter toEdit" id="name" aria-describedby="name" value="<?php echo $key->name?>" disabled name="name">
        </div>

       <div class="form-group">
          <label for="name">Отчество</label>
          <input type="text" class="form-control tocenter toEdit" id="Lastname" aria-describedby="name" value="<?php echo $key->Lastname?>" disabled name="Lastname">
        </div>
        <input type="button" name="edit" value="Изменить данные" style="float: right;" class="btn_edit">
          <input type="button" name="cancel" value="Отменить" style="float: right; display: none;" class="btn_cancel" >
        <input type="submit" name="submitEdit" value="Сохранить изменения" style="display:none;" class="submitEdit">
      <?php }?>
    </form>

   
 
