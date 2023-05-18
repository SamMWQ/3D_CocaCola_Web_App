$(document).ready(function () {
  // Define the Flickr URLs for each gallery
  var flickrUrls = {
    gallery_coke:
      "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=coke+cola&sort=relevance&license=1,2,3,4,5,6,7&safe_search=1&jsoncallback=?",
    gallery_appletiser:
      "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=appletiser&sort=relevance&license=1,2,3,4,5,6,7&safe_search=1&jsoncallback=?",
    gallery_powerade:
      "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=powerade&sort=relevance&license=1,2,3,4,5,6,7&safe_search=1&jsoncallback=?",
  };

  // Generate images for each gallery
  generateGalleryImages("gallery_coke", flickrUrls.gallery_coke);
  generateGalleryImages("gallery_appletiser", flickrUrls.gallery_appletiser);
  generateGalleryImages("gallery_powerade", flickrUrls.gallery_powerade);

  /* // Get height of the tallest of the three galleries
  $(window).resize(function () {
    var cokeGalleryHeight = $("#gallery_coke").height();
    var appletiserGalleryHeight = $("#gallery_appletiser").height();
    var poweradeGalleryHeight = $("#gallery_powerade").height();

    // Find max and set all galleries to that height
    var maxHeight = Math.max(
      cokeGalleryHeight,
      appletiserGalleryHeight,
      poweradeGalleryHeight
    );

    $("#gallery_coke").height(maxHeight);
    $("#gallery_appletiser").height(maxHeight);
    $("#gallery_powerade").height(maxHeight);
  }); */
});

// Function to generate images for a specific gallery
function generateGalleryImages(galleryId, flickrUrl) {
  var htmlCode = "";

  $.getJSON(flickrUrl, { format: "json" }, function (data) {
    $.each(data.items, function (i, item) {
      console.log(item.description); // Display the description in the browser console

      // Start a new column and row every fourth image
      if (i % 4 === 0) {
        htmlCode += '<div class="row">';
      }

      var username = getUsernameFromDescription(item.description);
      var image = getImageFromDescription(item.description);
      var text = getTextFromDescription(item.description);

      htmlCode +=
        '<div class="col-md-3">' +
        '<div class="imgBox">' +
        '<div class="imgContainer">' + // Add a container for the image
        image +
        "</div>" +
        "@" +
        username +
        "</p></div>" +
        "<div><p>" +
        text +
        "</p></div>" +
        "</div>";

      // Close the row after the fourth image
      if ((i + 1) % 4 === 0 || i === data.items.length - 1) {
        htmlCode += '</div class="row">';
      }

      if (i === 3) return false;
    });

    $("#" + galleryId).html(htmlCode);
  });
}

// Helper function to extract the username from the description
function getUsernameFromDescription(description) {
  var startIndex = description.indexOf('<a href="') + 9;
  var endIndex = description.indexOf('">', startIndex);
  var link = description.substring(startIndex, endIndex);
  var startIndexName = endIndex + 2;
  var endIndexName = description.indexOf("</a>", startIndexName);
  var displayName = description.substring(startIndexName, endIndexName);
  return '<a href="' + link + '">' + displayName + "</a>";
}

// Helper function to extract the image with its URL from the description
function getImageFromDescription(description) {
  var startIndex = description.indexOf(
    '<a href="https://www.flickr.com/photos/'
  );
  var endIndex = description.indexOf("</a>", startIndex) + 4;
  var imageUrl = description.substring(startIndex, endIndex);

  // Wrap the image URL in a container with CSS styles
  return '<div class="square-image-container">' + imageUrl + "</div>";
}

// Helper function to extract the text from the description
function getTextFromDescription(description) {
  var startIndex = description.lastIndexOf("</a>") + 9;
  return description.substring(startIndex);
}

// Improving the carousel
$(".carousel").carousel({
  interval: 5000,
  easing: "swing",
  pause: "hover",
});
