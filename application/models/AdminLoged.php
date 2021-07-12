<?php 

/**
 * 
 */
class AdminLoged extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function VerifyAdminData($email,$password){
		#$admin=$this->db->select('*')->from('user');
		#$array=array('email='=>$email,'privilege='=>'Admin','password='=>$passwd);
		#$admin->db->where($array)->row();
		#$query=$query->getResult();
		$this->db->where('email',$email);
		$this->db->where('password',$password);
		$this->db->where('privilege','Admin');
		return $this->db->get('user')->result();

	}
}