<template>
    <div id="container-fluid" class="Body">

			<aside id="catalogue">
				<ul class="menu-left">
					<li class="menu-salat" @click="getSalat"><a href="#">Салат
						<span class="fleche-left fa fa-caret-down"></span>
					</a>

						<ul class="salat">
							<li class="submenu"><a href="#">цезарь</a></li>
							<li class="submenu"><a href="#">свекла</a></li>
						</ul>

					</li>

					<li class="menu-bake" @click="getBake"><a href="#">Выпечки
						<span class="fleche-left fa fa-caret-down"></span>

						</a>
						<ul class="bake">
							<li class="submenu"><a href="#">Ягоды</a></li>
							<li class="submenu"><a href="#">Блины</a></li>
						</ul>
					</li>
					<li class="menu"><a href="#">Заготовки</a>
					</li>
					<li class="menu"><a href="dzJavaScript.html">ДЗ JavaScript fetch</a></li>
				</ul>
			</aside>


			<section id="carousel">
				<div class="carousel-slide">
					<img src="../../static/img/salat4.jpg" id="lastClone" alt="" >
					<img src="../../static/img/salat1.jpg" class="slide">
					<img src="../../static/img/salat2.jpg" class="slide">
					<img src="../../static/img/salat3.jpg" class="slide">
					<img src="../../static/img/salat4.jpg" id="firstClone" alt="" class="slide">
				</div>
				<i class="fa fa-arrow-circle-o-left" id="prevBtn" aria-hidden="true" ></i>
				<i class="fa fa-arrow-circle-o-right" id="nextBtn" aria-hidden="true"></i>
					
			</section>
			
		<!--	<button id="prevBtn">Prev</button>
			<button id="nextBtn">Nex</button> -->


					
			<div id="belowCarousel">
				<section>
					
				</section>
				
			</div>
	</div>
</template>
<script>
export default {
     name:'Body',
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
	methods:{
		getSalat:function(){
			let menuSalat= document.querySelector(".menu-salat");
			let carousel=""
			menuSalat.addEventListener("click",()=>{
				carousel=document.querySelector("#carousel")
				carousel.innerHTML=""
				$("#carousel").append(carousel)
			})
		},
		getBake:function(){
			 let menuSalat= document.querySelector(".menu-bake");
			let carousel=""
			menuSalat.addEventListener("click",()=>{
				carousel=document.querySelector("#carousel")
				carousel.innerHTML=""
				$("#carousel").append(carousel)
			})
		}

	}
}
</script>