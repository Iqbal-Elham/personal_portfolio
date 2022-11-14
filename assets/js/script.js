const hamburger = document.querySelector(".toggle");
const navMenu = document.querySelector(".menu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});

document.querySelectorAll(".menu_item").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));