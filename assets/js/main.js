const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

// slider
$(".slider").each(function () {
  // For every slider
  var $this = $(this); // Current slider
  var $group = $this.find(".slide-group"); // Get the slide-group (container)
  var $slides = $this.find(".slide"); // Create jQuery object to hold all slides
  var buttonArray = []; // Create array to hold navigation buttons
  var currentIndex = 0; // Hold index number of the current slide
  var timeout; // Sets gap between auto-sliding

  function move(newIndex) {
    // Creates the slide from old to new one
    var animateLeft, slideLeft; // Declare variables

    advance(); // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass("active"); // Remove class from item
    buttonArray[newIndex].addClass("active"); // Add class to new item

    if (newIndex > currentIndex) {
      // If new item > current
      slideLeft = "100%"; // Sit the new slide to the right
      animateLeft = "-100%"; // Animate the current group to the left
    } else {
      // Otherwise
      slideLeft = "-100%"; // Sit the new slide to the left
      animateLeft = "100%"; // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css({ left: slideLeft, display: "block" });

    $group.animate({ left: animateLeft }, function () {
      // Animate slides and
      $slides.eq(currentIndex).css({ display: "none" }); // Hide previous slide
      $slides.eq(newIndex).css({ left: 0 }); // Set position of the new item
      $group.css({ left: 0 }); // Set position of group of slides
      currentIndex = newIndex; // Set currentIndex to the new image
    });
  }

  function advance() {
    // Used to set
    clearTimeout(timeout); // Clear previous timeout
    timeout = setTimeout(function () {
      // Set new timer
      if (currentIndex < $slides.length - 1) {
        // If slide < total slides
        move(currentIndex + 1); // Move to next slide
      } else {
        // Otherwise
        move(0); // Move to the first slide
      }
    }, 2000); // Milliseconds timer will wait
  }

  $.each($slides, function (index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">•</button>');
    if (index === currentIndex) {
      // If index is the current item
      $button.addClass("active"); // Add the active class
    }
    $button
      .on("click", function () {
        // Create event handler for the button
        move(index); // It calls the move() function
      })
      .appendTo(".slide-buttons"); // Add to the buttons holder
    buttonArray.push($button); // Add it to the button array
  });

  advance(); // Script is set up, advance() to move it
});

// gallery section
$(".gallery").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
// end gallery section

//------- Go to Top --------//
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#header1").addClass("header-scrolled1");
    $("#back-top").addClass("back-top-animation");
  } else {
    $("#header1").removeClass("header-scrolled1");
    $("#back-top").removeClass("back-top-animation");
  }
});

//------- Go to Top --------//
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#header1").addClass("header-scrolled1");
    $("#back-top").addClass("back-top-animation");
  } else {
    $("#header1").removeClass("header-scrolled1");
    $("#back-top").removeClass("back-top-animation");
  }
});

/* ---------------------------------------------
        scroll body to 0px on click
     --------------------------------------------- */
$("#back-top a").on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
  return false;
});
