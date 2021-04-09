
<template>
    <div class="Header">
        <header>
		<nav>
				<div class="header">
					<div class="header-left">
						<a href="#" class="logotype1">                        
						    <div><b>FUTUR</b>IN</div>
						    <span>E-COMMERCE</span>
						</a>
					</div>
					<div class="header-midle">
						<form>
							<span class="icon"><i class="fa fa-search"></i></span>
							<input type="text" name="search" class="search" placeholder="Поиск">
							
						</form>
						
					</div>
					<div class="header-right">
						<ul class="ulForBanner">
						<li><a href="">КАТАЛОГ</a></li>
						<li><a href="#">ДОСТАВКА</a></li>
						<li><a href="#">ОПЛАТА</a></li>
						<li><a href="#" id="showModal" class="btn" data-toggle="modal"> ЛИЧНЫЙ КАБИНЕТ</a></li>
						<li><a href="aboutUs.html"> О НАС</a></li>

					</ul>
					</div>
					<span class="category" v-on:click=" menu">&#9776;КАТЕГОРИЯ</span>
					<div class="header-rightHideen" id="rightHeader">
						<ul class="ulForBanner">
						<span href="#" class="closebtn" v-on:click="closeMenu">&times;</span>
						<li><a href="#">КАТАЛОГ</a></li>
						<li><a href="#">ДОСТАВКА</a></li>
						<li><a href="#">ОПЛАТА</a></li>
						<li><a href="#" id="showModal" class="btn" data-toggle="modal"> ЛИЧНЫЙ КАБИНЕТ</a></li>

					</ul>
					</div>
				</div>
			
				<hr>
		</nav>
	</header>
        
    </div>


   
    
</template>
<script>
export default {
    name: 'Header',
    props:["item"],
    data() {
    
        return {
            isOpen:false,
            active:false,
            listOne:   false,
           
            navList:[
                {url:"#",name:"Главная"},
                {url:"#",name:"Создать меню",children:[
                    {url:"www.facebook.com",name:"Молочные продукты"},
                    {url:"#",name:"Овощи"},
                    {url:"#",name:"Мясо"}

                ]},
                {url:"#",name:"О нас"},
                {url:"#",name:"Личный кабинет"}

            ]
        };
       

    },
     methods: {
            menu:function() {
	            document.getElementById("rightHeader").style.display='block';
            },
            closeMenu:function() {
	            document.getElementById("rightHeader").style.display='none';
            }
        }
    
}
</script>
<style scope>


</style>