
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
                        <li v-for="item in navList">
                           <template>
                                <li>
                                    <a :href="item.url" :title="item.name">{{item.name}}</a>
                                </li>
                            </template>
                        </li>
						
						<li><a href="#" v-bind:id=id class="btn" data-toggle="modal"> {{lk}}</a></li>
						<li><a href="aboutUs.html"> О НАС</a></li>
                        <li><a href=""><i class="fa fa-shopping-cart"></i></a></li>

					</ul>
					</div>
					<span class="category" v-on:click=" menu">&#9776;КАТЕГОРИЯ</span>
					<div class="header-rightHideen" id="rightHeader">
						<ul class="ulForBanner">
						<span href="#" class="closebtn" v-on:click="closeMenu">&times;</span>
                         <li v-for="item in navList">
                           <template>
                                <li>
                                    <a :href="item.url" :title="item.name">{{item.name}}</a>
                                </li>
                            </template>
                        </li>
						
						<li><a href="#" v-bind:id=id class="btn" data-toggle="modal"> {{lk}}</a></li>
                        <li><a href=""><i class="fa fa-shopping-cart"></i></a></li>

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
            id:"showModal",
            lk:"ЛИЧНЫЙ КАБИНЕТ",
            navList:[
                {url:"#",name:"ДОСТАВКА"},
                {url:"#",name:"ОПЛАТА"},
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