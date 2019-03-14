let boxes = document.querySelectorAll(".skill-item");
skillContainerRight = document.getElementById('css-right');
skillContainerLeft = document.getElementById('css-left');

aboutSkillSpan = document.getElementById('aboutSkill');
skillHeading = document.getElementById('skill-heading');
skillTextBodyRight = document.getElementById('textBodyRight');
skillTextBodyLeft = document.getElementById('textBodyLeft');
nextColumn = document.getElementById('textBodyRightNextCol');
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
        console.log("java")
      }
      else if(e.target.closest('.rwd')) {
        console.log("responsive ")
      }
      else if(e.target.closest('.ai')) {
        console.log("illustrator")
      }
      closeSkillContainer();
    });
});

let showSkillBody = function() {
  skillContainerRight.style.marginLeft = "20%";
  skillContainerRight.style.opacity = "1";
  skillContainerLeft.style.marginLeft = "0";
  skillContainerLeft.style.opacity = "1";
}

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

let jsInfo = function() {
  skillContainerRight.style.background = "#060701";
  skillHeading.innerHTML = "Feeling comfortable with:";
  skillTextBodyRight.innerHTML = "<li class='jsText'>JavaScript Fundamentals</li>"
                               + "<li class='jsText'>DOM Manipulation</li>"
                               + "<li class='jsText'>Asynchronity</li>"
                               + "<li class='jsText'>ECMAScript 6</li>"
                               + "<li class='jsText'>Variable scoping</li>"
                               + "<li class='jsText'>...</li>"
                               + "<li class='jsText'>...</li>"
                               + "<li class='jsText'>...</li>"
                               + "<li class='jsText'>...</li>"
  nextColumn.innerHTML         = "<li class='jsText'>...</li>"
  aboutSkillSpan.innerHTML     = "Something about JavaCcript"
  skillTextBodyLeft.innerHTML = "<img src='https://raw.githubusercontent.com/dragance023/portfolio-v1/master/img/js.png'>"
                              + "<h1>Javascript</h1>"
}








let closeSkillContainer = function() {
  let closeButton = document.getElementById("close");
  closeButton.addEventListener("click", () => {
    skillContainerRight.style.marginLeft = "100%";
    skillContainerRight.style.opacity = "0";
    skillContainerLeft.style.marginLeft = "-50%";
    skillContainerLeft.style.opacity = "1";

  })

}
document.addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    skillContainerRight.style.marginLeft = "100%";
    skillContainerRight.style.opacity = "0";
    skillContainerLeft.style.marginLeft = "-50%";
    skillContainerLeft.style.opacity = "1";
  }
})

