<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}


class AdminLogged extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
	}
	
	public function Login()
	{	
		$VerifyAdmin=$this->load->model('AdminLoged');
		$data=[];
		if(count($this->AdminLoged->VerifyAdminData($this->input->post('email'),$this->input->post('passwd')))!=0){
			$this->load->view('AdminHeader');
			$this->load->view('AdminHome');
			
		}
		else{
			redirect('?Admin/index');
		}
		
	}
	public function AdminCategory()
	{
		$data['title']="Катенгоря";
		$this->load->view('AdminHeader',$data);
		$this->load->view('AdminHome',$data);
	}
}