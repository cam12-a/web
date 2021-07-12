<?php 


/**
 * 
 */
class ModelGrade extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function getGrade()
	{
		return $this->db->get('grade')->result();
	}
	public function insertGrade($data)
	{
		$this->db->set('gradeName',$data['name']);
		$this->db->set('description',$data['description']);
		$this->db->insert('grade');
	}
	public function updateGrade($data)
	{
		$this->db->where('id_grade',$data['id_grade']);
		$this->db->set('gradeName',$data['name']);
		$this->db->set('description',$data['description']);
		$this->db->insert('grade');
	}
	public function returnGradeID($name)
	{
		$this->db->select("id_grade");
		$this->db->where("gradeName",$name);
		$this->db->get('grade')->row();
	}

}