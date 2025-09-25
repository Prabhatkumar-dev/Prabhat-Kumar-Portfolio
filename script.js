
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var project = document.querySelector("#page3 #projects")
var image = document.querySelector("#fixed-image")
project.addEventListener("mouseenter", function(){
    image.style.display = "block";
})
project.addEventListener("mouseleave" ,function(){
    image.style.display ="none"
})

var elems = document.querySelectorAll(".elem");
elems.forEach( function(e){
    e.addEventListener("mouseenter" , function(){
    var img = e.getAttribute("data-image");
   image.style.backgroundImage = `url(${img})`

    })
})

var menu =document.querySelector("#nav h2");
var scrmenu = document.querySelector("#screnmenu");
menu.addEventListener("click" , function(){
    scrmenu.style.top = 0;
})
var close = document.querySelector(".mainmenu h1");
close.addEventListener("click" ,function(){
    scrmenu.style.top = "-100%" ;
})

//loader code:
var load = document.querySelector("#loader");
setTimeout(function(){
load.style.top = "-100%"; 
},4800);