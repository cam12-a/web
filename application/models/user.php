<?php
/**
 * 
 */

class user extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function updateUser($data)
	{
		$this->db->set('samplePassword',$data['samplePassword']);
		$this->db->where('email',$data['email']);
		$this->db->update('user');
	}

	public function userExist($email){

		$this->db->select('*');
		$this->db->from('user');
		$this->db->where('email',$email);
		return $this->db->get()->result();
	}
	public function updatePassword($data)
	{
		$this->db->set('samplePassword',$data['samplePassword']);
		$this->db->set('password',$data['password']);
		$this->db->where('email',$data['email']);
		$this->db->update('user');
	}

	public function getSamplaPassword($email){
		$this->db->select("samplePassword");
		$this->db->from('user');
		$this->db->where('email',$email);
		return $this->db->get()->row();
	}

	public function getUser(){
		return $this->db->get('user')->result();
	}

	public function updateUserFullData($data)
	{
		$this->db->set("Firstname",$data['Firstname']);
		$this->db->set('Lastname',$data['Lastname']);
		$this->db->set("name",$data['name']);
		$this->db->where("email",$data['email']);
		$this->db->update('user');
	}
}
