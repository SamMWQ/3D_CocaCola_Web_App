// JavaScript document.getElementById(parameter) where parameter is usually a div tag ID
var counter = 0;

/*
function swap(selected) {
    // First don't display all div id contents
    document.getElementById('home').style.display = 'none';
    document.getElementById('models').style.display = 'none';

    // Then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}
*/

function changeLook() {
  counter += 1;
  switch (counter) {
    // Use to change the style dynamically
    case 1:
      document.getElementById("body").style.backgroundColor = "lightblue";
      document.getElementById("header").style.backgroundColor = "#FF0000";
      document.getElementById("footer").style.backgroundColor = "#FF9900";
      break;
    case 2:
      document.getElementById("body").style.backgroundColor = "#FF6600";
      document.getElementById("header").style.backgroundColor = "#FF9999";
      document.getElementById("footer").style.backgroundColor = "#996699";
      break;
    case 3:
      document.getElementById("body").style.backgroundColor = "coral";
      document.getElementById("header").style.backgroundColor = "darkcyan";
      document.getElementById("footer").style.backgroundColor = "darksalmon";
      break;
    case 4:
      document.getElementById("body").style.backgroundColor = "lightgray";
      document.getElementById("header").style.backgroundColor = "chocolate";
      document.getElementById("footer").style.backgroundColor = "dimgray";
      counter = 0;
      break;
  }
}

function changeBack() {
  document.getElementById("body").style.backgroundColor = "#FFFFFF";
  document.getElementById("header").style.backgroundColor =
    "rgba(175, 0, 0, 1)";
  document.getElementById("footer").style.backgroundColor =
    "rgba(175, 0, 0, 1)";
}

$(document).ready(function () {
  $("#about").hide();
  $("#models").hide();
  $("#second-model-description").hide();
  $("#third-model-description").hide();
  $("#title_apple").hide();
  $("#text_apple").hide();
  $("#title_power").hide();
  $("#text_power").hide();
});

$(document).ready(function () {
  $("#show-models").click(function () {
    $("#home").hide();
    $("#models").show();
    $(window).scrollTop(0); // Scroll to the top of the page
  });
  $("#show-home").click(function () {
    $("#models").hide();
    $("#home").show();
    $(window).scrollTop(0); // Scroll to the top of the page
  });
  $("#first-model").click(function () {
    $("#first-model-description").show();
    $("#second-model-description").hide();
    $("#third-model-description").hide();
  });
  $("#second-model").click(function () {
    $("#first-model-description").hide();
    $("#second-model-description").show();
    $("#third-model-description").hide();
  });
  $("#third-model").click(function () {
    $("#first-model-description").hide();
    $("#second-model-description").hide();
    $("#third-model-description").show();
  });
});

$(document).ready(function () {
  // Add click event to navigation item buttons
  $(".nav-link").click(function () {
    // Remove "active" class from all navigation item buttons
    $(".nav-link").removeClass("active");
    // Add "active" class to clicked navigation item button
    $(this).addClass("active");
  });
});

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Switch description and page colour scheme
function cokeDescription() {
  $("button").click(function () {
    $("#title_cola").show();
    $("#text_cola").show();
    $("#title_apple").hide();
    $("#text_apple").hide();
    $("#title_power").hide();
    $("#text_power").hide();

    // Update the body background gradient
    $("body").css({
      background: "linear-gradient(-45deg, #791313, #e3212a)",
    });

    // Update the navbar brand colour
    $(".navbar_header .navbar-brand").css({
      color: "#cc2735",
    });

    // Update the nav-link colour
    $(".nav-link").css({
      color: "#cc2735",
    });

    // Update the navbar-menu .button colour
    $(".navbar-menu .button").css({
      color: "#cc2735",
    });

    // Change the colour of the Three.js material
    changeMaterialColor("#cc2735");

    // Update the background colour of #main_text a
    $("#main_text a").css({
      "background-color": "#cc2735",
    });
  });
}

function appleDescription() {
  $("button").click(function () {
    $("#title_cola").hide();
    $("#text_cola").hide();
    $("#title_apple").show();
    $("#text_apple").show();
    $("#title_power").hide();
    $("#text_power").hide();

    // Update the body background gradient
    $("body").css({
      background: "linear-gradient(-45deg, #34421E, #83A455)",
    });

    // Update the navbar brand colour
    $(".navbar_header .navbar-brand").css({
      color: "#71BF45",
    });

    // Update the nav-link colour
    $(".nav-link").css({
      color: "#71BF45",
    });

    // Update the navbar-menu .button colour
    $(".navbar-menu .button").css({
      color: "#71BF45",
    });

    // Change the colour of the Three.js material
    changeMaterialColor("#71BF45");

    // Update the background colour of #main_text a
    $("#main_text a").css({
      "background-color": "#71BF45",
    });
  });
}

function powerDescription() {
  $("button").click(function () {
    $("#title_cola").hide();
    $("#text_cola").hide();
    $("#title_apple").hide();
    $("#text_apple").hide();
    $("#title_power").show();
    $("#text_power").show();

    // Update the body background gradient
    $("body").css({
      background: "linear-gradient(-45deg, #2F4960, #699CB9)",
    });

    // Update the navbar brand colour
    $(".navbar_header .navbar-brand").css({
      color: "#0FA2D6",
    });

    // Update the nav-link colour
    $(".nav-link").css({
      color: "#0FA2D6",
    });

    // Update the navbar-menu .button colour
    $(".navbar-menu .button").css({
      color: "#0FA2D6",
    });

    // Change the colour of the Three.js material
    changeMaterialColor("#0FA2D6");

    // Update the background colour of #main_text a
    $("#main_text a").css({
      "background-color": "#0FA2D6",
    });
  });
}
