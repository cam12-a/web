
<button style="float: right;" class="addSubject"><i class="glyphicon glyphicon-plus"></i></button>
<div id="error">
  <p class="errorText" style="color:red"><?php echo $error?></p>
</div>
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Наименование</th>
      <th>Описание</th>
      <th>Уровень</th>
    </tr>
  </thead>
  <tbody>
    <?php  foreach($notes as $key) { ?>
          <tr class="editSubject">
          <th scope="row" class="id_student"><?php echo $key->id_cours?></th>
          <td><?php echo $key->name?></td>
          <td><?php echo $key->description?></td>
          <td><?php echo $key->gradeName?></td>
          <td><i class="glyphicon glyphicon-trash deleteSubject"></i><?php echo '<input type="hidden" value="'.$key->id_cours.'" name="id_cours" class="id_cours">'?></td>
        </tr>
    <?php }?>
  </tbody>
</table>

