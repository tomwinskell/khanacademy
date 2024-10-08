// change to allow each of several to change state

const allArrows = document.querySelectorAll(".arrow");
const allHiddenText = document.querySelectorAll(".hidden-text");

for(let i = 0; i < allArrows.length; i++) 
  {
    allArrows[i].addEventListener("click", function(e) 
      {
        e.preventDefault();
      
        if (allHiddenText[i].style.display == "none")
          {
            allHiddenText[i].style.display = "block";
            allArrows[i].classList.add("active");
          } 
        else 
          {
            allHiddenText[i].style.display = "none";
            allArrows[i].classList.remove("active");
          }
       })
  }

const burgerSvg = document.querySelector(".burger-svg");
const navigationMenu = document.querySelector(".navigation-menu");
const headerLightline = document.querySelector(".lightline");
  
burgerSvg.addEventListener("click", function (e) {
  e.preventDefault();
  if (navigationMenu.classList.contains("hidden")) {
    navigationMenu.classList.remove("hidden");
    burgerSvg.classList.add("animate");
    headerLightline.classList.add("hidden");
  } else {
    navigationMenu.classList.add("hidden");
    burgerSvg.classList.remove("animate");
    headerLightline.classList.remove("hidden");
  }
});
  