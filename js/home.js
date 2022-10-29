document.addEventListener('DOMContentLoaded', function(){

  // Scroll-effects for animation
  document.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY);
  });

  // Main-menu toggle
  let menuButton = document.getElementById('menu-button');
  let mainMenu = document.getElementById('main-menu');

  const toggleMenu = () => {
    menuButton.classList.toggle('menu-button_active');
    mainMenu.classList.toggle('main-menu_active');
    document.body.classList.toggle('menu-active');
  }
  
  menuButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
  });
  
  document.addEventListener('click', e => {
    let target = e.target;
    let its_mainMenu = target == mainMenu || mainMenu.contains(target);
    let its_menuButton = target == menuButton;
    let mainMenu_is_active = mainMenu.classList.contains('main-menu_active');
    
    if (!its_mainMenu && !its_menuButton && mainMenu_is_active) {
      toggleMenu();
    }
  });
  
  // Animation progress-circle skills
  let skillsListHtml = document.querySelector('.skills-list__item_html svg');
  let skillsListCss = document.querySelector('.skills-list__item_css svg');
  let skillsListJs = document.querySelector('.skills-list__item_js svg');
  let skillsListJquery = document.querySelector('.skills-list__item_jquery svg');
  let skillsListPhp = document.querySelector('.skills-list__item_php svg');
  let skillsListWordpress = document.querySelector('.skills-list__item_wordpress svg');
  let skillsListSql = document.querySelector('.skills-list__item_sql svg');
  let skillsListGit = document.querySelector('.skills-list__item_git svg');
  let skillsListSeo = document.querySelector('.skills-list__item_seo svg');
  let skillsListPhotoshop = document.querySelector('.skills-list__item_photoshop svg');
  let skillsListFigma = document.querySelector('.skills-list__item_figma svg');
  let skillsListDesign = document.querySelector('.skills-list__item_design svg');

  function isOnVisibleSpace(element) {
    var bodyHeight = window.innerHeight;
    var elemRect = element.getBoundingClientRect();
    var offset   = elemRect.top;
    if(offset<0) return false;
    if(offset>bodyHeight) return false;
    return true;
  }

  let  listenedElements = [];

  window.onscroll = function() {
    listenedElements.forEach(item=>{
      let result = isOnVisibleSpace(item.el);
    
      if(item.el.isOnVisibleSpace && !result){
        item.el.isOnVisibleSpace = false;
        item.outVisibleSpace(item.el);
        return;
      }
      if(!item.el.isOnVisibleSpace && result){
        item.el.isOnVisibleSpace = true;
        item.inVisibleSpace(item.el);
        return;
      }
    });
  }

  function onVisibleSpaceListener(elementId, cbIn, cbOut) {
    let el = document.getElementById(elementId);
    listenedElements.push({
      el: el,
      inVisibleSpace: cbIn,
      outVisibleSpace: cbOut    
    });
  }

  onVisibleSpaceListener("row-first", 
    el=>{
      function drawHtml() {
        skillsListHtml.classList.add('active');
        skillsListCss.classList.add('active');
        skillsListJs.classList.add('active');
        skillsListJquery.classList.add('active');
      }
      setTimeout(drawHtml, 300);
    },
    el=>{
    },
  );

  onVisibleSpaceListener("row-second", 
    el=>{
      function drawHtml() {
        skillsListPhp.classList.add('active');
        skillsListWordpress.classList.add('active');
        skillsListSql.classList.add('active');
        skillsListGit.classList.add('active');
      }
      setTimeout(drawHtml, 300);
    },
    el=>{
    },
  );

  onVisibleSpaceListener("row-third", 
    el=>{
      function drawHtml() {
        skillsListSeo.classList.add('active');
        skillsListPhotoshop.classList.add('active');
        skillsListFigma.classList.add('active');
        skillsListDesign.classList.add('active');
      }
      setTimeout(drawHtml, 300);
    },
    el=>{
    },
  );

  let educationLine = document.getElementById('education-line');
  let expirienceLine = document.getElementById('expirience-line');

  // Way-Line
  onVisibleSpaceListener("education-line", 
  el=>{
    function drawHtml() {
      educationLine.classList.add('active');
      expirienceLine.classList.add('active');
    }
    setTimeout(drawHtml, 300);
  },
  el=>{
  },
);

});