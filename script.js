const hamburgerBtn = document.querySelector(".hamburgerBtn");
const menu = document.querySelector(".mobile-nav");
const close_menu = document.querySelector("x-icon");
console.log(menu.style.visibility);
hamburgerBtn.addEventListener("click", function(){
  menu.classList.remove("hidden");
  menu.classList.toggle("visible");
  // menu.style.display = "block";
  console.log(menu.style);

});

close_menu.addEventListener("click", function(){
  // if (menu.style.display == "block")
  // {
  //   menu.style.display = "none";
   
  // }

    menu.classList.remove("visible");
    menu.classList.toggle("hidden");
    
  
});