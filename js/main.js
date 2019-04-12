// selecting skill container elements
const boxes = document.querySelectorAll(".skill-item");
const skillContainerRight = document.getElementById('css-right');
const skillContainerLeft = document.getElementById('css-left');
const aboutSkillSpan = document.getElementById('aboutSkill');
const skillHeading = document.getElementById('skill-heading');
const skillTextBodyRight = document.getElementById('textBodyRight');
const skillTextBodyLeft = document.getElementById('textBodyLeft');
const nextColumn = document.getElementById('textBodyRightNextCol');


// navbar buttons select buttons
const buttons = document.querySelectorAll(".nav a");

// scroll top button
goTopButton = document.getElementById("goTopButton");

// adding eventlisteners
boxes.forEach(elem => {
    elem.addEventListener("click", e => {
      showSkillBody();
      
      if(e.target.closest('.html')){
        htmlInfo();
      }
      else if(e.target.closest('.css')) {
        cssInfo();
      }
      else if(e.target.closest('.javascript')) {
        jsInfo();
      }
      else if(e.target.closest('.java')) {
        sassInfo();
      }
      else if(e.target.closest('.rwd')) {
        angularInfo();
      }
      else if(e.target.closest('.ai')) {
        illustrator();
      }
      closeSkillContainer();
    });
});

// toggle margin for showing section
const showSkillBody = function() {
  skillContainerRight.style.marginLeft = "20%";
  skillContainerRight.style.opacity = "1";
  skillContainerLeft.style.marginLeft = "0";
  skillContainerLeft.style.opacity = "1";
}

// html part
const htmlInfo = function() {
  nextColumn.innerHTML = "";
  skillContainerRight.style.background = "black";
  skillHeading.innerHTML = "Understanding of:";
  skillTextBodyRight.innerHTML = "<li class='htmlText'>Semantic HTML</li>"
                               + "<li class='htmlText'>HTML5 Features</li>"
                               + "<li class='htmlText'>W3C valid HTML</li>"
                               + "<li class='htmlText'>HTTP Protocol</li>";
  aboutSkillSpan.innerHTML     = "Fun and simple markup language, it was one of the first things to learn on this journey."
  
  skillTextBodyLeft.innerHTML = "<img src='./img/html.png'>"
                               + "<h1>HTML5</h1>"

}

// css part
const cssInfo = function() {
  nextColumn.innerHTML = "";
  skillContainerRight.style.background = "#000c1e";
  skillHeading.innerHTML = "Familiar with:";
  skillTextBodyRight.innerHTML = "<li class='cssText'>Box Model</li>"
                               + "<li class='cssText'>Grid Layout</li>"
                               + "<li class='cssText'>UX/UI Principles</li>"
                               + "<li class='cssText'>Color Theory</li>"
                               + "<li class='cssText'>Pseudo Classes</li>"
                           + "<li class='cssText'>Document Flow</li>"
  aboutSkillSpan.innerHTML     = "CSS Animations are the next thing I will be focusing on."
  skillTextBodyLeft.innerHTML = "<img src='./img/css.png'>"
                               + "<h1>CSS</h1>"
}
// js part
const jsInfo = function() {
  skillContainerRight.style.background = "#060701";
  skillHeading.innerHTML = "Feeling comfortable with:";
  skillTextBodyRight.innerHTML = "<li class='jsText'>JavaScript Fundamentals</li>"
                               + "<li class='jsText'>DOM Manipulation</li>"
                               + "<li class='jsText'>Asynchronity</li>"
                               + "<li class='jsText'>ECMAScript 6</li>"
                               + "<li class='jsText'>Variable scoping</li>"
  aboutSkillSpan.innerHTML     = "There is always something new to learn in Javascript"
  skillTextBodyLeft.innerHTML = "<img src='./img/js.png'>"
                              + "<h1>Javascript</h1>"
}

// java part
const sassInfo = function() {
  skillContainerRight.style.background = "#060701";
  skillHeading.innerHTML = "Feeling comfortable with:";
  skillTextBodyRight.innerHTML = "<li class='sasstext'>Compiling Sass</li>"
                               + "<li class='sasstext'>Nesting Selectors</li>"
                               + "<li class='sasstext'>Variables in Sass</li>"
                               + "<li class='sasstext'>Mixins</li>"
                               + "<li class='sasstext'>Components</li>"
  aboutSkillSpan.innerHTML     = "Css with superpowers."
  skillTextBodyLeft.innerHTML = "<img src='./img/sass.png'>"
                              + "<h1>Sass</h1>"
}

const angularInfo = function() {
  skillContainerRight.style.background = "black";
  skillHeading.innerHTML = "Able to work with:";
  skillTextBodyRight.innerHTML = "<li class='angularText'>Components and Databinding</li>"
                               + "<li class='angularText'>Services</li>"
                               + "<li class='angularText'>Dependency Injection</li>"
                               + "<li class='angularText'>Routing</li>"
                               + "<li class='angularText'>Observables</li>"
                               + "<li class='angularText'>Forms</li>"
                               + "<li class='angularText'>HTTP Requests</li>"
  aboutSkillSpan.innerHTML     = "Angular"
  skillTextBodyLeft.innerHTML = "<img src='./img/angular.png'>"
                              + "<h1>Angular</h1>"
}

const illustrator = function() {
  skillContainerRight.style.background = "black";
  skillHeading.innerHTML = "I was using Illustrator to:";
  skillTextBodyRight.innerHTML = "<li class='illustratortext'>Create vector based icons and logos</li>"
                               + "<li class='illustratortext'>Follow up design and convert it to HTML/CSS</li>"

  aboutSkillSpan.innerHTML     = "Adobe Illustrator"
  skillTextBodyLeft.innerHTML = "<img src='./img/ai.png'>"
                              + "<h1>Adobe Illustrator</h1>"
}






// toggle margin for closing sections
const closeSkillContainer = function() {
  let closeButton = document.getElementById("close");
  closeButton.addEventListener("click", () => {
    skillContainerRight.style.marginLeft = "100%";
    skillContainerRight.style.opacity = "0";
    skillContainerLeft.style.marginLeft = "-50%";
    skillContainerLeft.style.opacity = "1";
  })

}
// escape closing
document.addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    skillContainerRight.style.marginLeft = "100%";
    skillContainerRight.style.opacity = "0";
    skillContainerLeft.style.marginLeft = "-50%";
    skillContainerLeft.style.opacity = "1";
  }
})



// smooth scrolling
buttons.forEach(item => item.addEventListener('click', navbarItemClick));
goTopButton.addEventListener('click', navbarItemClick);

function navbarItemClick (event) {  
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href") == null ? '.heading' : event.currentTarget.getAttribute("href");
  const duration = 700;
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, cubic(progress, startPosition, distance, duration));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
}
function cubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	t -= 2;
	return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
};


// text fade in
document.addEventListener('scroll', showTextOnScroll);

function showTextOnScroll() {
  let screenPosition = window.innerHeight;

  let aboutText = document.querySelector('.content');
  let aboutTextPosition = aboutText.getBoundingClientRect().top;

  let footerText = document.querySelector('.footer-content');
  let footerTextPosition = footerText.getBoundingClientRect().top;


  if(aboutTextPosition < screenPosition/1.2) {
    aboutText.classList.add('show');
  }
  if(aboutTextPosition > 1000){
    aboutText.classList.remove('show');
  }


  if(footerTextPosition < screenPosition/1.2) {
    footerText.classList.add('show');

  }
  if(footerTextPosition > 900){
    footerText.classList.remove('show');
  }

}

