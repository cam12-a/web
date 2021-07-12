<?php

/**
 * 
 */
class ModelTeacher extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function addTeacher($data)
	{	
		$this->db->set('Firstname',$data['Firstname']);
		$this->db->set('Lastname',$data['Lastname']);
		$this->db->set('name',$data['name']);
		$this->db->set('phone',$data['phone']);
		$this->db->set('picture',$data['picture']);
		$this->db->set('dateBirth',$data['dateBirth']);
		
		return  $this->db->insert('teacher');
	}
	

	public function deleteTeacher($id)
	{
		 $this->db->where('id_teacher',$id);
		 $this->db->set('status','delete');
		return  $this->db->update('teacher');
	}


	public function teachersLists()
	{
		$this->db->where('status!=','delete');
		return  $this->db->get('teacher')->result();
	}

	public function getteacherInfo($id)
	{
		$this->db->where('id_teacher',$id);
		#$this->db->where('status!=','delete');
		return $this->db->get('teacher')->result();
	}

	public function updateTeacher($data)
	{
		$this->db->where('id_teacher',$data['id_teacher']);
		$this->db->set('Firstname',$data['Firstname']);
		$this->db->set('Lastname',$data['Lastname']);
		$this->db->set('name',$data['name']);
		$this->db->set('phone',$data['phone']);
		$this->db->set('picture',$data['picture']);
		$this->db->set('dateBirth',$data['dateBirth']);
		$this->db->update('teacher');
	}
	public function teacherByCours($cours)
	{
		$this->db->select("t.name ,t.Firstname,t.Lastname,c.id_cours,c.name as subjectName, t.picture, t.id_teacher");
		$this->db->distinct('c.id_cours');
		$this->db->from('course_teacher ct');
		$this->db->join('course c','c.id_cours=ct.id_cours');
		$this->db->join('teacher t','t.id_teacher=ct.id_teacher');
		$this->db->where('c.status!=','delete');
		$this->db->where('ct.id_cours=',$cours);
		return $this->db->get('teacher')->result();
	}


}