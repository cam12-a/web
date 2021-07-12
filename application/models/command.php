<?php

/**
 * 
 */
class command extends Models
{
	private $command=$this->db->table('command');

	public userCommands($user)
	{
		$query=$command->where('id_client',$user);
		return $query->getResult();
	}

	public userCommand($user,$productid)
	{
		$array=['id_client'=>$user,'id_command'=>$productid]
		$query=$command->where($array);
		return $query->getResult();
	}
	public deleteCommand($user,$productid){

		if(count(userCommand($user,$productid))){
			//Faison une requete dans la base de donnees pour recuperer la quantite de chaque produit

		}
		else
			return 'Вы ничего не заказывали';
	}


}