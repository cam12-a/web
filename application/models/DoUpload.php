<?php 

/**
 * 
 */
class DoUpload extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function pictureUpload($id,$link,$table)
	{
		$this->db->where('id_student',$id);
		$this->db->set('picture',$link);
		$this->db->update($table);

	}

}