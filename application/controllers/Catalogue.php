<?php

/**
 * 
 */
class Catalogue extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		$data['title']="Католог";
		$data['link']="";
		$data['link']=base_url().'Catalogue/index';
		$this->load->view('header',$data);
		
		$this->load->view('footer');
	}
}