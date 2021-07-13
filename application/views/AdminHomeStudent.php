
<button style="float: right;" class="addStudent"><i class="glyphicon glyphicon-plus"></i></button>
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Фамилия</th>
      <th>Имя</th>
      <th>Отчество</th>
      <th>дата рождения</th>
      <th>Фото</th>
    </tr>
  </thead>
  <tbody>
    
    <?php  foreach($notes as $key) { ?>
          <tr class="editCategory">
          <th scope="row" class="id_student"><?php echo $key->id_student ?></th>
          <td><?php echo $key->Firstname ?></td>
          <td><?php echo $key->name?></td>
          <td><?php echo $key->Lastname?></td>
          <td><?php echo $key->dateBirth?></td>
          <td><img src="./../../../<?php echo $key->picture?>" style="width: 40px;height: 40px;margin-top: 4px;margin-bottom:auto;"></td>

          <td><i class="glyphicon glyphicon-trash deleteStdent"></i><?php echo '<input type="hidden" value="'.$key->id_student.'" name="id_student" class="id_student">'?></td>
        </tr>
    <?php }?>
  </tbody>
</table>

               
          