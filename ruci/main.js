window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('bg-white', 'rounded-b-2xl');
    } else {
      header.classList.remove('bg-white', 'rounded-b-2xl');
    }
  });
  
  window.addEventListener('scroll', function() {
    var scroll = document.getElementById('scroll-bt');
    if (window.scrollY > 100) {
      scroll.classList.remove('hidden');
    } else {
      scroll.classList.add('hidden');
    }
  });

  
  
  var mySwiper = new Swiper('.mySwiper', {
    // Other settings...
    autoplay: {
        delay: 6000, // 3 seconds in milliseconds
        disableOnInteraction: false, // Continues autoplay after user interactions
    },
    // ... more settings
});

document.addEventListener('DOMContentLoaded', function () {
  // Get references to the menu bar, mobile menu, close button, and menu links
  var menuBar = document.getElementById('menu-bar');
  var mobileMenu = document.getElementById('mobil-menu');
  var noMenu = document.getElementById('no-menu');
  var menuLinks = document.querySelectorAll('#mobil-menu ul li a');

  // Toggle mobile menu visibility when the menu bar is clicked
  menuBar.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
  });

  // Hide the mobile menu when the close button (no-menu) is clicked
  noMenu.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
  });

  // Hide the mobile menu when any of the menu links are clicked
  menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var menuBar = document.getElementById('menu-bar');
  var mobileMenu = document.getElementById('mobil-menu');
  var noMenu = document.getElementById('no-menu');
  var menuLinks = document.querySelectorAll('#mobil-menu ul li a');

  function toggleMenu() {
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenu.classList.toggle('opacity-0');
  }

  menuBar.addEventListener('click', toggleMenu);
  noMenu.addEventListener('click', toggleMenu);

  menuLinks.forEach(function (link) {
      link.addEventListener('click', toggleMenu);
  });
});