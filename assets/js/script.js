// Toggle menu

const hamburger = document.querySelector('.toggle');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu_item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Popup project detail
const projectDetails = [
  {
    title: 'Project Multi post',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/desktop_ver/Img Placeholder (2).png',
    tech1: 'Css',
    tech2: 'Html',
    tech3: 'Ruby',
    tech4: 'bootstrap',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
  {
    title: 'Professional Art <br />Printing Data',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    image: './assets/images/Snapshoot.png',
    tech1: 'Html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
    live: '#',
    source: '#',
  },
];

const projectCards = document.querySelector('.project_cards');

projectCards.innerHTML += `

<div class="project1">
<img
  src="${projectDetails[0].image}"
  alt="Project 1"
/>
<div class="project1_content">
  <h3>${projectDetails[0].title}</h3>
  <p>
  ${projectDetails[0].description}
  </p>
  <ul>
    <li>${projectDetails[0].tech1}</li>
    <li>${projectDetails[0].tech2}</li>
    <li>${projectDetails[0].tech3}</li>
    <li>${projectDetails[0].tech4}</li>
  </ul>
  <button id="project-1" class="popup-btn">See Project</button>
</div>
</div>`;

for (let i = 1; i < projectDetails.length; i += 1) {
  const cards = ` 
  <div class="project">
  <div class="head_card">
    <h3>${projectDetails[i].title}</h3>
    <p>
    ${projectDetails[i].description}
    </p>
    <ul>
      <li>${projectDetails[i].tech1}</li>
      <li>${projectDetails[i].tech2}</li>
      <li>${projectDetails[i].tech3}</li>
    </ul>
  </div>
  <button id="project-2" class="popup-btn">See Project</button>
</div>`;
  projectCards.innerHTML += cards;
}

const pops = document.querySelector('.pop-up');
pops.innerHTML += `
<span>
<img class="popup-close" src="./assets/images/Icon.png" alt="" />
<h1 class="popup-title"></h1>
</span>
<ul class="tools">
<li>html</li>
<li>bootstrap</li>
<li>Ruby and rails</li>
</ul>
<div class="popup-content">
<img class="popup-img" src="" alt="" />
<div class="popup-right">
  <p class="popup-text"></p>
  <div class="pop-buttons">
    <a id="live-button" href="#"><button type="button">
        Go live <img src="./assets/images/timer.png" alt="" /></button></a>
    <a id="source-button" href="#"><button type="button">
        Source
        <img src="./assets/images/white-github.png" alt="" /></button></a>
  </div>
</div>
</div>`;

const pop = document.querySelector('.pop-up');
const wrapper = document.querySelector('.pop-wrapper');
function popupShow() {
  pop.classList.add('show');
  wrapper.classList.add('show');
}

const proj1 = document.querySelector('#project-1');
proj1.addEventListener('click', () => {
  popupShow();
  document.querySelector('.popup-title').innerHTML = projectDetails[0].title;
  document.querySelector('.popup-img').src = projectDetails[0].image;
  document.querySelector('.popup-text').innerHTML = projectDetails[0].description;
  document.querySelector('#live-button').href = projectDetails[0].live;
  document.querySelector('#source').href = projectDetails[0].source;
});

document.querySelectorAll('#project-2').forEach((p) => p.addEventListener('click', () => {
  popupShow();
  document.querySelector('.popup-title').innerHTML = projectDetails[1].title;
  document.querySelector('.popup-img').src = projectDetails[1].image;
  document.querySelector('.popup-text').innerHTML = projectDetails[1].description;
  document.querySelector('#live-button').href = projectDetails[1].live;
  document.querySelector('#source').href = projectDetails[1].source;
}));

const closeButton = document.querySelector('.popup-close');
closeButton.addEventListener('click', () => {
  pop.classList.remove('show');
  wrapper.classList.remove('show');
});

// Contact validation form
const email = document.querySelector('#email');
const form = document.querySelector('.contact-form');
const error = email.nextElementSibling;

const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const isValid = pattern.test(email.value);
  if (!isValid) {
    error.textContent = 'Please enter the email in lowercase.';
    event.preventDefault();
  } else {
    error.textContent = '';
  }
});