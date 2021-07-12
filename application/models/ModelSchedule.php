<?php 


/**
 * 
 */
class ModelSchedule extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function getSchedule()
	{
		return $this->db->get('schedule')->result();
	}
	public function generateSchedule($data)
	{
		$this->db->set('id_subject',$data['id_subject']);
		$this->db->set('dateSchedule',$data['dateSchedule']);
		$this->db->set('Time',$data['timeSchedule']);
		$this->db->set('id_grade',$data['id_grade']);
		$this->db->set('id_teacher',$data['id_teacher']);	
		$this->db->insert('schedule');
	}
	public function updateSchedule($data)
	{
		$this->db->where('id_schedule',$data['id_schedule']);
		$this->db->set('id_subject',$data['id_subject']);
		$this->db->set('dateSchedule',$data['dateSchedule']);
		$this->db->set('Time',$data['timeSchedule']);
		$this->db->set('id_grade',$data['id_grade']);
		$this->db->set('id_teacher',$data['id_teacher']);	
		$this->db->insert('schedule');
	}

	public function isGenerationPossible($data)
	{
		$this->db->select("*");
		$this->db->from('schedule');
		$this->db->where('id_subject',$data['id_subject']);
		$this->db->where('dateSchedule',$data['dateSchedule']);
		$this->db->where('Time',$data['timeSchedule']);
		$this->db->where('id_grade',$data['id_grade']);
		$this->db->where('id_teacher',$data['id_teacher']);
		return $this->db->get()->result();
	}

	public function getScheduleByLevel($id_grade)
	{
		$this->db->select("*");
		$this->db->from('schedule');
		$this->db->where('id_grade',$id_grade);
		
		return $this->db->get()->result();
	}

	public function allScheduleInfo($id_grade,$date1,$date2)
	{
		$this->db->select("g.gradeName,t.Firstname,t.Lastname,t.name,c.name as coursName,sch.dateSchedule,sch.Time");
		$this->db->from('schedule sch');
		$this->db->distinct('sch.Time');
		$this->db->join('grade g','g.id_grade=sch.id_grade');
		$this->db->join('teacher t','t.id_teacher=sch.id_teacher');
		$this->db->join('course c','c.id_cours=sch.id_subject');
		$this->db->where('g.id_grade',$id_grade);
		$this->db->where('sch.dateSchedule>=',$date1);
		$this->db->where('sch.dateSchedule<=',$date2);
		return $this->db->get()->result();
	}
	public function distinctHours($id_grade,$date1,$date2)
	{
		$this->db->select('*');
		$this->db->distinct('Time');
		return $this->db->get('schedule')->result();
	}




}