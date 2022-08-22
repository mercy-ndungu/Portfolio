// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
// function myFunction(x) {
//   x.classList.toggle("change");
// }

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// $('#switch1').on('click', function(){
//   $('body').toggleClass('night')
// })
// // If user visit after 7 pm in night the body will change the style to night class
// $(document).ready(function(){
//   var date = new Date();
//   var current_time = date.getHours();
//   if (current_time > 19 || current_time < 6)
//     // If time is after 7PM or before 6AM, apply night theme to ‘body’
//     document.body.className = "night";
//   else
//     // Else use ‘day’ theme
//     document.body.className = "";
// });
// $(window).load(function() {
//       $("#top-button").hide();
// });
// function Buttontoggle()
// {
//   var t = document.getElementById("123");
//   if(t.innerHTML=="Some Text"){
//       t.innerHTML="Toggled Text";}
//   else{
//       t.innerHTML="Some Text";}
// }