function showButton() {
//hide reg + login
//"visible" works here, but not afterwards
document.getElementById("loginW").style.display = 'block';
//document.getElementById("registerW").style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('nav ul li');
  const contentSections = document.querySelectorAll('.content-section');
  const parallaxElements = document.querySelectorAll('.parallax-image, .parallax-title');

  function showContentSection(sectionId) {
    contentSections.forEach(function(section) {
      if (section.id === sectionId) {
        section.classList.remove('hidden-tab');
      } else {
        section.classList.add('hidden-tab');
      }
    });
  }

  function selectTab(tabElement) {
    tabs.forEach(tab => tab.classList.remove('selected'));
    tabElement.classList.add('selected');
  }

  function switchToMainTab() {
    showContentSection('main-content');
    selectTab(mainTab);
  }

  const mainTab = document.querySelector('.selected');
  const logo = document.querySelector('.logo');
  const parallaxContainer = document.querySelector('.parallax-container');

  mainTab.addEventListener('click', switchToMainTab);

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      if (tab.id === 'my-account') {
        checkLoggedIn();
      }
      const sectionId = `${tab.id}-content`;
      showContentSection(sectionId);
      selectTab(tab);
    });
  });

  logo.addEventListener('click', switchToMainTab);

  function parallaxScroll() {
    const scrollPosition = window.pageYOffset;
  
    parallaxElements.forEach(function(element) {
      const speed = parseFloat(element.getAttribute('data-speed'));
      const translateY = -scrollPosition * speed;
  
      element.style.transform = 'translateY(' + translateY + 'px)';
    });
  
    const textColumns = document.querySelectorAll('.text-column');
    textColumns.forEach(function(column) {
      const speed = parseFloat(column.getAttribute('data-speed'));
      const translateY = -scrollPosition * speed;
  
      column.style.transform = 'translateY(' + translateY + 'px)';
    });
  
    const gifContainer = document.querySelector('.gif-container');
    const gifSpeed = parseFloat(gifContainer.getAttribute('data-speed'));
    const translateY = -scrollPosition * gifSpeed;
    gifContainer.style.transform = 'translateY(' + translateY + 'px)';
  }  
  window.addEventListener('scroll', parallaxScroll);

  //not working yet
  //logic supposed to open up Login window if user is not logged in
  //need global variable to check that
  function checkLoggedIn() {
    const userIdCookie = 'user_id=';
    if (document.cookie.includes(userIdCookie)) {
      document.getElementById('my-account').style.display = 'block';
      document.getElementById("loginW").style.display = 'none';
    } else {
      document.getElementById('my-account').style.display = 'block';
      showButton();
    }
  }
});
