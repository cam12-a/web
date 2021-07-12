<?php 


/**
 * 
 */
class AdminSubject extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}


	public function getSubject()
	{
		$this->db->select("c.name,c.description,g.gradeName,c.id_cours,g.id_grade");
		$this->db->distinct('c.id_cours');
		$this->db->from('course_level cl');
		$this->db->join('course c','c.id_cours=cl.id_cours');
		$this->db->join('grade g','g.id_grade=cl.id_level');
		$this->db->where('c.status!=','delete');
		return $this->db->get('course')->result();
	}


	public function insertSubjects($data)
	{

		$this->db->set('name',$data['name']);
		$this->db->set('description',$data['description']);
		$this->db->insert('course');
   		return  $this->db->insert_id();
	}


	public function updateSubject($data)
	{
		$this->db->where('id_cours',$data['id_cours']);
		$this->db->set('name',$data['name']);
		$this->db->set('description',$data['description']);
		$this->db->update('course');
	}


	public function getOneSubject($id)
	{
		$this->db->select("c.name,c.description,g.gradeName,g.id_grade,c.id_cours");
		$this->db->from("course_level cl");
		$this->db->join('course c','c.id_cours=cl.id_cours');
		$this->db->join('grade g','g.id_grade=cl.id_level');
		$this->db->where("c.status!=",'delete');
		$this->db->where('c.id_cours',$id);
		return $this->db->get()->result();
	}


	public function deleteSubject($id)
	{
		$this->db->where('id_cours',$id);
		$this->db->set('status','delete');
		$this->db->update('course');
	}
	public function getSubjectByLevel($id_grade,$id_cours)
	{
		$this->db->select('id_course_level');
		$this->db->where('id_cours',$id_cours);
		$this->db->where('id_level',$id_grade);
		return $this->db->get('course_level')->result_array();
	}
	
	public function returnSubjectID($name)
	{
		$this->db->select('id_cours');
		$this->db->where('status!=','delete');
		$this->db->where("name",$name);
		return $this->db->get('course')->row();
	}

	public function insertAssignedSubjectByGrade($id_grade,$id_cours){
		$this->db->set('id_level',$id_grade);
		$this->db->set('id_cours',$id_cours);
		$this->db->insert('course_level');

	}

	public function updateAssignedSubjectByGrade($id_grade,$id_cours,$old_grade_id)
	{
		$this->db->where('id_cours=',$id_cours);
		$this->db->where('id_level=',$old_grade_id);
		$this->db->set('id_cours',$id_cours);
		$this->db->set('id_level',$id_grade);
		$this->db->update('course_level');
	}


	public function listObjectSubjectByGrade($id_grade){
		$this->db->select("c.name,c.description,g.gradeName,c.id_cours,g.id_grade");
		$this->db->distinct('c.id_cours');
		$this->db->from('course_level cl');
		$this->db->join('course c','c.id_cours=cl.id_cours');
		$this->db->join('grade g','g.id_grade=cl.id_level');
		$this->db->where('c.status!=','delete');
		$this->db->where('g.id_grade=',$id_grade);
		return $this->db->get('course')->result();

	}

	public function assignSubject($id_cours,$id_teacher)
	{
		$this->db->set('id_cours',$id_cours);
		$this->db->set('id_teacher',$id_teacher);
		$this->db->insert('course_teacher');
	}

	public function coursTeachedBySpecificTeacher($id_teacher)
	{
		$this->db->select("id_cours_teacher,c.id_cours,t.id_teacher");
		
		$this->db->from("course_teacher ct");
		$this->db->join('course c','c.id_cours=ct.id_cours');
		$this->db->join('teacher t','t.id_teacher=ct.id_teacher');
		$this->db->where("c.status!=",'delete');
		$this->db->where('t.id_teacher',$id_teacher);
		return $this->db->get()->result();
	}

}