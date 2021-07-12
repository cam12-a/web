<?php



/**
 * 
 */
class About extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
      
    }
	public function index()
	{
		$data=[];
		$data['title']="О нас";
		$data['link']="";
		$data['link']=base_url().'About/index';
		$this->load->view('header',$data);
		$this->load->view('about');
		$this->load->view('footer');
		
	}
}
?>