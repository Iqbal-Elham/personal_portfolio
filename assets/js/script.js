const hamburger = document.querySelector(".toggle");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu_item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const projectDetails = [
  {
    title: "Project Multi post",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "./assets/images/gymfit.png",
  },
  {
    title: "Project second",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    image: "../images/gymfit.png",
  },
];

var pop = document.querySelector(".pop-up")
var wrapper = document.querySelector(".pop-wrapper")
function popup_show()
{
    pop.classList.add("show")
    wrapper.classList.add("show")
}


const proj1 = document.querySelector("#project-1");
proj1.addEventListener("click", () => {
    popup_show()
    document.querySelector(".popup-title").innerHTML = projectDetails[0].title
    document.querySelector(".popup-img").src = projectDetails[0].image
    document.querySelector(".popup-text").innerHTML = projectDetails[0].description
});
const proj2 = document.querySelector("#project-2");
proj1.addEventListener("click", () => {
    popup_show()
    document.querySelector(".popup-title").innerHTML = projectDetails[1].title
    document.querySelector(".popup-img").src = projectDetails[1].image
    document.querySelector(".popup-text").innerHTML = projectDetails[1].description
});

let closeButton = document.querySelector(".popup-close")
closeButton.addEventListener('click', () => 
{
    pop.classList.remove("show")
    wrapper.classList.remove("show")
})



// let popBtn = document.querySelector("Button.popup-btn");

// if (popBtn) {
//   var popUpWrapper = document.createElement("div");
//   popUpWrapper.className = "popup-wrapper";
//   document.body.prepend(popUpWrapper);
// }

// popBtn.addEventListener("click", () => {
//   let pop = document.querySelector("pop-up");
//   pop.classList.add("show");
//   popUpWrapper.classList.add("show");
// });
