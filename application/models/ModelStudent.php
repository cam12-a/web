<?php

/**
 * 
 */
class ModelStudent extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function addStudent($data)
	{	
		$this->db->set('Firstname',$data['Firstname']);
		$this->db->set('Lastname',$data['Lastname']);
		$this->db->set('name',$data['name']);
		$this->db->set('phone',$data['phone']);
		$this->db->set('picture',$data['picture']);
		$this->db->set('dateBirth',$data['dateBirth']);
		$this->db->set('EnrollementDate',date('Y-m-d'));
		$this->db->set('status',"Учиться");
		$this->db->set('id_grade',$data['id_grade']);
		return  $this->db->insert('student');
	}
	

	public function deleteCategory($id)
	{
		 $this->db->where('id_student',$id);
		 $this->db->set('status','delete');
		return  $this->db->update('student');
	}


	public function studientsLists()
	{
		$this->db->where('status!=','delete');
		return  $this->db->get('student')->result();
	}

	public function getStudentInfo($id)
	{
		$this->db->where('id_student',$id);
		#$this->db->where('status!=','delete');
		return $this->db->get('student')->result();
	}

	public function updateCategory($data)
	{
		$this->db->where('id_student',$data['id_student']);
		$this->db->set('Firstname',$data['Firstname']);
		$this->db->set('Lastname',$data['Lastname']);
		$this->db->set('name',$data['name']);
		$this->db->set('phone',$data['phone']);
		$this->db->set('picture',$data['picture']);
		$this->db->set('dateBirth',$data['dateBirth']);
		$this->db->set('EnrollementDate',date('Y-m-d'));
		$this->db->set('id_grade',$data['id_grade']);
		$this->db->update('student');
	}


	public function categoryExist($categoryName)
	{
		$this->db->where('Category',$categoryName);
		if(count($this->db->get('category')->result())>0)
			return true;
		else
			return false;

	}


}