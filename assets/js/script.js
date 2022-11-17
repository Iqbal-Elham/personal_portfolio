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
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/gymfit.png",
  },
  {
    title: "Project second",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/Snapshoot.png",
  },
  {
    title: "Project second",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/Snapshoot.png",
  },
  {
    title: "Project second",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/Snapshoot.png",
  },
  {
    title: "Project second",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/Snapshoot.png",
  },
  {
    title: "Project second",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
    image: "./assets/images/Snapshoot.png",
  },
];

var project_cards = document.querySelector(".project_cards");

project_cards.innerHTML += `

<div class="project1">
<img
  src="./assets/images/desktop_ver/Img Placeholder (2).png"
  alt="Project 1"
/>
<div class="project1_content">
  <h3>Multi-Post Stories</h3>
  <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.
  </p>
  <ul>
    <li>css</li>
    <li>html</li>
    <li>bootstrap</li>
    <li>Ruby</li>
  </ul>
  <button id="project-1" class="popup-btn">See Project</button>
</div>
</div>`;

for (var i = 1; i <= projectDetails.length; i++) {
  var cards = ` 
  <div class="project">
  <div class="head_card">
    <h3>Professional Art <br />Printing Data</h3>
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard
    </p>
    <ul>
      <li>html</li>
      <li>bootstrap</li>
      <li>Ruby</li>
    </ul>
  </div>
  <button id="project-2" class="popup-btn">See Project</button>
</div>`;

  project_cards.innerHTML += cards;
}

var pop = document.querySelector(".pop-up");
var wrapper = document.querySelector(".pop-wrapper");
function popup_show() {
  pop.classList.add("show");
  wrapper.classList.add("show");
}

const proj1 = document.querySelector("#project-1");
proj1.addEventListener("click", () => {
  popup_show();
  document.querySelector(".popup-title").innerHTML = projectDetails[0].title;
  document.querySelector(".popup-img").src = projectDetails[0].image;
  document.querySelector(".popup-text").innerHTML = projectDetails[0].description;
});

document.querySelectorAll("#project-2").forEach((p) =>
  p.addEventListener("click", () => {
    popup_show();
    document.querySelector(".popup-title").innerHTML = projectDetails[1].title;
    document.querySelector(".popup-img").src = projectDetails[1].image;
    document.querySelector(".popup-text").innerHTML =
      projectDetails[1].description;
  })
);

let closeButton = document.querySelector(".popup-close");
closeButton.addEventListener("click", () => {
  pop.classList.remove("show");
  wrapper.classList.remove("show");
});


