document.addEventListener('DOMContentLoaded', function() {
    const mainTab = document.querySelector('.selected');
    const tabs = document.querySelectorAll('nav ul li');
    const contentSections = document.querySelectorAll('.content-section');
    const logo = document.querySelector('.logo');
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxElements = document.querySelectorAll('.parallax-image, .parallax-title');

// Loop over tabs to add click event listener
// tabs.forEach(function(tab) {
//   tab.addEventListener('click', function() {
//     // Get id of clicked tab
//     const tabId = tab.id;

//     // 4. Show content section with same id as clicked tab
//       //MUST CHANGE LOGIC SO MY ACCOUNT IS NOT AFFECTED BY THIS
//     showContentSection(tabId);
//   });
// });

// 5. Define function to show content section
function showContentSection(sectionId) {
  // 6. Loop over content sections
  contentSections.forEach(function(section) {
    // 7. If section id is same as clicked tab id
    if (section.id === sectionId) {
      // 8. Remove "hidden-tab" class
      section.classList.remove('hidden-tab');
    } else {
      // 9. Add "hidden-tab" class
      section.classList.add('hidden-tab');
    }
  });
}
    
  
    function selectTab(tabElement) {
      tabs.forEach(function(tab) {
        tab.classList.remove('selected');
      });
      tabElement.classList.add('selected');
    }
  
    function switchToMainTab() {
      showContentSection('main-content');
      selectTab(mainTab);
    }
  
    mainTab.addEventListener('click', switchToMainTab);
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        //logic shall pass the my account window for a check as 
        // My Account need to be checked if user is logged in or not
        if(tab.id = "my-account"){
          checkLoggedIn();
        }
        const sectionId = tab.id + '-content';
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
  });

  //NOT YET WORKING
  function checkLoggedIn() {
    if (document.cookie.indexOf('user_id=') !== -1) {
      // The user is currently logged in, display the "My Account" window
      document.getElementById('my-account').style.display = 'block';
    } else {
      // The user is not logged in, display the login window
      document.getElementById('login').style.display = 'block';
    }
  }  
  