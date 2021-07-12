<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}


class Admin extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
	}
	public function index(){
		if(count($this->session->userdata())>2){
			$data['title']="Катенгоря";
			$this->load->view('AdminHeader',$data);
			$this->load->view('AdminHome',$data);
		}
		else{
			redirect('http://'.base_url('index.php/Admin'));
		}
		
	}
	
	
}