// JavaScript Gallery Generator using Flickr API to source the images
$(document).ready(function () {
  // Call the loadImages method, you can comment this out if you don't want it to load immediately
  loadImages();
});

function loadImages() {
  // Grab the image type you are looking for
  var txt = $("#txt").val();

  console.log(txt);
  // Create a URI for the Flickr web service API call
  var urlFlickr =
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" +
    txt +
    "&sort=relevance&license=1,2,3,4,5,6,7&safe_search=1&jsoncallback=?";

  // Use the jQuery .getJson() method to fetch the JSON object back from the Flickr web service
  $.getJSON(
    urlFlickr,
    { tags: txt, tagmode: "all", format: "json" },
    function (data) {
      // Use console.log() to inspect the returned JSON object
      console.log(data);

      // Then build a handler to grab the data you want, i.e., in this case, the images related to the input value stored in txt

      var htmlCode = "";

      // Examine the console.log(data) and you will see we have an array of items returned in the data JSON object that we have to ...
      $.each(data.items, function (i, item) {
        // You will remember this approach from the previous Gallery code in Lab 5
        htmlCode +=
          '<div class="imgBox">' +
          "<div><h3>" +
          item.description +
          "</h3></div></div>";

        // Set the loop variable, i.e., how many images you want returned, say, the first 4 images
        // Or comment out if you want all images in the search returned
        if (i == 3) return false;
      });

      // Assign the htmlCode to the images ID selector
      $("#images").html(htmlCode);
    }
  );
}
