<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}


class Admin extends CI_Controller {

	protected  $link;
	public $setcookie=0;
	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('form', 'url','cookie'));
		
		$this->load->model('ModelStudent');
		$this->load->model('productlist');
		$this->load->model('AdminOrder');
		$this->load->model('statistics');
		$this->load->model('ModelTeacher');
		$this->load->model('AdminSubject');
		$this->load->model('DoUpload');
		$this->load->model('ModelGrade');
		$this->load->model('ModelSchedule');
		$this->load->model("user");
		
	}


	public function index(){
		$data['title']="Панель Адмнинистрирования";
		$data['confirm']="";
		
		$this->load->view('AdminLoginPanel',$data);
		//$this->load->view('footer');
	}


	public function Login()
	{	
		$VerifyAdmin=$this->load->model('AdminLoged');
		$data['title']="Панель Адмнинистрирования";
		$studientList['client']="";
		if(count($this->AdminLoged->VerifyAdminData($this->input->post('email'),sha1($this->input->post('passwd'))))!=0 || $this->isSessionSet()){
			$studientList['notes']=$this->ModelStudent->studientsLists();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHomeStudent',$studientList);
			$this->load->view('footer');
			$session=array('username'=>$this->input->post('email'),'pwd'=>$this->input->post('passwd'));
			$this->session->set_userdata($session);
		}
		else{
			
			redirect('http://'.base_url('index.php/Admin?'.'error=dataIncorrect'));
		}
	}


	public function isSessionSet()
	{
		if(count($this->session->userdata())>2)
			return true;
		else
			return false;
	}


	public function Student()
	{	
		if($this->isSessionSet()){
			$data['title']="Категория";
			$studientList['notes']=$this->ModelStudent->studientsLists();
			$studientList['client']="";

			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHomeStudent',$studientList);
			$this->load->view('footer');
		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}

	}


	public function AllStudent()
	{
		echo json_encode($this->ModelStudent->studientsLists());
	}

	public function getProduct($NameCategory)
	{
		if($this->isSessionSet()){
			$data=[];
			$data=$this->ModelStudent->studientsLists($NameCategory);
			return $data;
		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}


	public function Subject()
	{
		if($this->isSessionSet()){
			$data=[];
			$data['error']="";
			$data['title']="Дисциплина";
			$SubjectData['notes']=$this->AdminSubject->getSubject();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminSubject',$SubjectData);
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));
	}

	public function AddSubject()
	{
		$isItemExist=0;
		if($this->isSessionSet()){
			$SubjectData=array(
				'name'=>$this->input->post('name'),
				'description'=>$this->input->post('description'),
			);
			$id_grade=[];
			
			$id_grade=$this->input->post("id_grade");
			
			$text=mb_strtoupper(mb_substr($this->input->post('name'), 0, 1)) . mb_strtolower(mb_substr($this->input->post('name'), 1));
			
			$id_cours=$this->AdminSubject->returnSubjectID($text);
			//@$this->AdminSubject->getSubjectByLevel($id_grade,$id_cours->id_cours);
			$data['error']="";
			
			
			foreach($this->AdminSubject->getSubject() as $row)
			{
				if($row->id_grade===$id_grade && $row->name===$text){
					$isItemExist=1;
					break;
				}
			}
			//affichage d'erreur en cas de doublons
			if($isItemExist==1)
				$data['error']="Операция не выполнена так как данная дисциплина уже преподается в выбраный уровень";
			else{
				//insertion dans le tableau course_level
				
				@$this->AdminSubject->insertAssignedSubjectByGrade($id_grade,$this->AdminSubject->insertSubjects($SubjectData));
			}

			$data['title']="Дисциплина";
			$SubjectList['notes']=$this->AdminSubject->getSubject();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminSubject',$SubjectList);
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}

	public function DeleteSubject()
	{
		if($this->isSessionSet()){
			$data['error']="";
			$this->AdminSubject->deleteSubject($this->input->post('id_cours'));
			$data['title']="Дисциплина";
			$SubjectList['notes']=$this->AdminSubject->getSubject();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminSubject',$SubjectList);
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}

	public function GetOneSubject()
	{

		echo json_encode($this->AdminSubject->getOneSubject($this->input->post('id_cours')));
		

	}

	public function UpdateSubject()
	{	

		$isItemExist=0;
		if($this->isSessionSet()){
			

			$SubjectData=array(
				'id_cours'=>$this->input->post('id_cours'),
				'name'=>$this->input->post('name'),
				'description'=>$this->input->post('description'),
			);
			$data['error']="";
			$text=mb_strtoupper(mb_substr($this->input->post('name'), 0, 1)) . mb_strtolower(mb_substr($this->input->post('name'), 1));
			//echo $this->input->post('id_grade'). ' '.$this->input->post('id_cours');
			foreach($this->AdminSubject->getSubject() as $row)
			{
				if($row->id_grade===$this->input->post('id_grade') && $row->name===$text){
					$isItemExist=1;
					break;
				}
			}
			//print_r($this->AdminSubject->getSubjectByLevel($this->input->post('id_grade'),$this->input->post('id_cours')));
			//if(count(@$this->AdminSubject->getSubjectByLevel($this->input->post('id_grade'),$this->input->post('id_cours')))==1){
			
			if($isItemExist==0){
				$this->AdminSubject->updateSubject($SubjectData);
				$this->AdminSubject->updateAssignedSubjectByGrade($this->input->post('id_grade'),$this->input->post('id_cours'),$this->input->post('old_id_grade'));
				$data['confirm']="Изменение успешно выполнено";
			}	
			else
				$data['error']="Операция не выполнена так как данная дисциплина уже преподается в выбраный уровень";

			
			$data['title']="Дисциплина";
			$SubjectList['notes']=$this->AdminSubject->getSubject();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminSubject',$SubjectList);
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));
	}

	public function AddStudent()
	{

		if($this->isSessionSet()){
			$picture=$this->do_upload();
			$studentInfo=array(
				'Firstname'=>$this->input->post('Firstname'),
				'Lastname'=>$this->input->post('Lastname'),
				'name'=>$this->input->post('name'),
				'phone'=>$this->input->post('phone'),
				'picture'=>$this->returnLink(),
				'dateBirth'=>$this->input->post('dateBirth'),
				'id_grade'=>$this->input->post('id_grade'),
			);
			
			
			$this->ModelStudent->addStudent($studentInfo);
			$data['title']="Категория";
			$studientList['notes']=$this->ModelStudent->studientsLists();
			$studientList['client']="dffg";
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHomeStudent',$studientList);
			$this->load->view('footer');
			//$this->load->view('AdminHomeStudent',$picture);
			

			
		}

		else
			redirect('http://'.base_url('index.php/Admin'));
	}

	public function studentJSONData()
	{	
		echo json_encode($this->ModelStudent->getStudentInfo($this->input->post('id_student')));
	}

	public function DeleteStudent()
	{
		if($this->isSessionSet()){
			$this->ModelStudent->deleteCategory($this->input->post('id_student'));
			$studientList['notes']=$this->ModelStudent->studientsLists();
			$studientList['client']="";
			$data['title']="Категория";
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHomeStudent',$studientList);
			$this->load->view('footer');
		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}


	public function UpdateCategory()
	{
		$file=$this->link;
		if($this->isSessionSet()){
			$picture=@$this->do_upload();
			$studientList['client']=$this->returnLink();
			$studentInfo=array(
				'Firstname'=>$this->input->post('Firstname'),
				'Lastname'=>$this->input->post('Lastname'),
				'name'=>$this->input->post('name'),
				'phone'=>$this->input->post('phone'),
				'picture'=>$this->returnLink(),
				'dateBirth'=>$this->input->post('dateBirth'),
				'id_student'=>$this->input->post('id_student'),
				'id_grade'=>$this->input->post('id_grade'),
			);
			
			//$this->DoUpload->pictureUpload($this->input->post('id_student'),$this->returnLink(),'student');
			$this->ModelStudent->updateCategory($studentInfo);
			$data['title']="Категория";
			$studientList['notes']=$this->ModelStudent->studientsLists();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHomeStudent',$studientList);
			$this->load->view('footer');
			

		}
		
		else
			redirect('http://'.base_url('index.php/Admin'));
		
	}


	public function LogOut()
	{
		$session=array('username','pwd');
		$this->session->unset_userdata($session);
		redirect('http://'.base_url('index.php/Admin'));
	}


	public function OrderList()
	{
		if($this->isSessionSet()){
			$data=[];
			$data['title']="Категория";
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminOrder');
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}

	public function Statistics()
	{
		if($this->isSessionSet()){
			$data=[];
			$data['title']="Категория";
			$this->load->view('AdminHeader',$data);
			$this->load->view('Statistics');
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}


	public function Teacher()
	{
		if($this->isSessionSet()){
			$data['title']="Категория";
			$teacherList['notes']=$this->ModelTeacher->teachersLists();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminTeacher',$teacherList);
			$this->load->view('footer');

		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	}
	public function AddTeacher()
	{
		if($this->isSessionSet()){
			$data['title']="Категория";
			$picture=$this->do_upload();
			$teacherData=array(
				'Firstname'=>$this->input->post('Firstname'),
				'Lastname'=>$this->input->post('Lastname'),
				'name'=>$this->input->post('name'),
				'phone'=>$this->input->post('phone'),
				'picture'=>$this->returnLink(),
				'dateBirth'=>$this->input->post('dateBirth'),
			);
			$this->ModelTeacher->addTeacher($teacherData);
			$teacherList['notes']=$this->ModelTeacher->teachersLists();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminTeacher',$teacherList);
			$this->load->view('footer');

		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	}

	public function returnLink(){
		
		return $this->link;
	}
	public	function DeleteTeacher()
	 {
	 	if($this->isSessionSet()){
			$this->ModelTeacher->deleteTeacher($this->input->post('id_teacher'));
			$studientList['notes']=$this->ModelTeacher->teachersLists();
			$data['title']="Категория";
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminTeacher',$studientList);
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));
	 } 
	 public function UpdateTeacher()
	 {
	 	if($this->isSessionSet()){
	 		$picture=$this->do_upload();
			
			$data['title']="Категория";
			$teacherData=array(
				'Firstname'=>$this->input->post('Firstname'),
				'Lastname'=>$this->input->post('Lastname'),
				'name'=>$this->input->post('name'),
				'phone'=>$this->input->post('phone'),
				'picture'=>$this->returnLink(),
				'dateBirth'=>$this->input->post('dateBirth'),
				'id_teacher'=>$this->input->post('id_teacher'),
			);
			$this->ModelTeacher->updateTeacher($teacherData);
			$teacherList['notes']=$this->ModelTeacher->teachersLists();
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminTeacher',$teacherList);
			$this->load->view('footer');

		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	 }


	 public function getTeacherList()
	 {
	 	if($this->isSessionSet()){
	 		
			echo json_encode($this->ModelTeacher->teachersLists());
		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	 }



	 public function getTeacherInfo()
	 {
		echo json_encode($this->ModelTeacher->getteacherInfo($this->input->post('id_teacher')));
	 	
	 }


	 public function getObjectSubjectByGrade()
	 {
	 	//var_dump($this->AdminSubject->listObjectSubjectByGrade($this->input->post('id_grade')));
	 	echo json_encode($this->AdminSubject->listObjectSubjectByGrade($this->input->post('id_grade')));
	 }







	 public function schedule()
	 {
	 	if($this->isSessionSet()){
			$data['title']="Расписание";
			$data['error']="";
			define('TIMEZONE', 'Europe/Moscow');
			date_default_timezone_set(TIMEZONE);
			$data['level']=$this->ModelGrade->getGrade();
			if($this->input->post("teacherScheduleGrade"))
				$id_grade=$this->input->post("teacherScheduleGrade");
			else
				$id_grade="1";
			if($this->input->post("date1"))
				$date1=$this->input->post("date1");
			else
				$date1=date("Y-m-d", strtotime('monday this week'));

			$date2= date("Y-m-d", strtotime('sunday this week'));
		
			
			$data['schedule']=$this->ModelSchedule->allScheduleInfo($id_grade,$date1,$date2);
			$data['hours']=$this->ModelSchedule->distinctHours($id_grade,$date1,$date2);
			
			$this->load->view('AdminHeader',$data);
			$this->load->view('TeacherSchedule',$data);
			$this->load->view('footer');
			json_encode($this->ModelSchedule->allScheduleInfo($id_grade,$date1,$date2));
		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	 }


	 public function scheduleList()
	 {
	 	define('TIMEZONE', 'Europe/Moscow');
		date_default_timezone_set(TIMEZONE);
		$data['level']=$this->ModelGrade->getGrade();
		if($this->input->post("teacherScheduleGrade"))
			$id_grade=$this->input->post("teacherScheduleGrade");
		
		if($this->input->post("date1"))
			$date1=$this->input->post("date1");
		else
			$date1=date("Y-m-d", strtotime('monday this week'));

		$date2= date("Y-m-d", strtotime('sunday this week'));
		
			
		echo json_encode($this->ModelSchedule->allScheduleInfo($id_grade,$date1,$date2));
	 }

	 public function getSubjectToAssign()
	 {
	 	if($this->isSessionSet()){
			$data['title']="Расписание";
			$data['level']=$this->ModelGrade->getGrade();
			$this->load->view('AdminHeader',$data);
			$this->load->view('TeacherSchedule');
			$this->load->view('footer');

			$this->Levels();
		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
	 }

	 public function Levels()
	 {
	 	echo  json_encode($this->ModelGrade->getGrade());
	 }
	public function do_upload()
	{
		$config = array(
		'upload_path' => "./uploads/",
		'allowed_types' => "gif|jpg|png|jpeg|pdf",
		'overwrite' => TRUE,
		'max_size' => "3048000", // Can be set to particular file size , here it is 2 MB(2048 Kb)
		'max_height' => "6000",
		'max_width' => "6000"
		);

		$this->load->library('upload', $config);
		if($this->upload->do_upload('picture'))
		{
			$data = $this->upload->data();
			//$this->DoUpload->pictureUpload()
			//$this->load->view('AdminHomeStudent',$data);
		}
		else
		{
			$error = array('error' => $this->upload->display_errors());
			//$this->load->view('AdminHomeStudent', $error);
		}
		@$this->link='uploads/'.$data['client_name'];
		$this->returnLink();
		json_encode($data);

	}


	public function AssignSubject(){
		if($this->isSessionSet())
		{
			$id_cours=$this->input->post('id_cours');
			$id_teacher=$this->input->post('teacheID');
			if($id_teacher==0) return;
			
			$isItemExist=0;
		
			foreach($this->AdminSubject->coursTeachedBySpecificTeacher($id_teacher) as $rows){
				if($rows->id_cours===$id_cours){
					$isItemExist=1;
					break;
				}

			}
			if($isItemExist==0){
				$data['error']="Дисциплина успешна назначена";
				@$this->AdminSubject->assignSubject($id_cours,$id_teacher);
			}
			else
				$data['error']="Операция не выполнена так как данная дисциплина уже преподается в выбраный уровень";


			$data['title']="назначение дисциплины";
			$data['level']=$this->ModelGrade->getGrade();
			$this->load->view('AdminHeader',$data);
			$this->load->view('TeacherSchedule');
			$this->load->view('footer');

		}
		else
			redirect('http://'.base_url('index.php/Admin'));

	}


	public function AddSchedule()
	{	
		$isItemExist=0;
		$err="1";
		$data['error']="";
		$isPossibleToInsertSchedule=[];
		if($this->isSessionSet()){
			$id_grade=$this->input->post('id_grade');
			$id_cours=$this->input->post("id_cours");
			$id_teacher=$this->input->post('teacheID');
			$dateSchedule=$this->input->post('dateSchedule');
			$timeSchedule=$this->input->post('timeSchedule');
			$scheduleByLevel=$this->ModelSchedule->getScheduleByLevel($id_grade);
			
			$errorWhileInserting=[]	;
			$errCount=0;
			
			foreach($timeSchedule as $key){
			
				$dataSchedule=array(
				'id_subject'=>$id_cours,
				'dateSchedule'=>$dateSchedule,
				'timeSchedule'=>$key,
				'id_grade'=>$id_grade,
				'id_teacher'=>$id_teacher
			);
				//var_dump($this->ModelSchedule->isGenerationPossible($dataSchedule));
				if(count($this->ModelSchedule->isGenerationPossible($dataSchedule))===0){
					$this->ModelSchedule->generateSchedule($dataSchedule);
					$data['error']="Дисциплина успешно внесено в расписании";
				}
				else{
					$data['error']="Ошибка при вненесении проверяйте данные, некоторые данные не были вненсены";
				}
				
				

			}


			if($this->input->post("teacherScheduleGrade"))
				$id_grade=$this->input->post("teacherScheduleGrade");
			else
				$id_grade=date("Y-m-d", strtotime('monday this week'));
			if($this->input->post("date1"))
				$date1=$this->input->post("date1");
			else
				$date1=date('Y-m-d');

			$date2= date("Y-m-d", strtotime('sunday this week'));
		
			
			$data['schedule']=$this->ModelSchedule->allScheduleInfo($id_grade,$date1,$date2);
			$data['hours']=$this->ModelSchedule->distinctHours($id_grade,$date1,$date2);
			$data['title']="Расписание";
			$data['level']=$this->ModelGrade->getGrade();
			$this->load->view('AdminHeader',$data);
			$this->load->view('TeacherSchedule',$data);
			$this->load->view('footer');
		}
		else
			redirect('http://'.base_url('index.php/Admin'));
			
	}


	public function getTeacherListByGardeAndSubject()
	{
	
		echo json_encode($this->ModelTeacher->teacherByCours($this->input->post('coursID')));
	}


	public function SendSamplePassword()
	{
		$data['title']="Отправить одноразовый пароль";
		$data['modalName']="Отправить одноразовый пароль";
		$data["error"]="";
		$this->load->view('SendSamplePassword',$data);
		$this->load->view("footer");
	}
	public function UpdatePasswordPanel()
	{
		 $to = $this->input->post('to');
        if(count($this->user->userExist($to))===0){

        	$data['title']="Отправить одноразовый пароль";
			$data['modalName']="Отправить одноразовый пароль";
        	$data["error"]="Неправильная веденная почта";
        	$this->load->view('SendSamplePassword',$data);

        }
        else{
        	$this->load->config('email');
       		$this->load->library('email');
        
        	$from = $this->config->item('smtp_user');
       		 $to = $this->input->post('to');
        	$subject = "Запрос на Изменение пароля";
        	$samplePWD=$this->gen_password(6);
        	$message ="Для восстановления пароля используйте одноразовый пароль \n".$samplePWD;
        	
        	$this->email->set_newline("\r\n");
        	$this->email->from($from);
        	$this->email->to($to);
        	$this->email->subject($subject);
        	$this->email->message($message);

        if ($this->email->send()) {
        	$arrayToRequest=array(
        		'email'=>$to,
        		'samplePassword'=>$samplePWD
        	);
        	$this->user->updateUser($arrayToRequest);
            $data['confirm']='одноразовый пароль успешна отправлена на почту';
        } else {
            show_error($this->email->print_debugger());
        }
        	$data['title']="Изменить пароль";
			$data['modalName']="Отправить одноразовый пароль";
			$data["error"]="";
			$this->load->view('UpdatePassword',$data);
			$this->load->view("footer");
        }

		
	}
	public function UpdatePassword()
	{
		 $email = $this->input->post('email');
		if(count($this->user->userExist($email))===0 ){
			$data['title']="Изменить пароль";
			$data['modalName']="Изменить пароль";
			$data['error']="Неправильная веденная почта";
			$data['confirm']="";
			$this->load->view('UpdatePassword',$data);
			$this->load->view("footer");
		}
		else{
			$samplePWD=$this->user->getSamplaPassword($email)->samplePassword;
			
			if($samplePWD!=$this->input->post('samplePwd') || $this->input->post('samplePwd')==""){
				$data['error']="неправильный одноразовый пароль";
				$data['title']="Изменить пароль";
				$data['modalName']="Изменить пароль";
				$data['confirm']="";
				$this->load->view('UpdatePassword',$data);
				$this->load->view("footer");
			}

			else{

				if($this->input->post("confirmPasswd")!=$this->input->post("passwd"))
				{
					$data['error']="веденные пароли не совпадают";
					$data['title']="Изменить пароль";
					$data['modalName']="Изменить пароль";
					$data['confirm']="";
					$this->load->view('UpdatePassword',$data);
					$this->load->view("footer");
				}

				else{
					$pwd=sha1($this->input->post('passwd'));
					$arrayToRequest=array(
	        		'email'=>$email,
	        		'samplePassword'=>$samplePWD,
	        		'password'=>$pwd
		        	);
		        	$this->user->updatePassword($arrayToRequest);
		        	
		        	redirect('http://'.base_url('index.php/Admin'));
					
				}
			}
			
			
			
		}

		
	}


	function gen_password($length = 6)
{				
	$chars = 'qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP'; 
	$size = strlen($chars) - 1; 
	$password = ''; 
	while($length--) {
		$password .= $chars[random_int(0, $size)]; 
	}
	return $password;
}

}