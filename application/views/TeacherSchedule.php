

<div  class="container">
	<div id="error">
	<p class="errorText" style="color:red"><?php echo $error?></p>
</div>

<div class="timeTableNav">
	<button  class="assignSubject timeTableItem" >Назначить дисциплину</button>
	<button  class="addSchedule timeTableItem">Составить расписание</button>
	<form class="timeTableItem form-group" method="POST" action="./../../schedule/">
		<input type="date" name="date1" class="currentDate" value="<?php echo date("Y-m-d")?>" onchange="isDateChanged()">
		<select id="teacherScheduleGrade" name="teacherScheduleGrade" class="timeTableItem"> 
		<?php foreach($level as $key){?>
			<option  value=<?php echo $key->id_grade?>><?php echo $key->gradeName?> </option>
		<?php }?>
	</select>
	</form>

	
</div>



								<div class="timetable-img text-center">
										<img src="img/content/timetable.png" alt="">
								</div>
								<div class="table-responsive">
										<table class="table table-bordered text-center">
												<thead>
														<tr class="bg-light-gray">
																<th class="text-uppercase">Время</th>
																<th class="text-uppercase">Понедельник</th>
																<th class="text-uppercase">Вторник</th>
																<th class="text-uppercase">Среда</th>
																<th class="text-uppercase">Четверг</th>
																<th class="text-uppercase">Пятница</th>
																<th class="text-uppercase">Суббота</th>
														</tr>
												</thead>
												<tbody>
													<?php 
															$data=["08:30-10:05","10:15-11:50","12:00-13:30","14:00-15:30","15:50-17:25","17:35-19:10"];
															$className=['t1','t2','t3','t4','t5','t6'];
														for($i=0;$i<count($data);$i++){
															echo '<tr class="'.$className[$i].'" >
																		<td class="align-middle time">'.$data[$i].'</td>
																		<td class="monday'.$className[$i].'">
												
																		</td>			

																	<td class="tuesday'.$className[$i].'">
												
																		</td>			

												
																		<td class="wednesday'.$className[$i].'">
														
																		</td>			

									
														
																		<td class="thursday'.$className[$i].'">
														
																		</td>		

																		<td class="friday'.$className[$i].'">
														
																		</td>		


																		<td class="saturday'.$className[$i].'">
														
																		</td>		


															</tr>';
														
														}

														/*foreach($schedule as $key){
															
																	echo '<td class="align-middle">'.$key->Time.'</td>';
																	echo '<td>';
																	if(date('l',strtotime($key->dateSchedule))==="Monday")
																			{
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';
																	}
												
																'</td>';							
															
																echo '<td>';

																			if(date('l',strtotime($key->dateSchedule))==="Tuesday"){
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																	echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';

																	}	
																echo '</td>';


																	echo '<td>';

																			if(date('l',strtotime($key->dateSchedule))==="Wednesday"){
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																	echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';

																	}	
																echo '</td>';
																	echo '<td>';

																			if(date('l',strtotime($key->dateSchedule))==="Thursday"){
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																	echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';

																	}	
																echo '</td>';
																	echo '<td>';

																			if(date('l',strtotime($key->dateSchedule))==="Friday"){
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																	echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';

																	}	
																echo '</td>';
																	echo '<td>';

																			if(date('l',strtotime($key->dateSchedule))==="Saturday"){
																				echo '<div><span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">'.$key->coursName.'</span>
																			
																		</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->Time.'</div>';
																	echo '<div class="margin-10px-top font-size14">'.$key->Lastname.' '.$key->name.' '.$key->Firstname.'</div>';
																		echo '<div class="margin-10px-top font-size14">'.$key->dateSchedule.'</div>';
																	
																	}	
																echo '</td>';
												
														
														}*/
															?>
														
												</tbody>
										</table>
								</div>

							</div>






