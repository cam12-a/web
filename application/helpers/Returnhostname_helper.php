<?php 

function returnHostName($url){
	$data=array(
		'catalogue'=>base_url().'Catalogue/index',
		'about'=>base_url().'About/index'
	);
	return $data;
}

?>