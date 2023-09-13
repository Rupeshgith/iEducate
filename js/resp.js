let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let navright = document.querySelector('.navright')
let navlist = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
navbar.classList.toggle("h-nav-resp")
navright.classList.toggle("v-class-resp")
navlist.classList.toggle("v-class-resp")

})