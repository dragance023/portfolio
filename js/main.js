// selecting skill container elements
let boxes = document.querySelectorAll(".skill-item");
skillContainerRight = document.getElementById('css-right');
skillContainerLeft = document.getElementById('css-left');
aboutSkillSpan = document.getElementById('aboutSkill');
skillHeading = document.getElementById('skill-heading');
skillTextBodyRight = document.getElementById('textBodyRight');
skillTextBodyLeft = document.getElementById('textBodyLeft');
nextColumn = document.getElementById('textBodyRightNextCol');

// navbar buttons smoothscroll
projectsButton = document.getElementById("projects");
aboutButton = document.getElementById("about");
contactButton = document.getElementById("contact");

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
        javaInfo();
      }
      else if(e.target.closest('.rwd')) {
        angularInfo();
      }
      else if(e.target.closest('.ai')) {
        console.log("illustrator")
      }
      closeSkillContainer();
    });
});

// toggle margin for showing section
let showSkillBody = function() {
  skillContainerRight.style.marginLeft = "20%";
  skillContainerRight.style.opacity = "1";
  skillContainerLeft.style.marginLeft = "0";
  skillContainerLeft.style.opacity = "1";
}

// html part
let htmlInfo = function() {
  nextColumn.innerHTML = "";
  skillContainerRight.style.background = "black";
  skillHeading.innerHTML = "Understanding of:";
  skillTextBodyRight.innerHTML = "<li class='htmlText'>Semantic HTML</li>"
                               + "<li class='htmlText'>HTML5 Features</li>"
                               + "<li class='htmlText'>W3C valid HTML</li>"
                               + "<li class='htmlText'>HTTP Protocol</li>";
  aboutSkillSpan.innerHTML     = "Fun and simple markup language, it was one of the first things to learn on this journey."
  
  skillTextBodyLeft.innerHTML = "<img src='https://raw.githubusercontent.com/dragance023/portfolio-v1/master/img/html.png'>"
                               + "<h1>HTML5</h1>"

}

// css part
let cssInfo = function() {
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
  skillTextBodyLeft.innerHTML = "<img src='https://raw.githubusercontent.com/dragance023/portfolio-v1/master/img/css.png'>"
                               + "<h1>CSS</h1>"
}
// js part
let jsInfo = function() {
  skillContainerRight.style.background = "#060701";
  skillHeading.innerHTML = "Feeling comfortable with:";
  skillTextBodyRight.innerHTML = "<li class='jsText'>JavaScript Fundamentals</li>"
                               + "<li class='jsText'>DOM Manipulation</li>"
                               + "<li class='jsText'>Asynchronity</li>"
                               + "<li class='jsText'>ECMAScript 6</li>"
                               + "<li class='jsText'>Variable scoping</li>"
  aboutSkillSpan.innerHTML     = "Something about JavaCcript"
  skillTextBodyLeft.innerHTML = "<img src='https://raw.githubusercontent.com/dragance023/portfolio-v1/master/img/js.png'>"
                              + "<h1>Javascript</h1>"
}

// java part
let javaInfo = function() {
  skillContainerRight.style.background = "#060701";
  skillHeading.innerHTML = "Feeling comfortable with:";
  skillTextBodyRight.innerHTML = "<li class='javaText'>JavaScript Fundamentals</li>"
                               + "<li class='javaText'>DOM Manipulation</li>"
                               + "<li class='javaText'>Asynchronity</li>"
                               + "<li class='javaText'>ECMAScript 6</li>"
                               + "<li class='javaText'>Variable scoping</li>"
  aboutSkillSpan.innerHTML     = "Something about JavaCcript"
  skillTextBodyLeft.innerHTML = "<img src='https://raw.githubusercontent.com/dragance023/portfolio-v1/master/img/js.png'>"
                              + "<h1>Javascript</h1>"
}

let angularInfo = function() {
  skillContainerRight.style.background = "black";
  skillHeading.innerHTML = "Able to work with:";
  skillTextBodyRight.innerHTML = "<li class='angularText'>Components and Databinding</li>"
                               + "<li class='angularText'>Services</li>"
                               + "<li class='angularText'>Dependency Injection</li>"
                               + "<li class='angularText'>Routing</li>"
                               + "<li class='angularText'>Observables</li>"
                               + "<li class='angularText'>Forms</li>"
                               + "<li class='angularText'>HTTP Requests</li>"
                               + "<li class='angularText'>TypeScript</li>"
  aboutSkillSpan.innerHTML     = "Something about JavaCcript"
  skillTextBodyLeft.innerHTML = "<img src='./img/angular.png'>"
                              + "<h1>Angular</h1>"
}



// toggle margin for closing section
let closeSkillContainer = function() {
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


projectsButton.addEventListener("click", () => {
  window.scroll({
    top: 850,  
    behavior: 'smooth'
  });
});
aboutButton.addEventListener("click", () => {
  window.scroll({
    top: 2450,  
    behavior: 'smooth'
  });
});
contactButton.addEventListener("click", () => {
  window.scroll({
    top: 2850,  
    behavior: 'smooth'
  });
});
goTopButton.addEventListener("click", () => {
  window.scroll({
    top: 100,  
    behavior: 'smooth'
  });
});

