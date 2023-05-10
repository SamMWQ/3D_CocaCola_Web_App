// JavaScript Gallery Generator
$(document).ready(function() {
    // Create the XMLHttpRequest Object for communicating with the web server
    var xmlHttp = new XMLHttpRequest();
    // Stores number of horizontalColumns gallery has, if too large, it won't fit in browser window
    //var numberOfColumns = 4;
    // Stores newly generated gallery HTML code
    var htmlCode = "";
    // Temporarily stores server respones whilst code is generated
    var response;
    // Set up the path to the PHP function that reads the image directory to find the thumbnail file names
    var send = "scripts/php/hook.php";
    // Open the connection to the web server
    xmlHttp.open("GET", send, true);
    // Tell the server that the client has no outgoing message, i.e., we are sending nothing to the server
    xmlHttp.send(null);
    // Check we get a valid server response
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
            // Response handler code
            alert(xmlHttp.responseText);
            // Tokenise the response
            response = xmlHttp.responseText.split("~");
            // Start to write the HTML code into the htmlCode string
            //htmlCode += '<tr>';
            // Loop round the response array of tokens, which are the image names
            for (var i=0; i<response.length; i++) {
                /**
                // And continue to build the HTML code for the gallery
                htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="' + 'images/' + response[i] + '">';
                htmlCode += '<img src="images/' + response[i] + '" class="image_thumbnail"/>';
                htmlCode += '</a>';
                htmlCode += '</td>';
                // Control the column layout for the gallery thumbnails
                if (((i+1) % numberOfColumns) == 0) {
                    htmlCode += '</tr><tr>';
                }
                */
                // Handler to build the HTML string
                // Use this to provide a link to the image
                htmlCode += '<a href="assets/images/gallery_images/' + response[i] + '">';
                htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images/' + response[i] + '"/>';
                htmlCode += '</a>';
            }
            /**
            htmlCode += '</tr>';
            // Write the HTML code into the gallery
            document.getElementById('gallery').innerHTML = htmlCode;
            */
            // Return the HTML string to each of the 3 3D App element blocks, coke, sprite and pepper galleries
            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_sprite').innerHTML = htmlCode;
            document.getElementById('gallery_pepper').innerHTML = htmlCode;
        }
    }
});