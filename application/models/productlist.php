<?php

/**
 * 
 */
class productlist extends CI_Model
{
	function __construct()
	{
		parent::__construct();
	}

	public function checkProduct($productid)
	{
		$this->db->select('Quantity');
		return $this->db->where('id_product',$productid)->result();
	}

	public function getProductlist(){
		return $this->db->get('productlist')->result();
	}

	public function groupProductByCategory($CategoryName)
	{
		$this->db->where('id_CategoryFKey',$CategoryName);
		#return $query->getResult();
	}
}