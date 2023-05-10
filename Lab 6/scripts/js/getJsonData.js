// JavaScript document
$(document).ready(function() {
    // AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data.json', function(jsonObj) {
        console.log(jsonObj);
        // Get the home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageText[0].titleHistory + '<h2>');
        $('#subtitle_home').html('<h3>' + jsonObj.pageText[0].subtitleHistory + '<h3>');
        $('#text_home').html('<p>' + jsonObj.pageText[0].textHistory + '<p>');
        
        // Get the home page left column text data
        $('#title_left').html('<h2>' + jsonObj.pageText[1].titleCoke + '<h2>');
        $('#text_left').html('<p>' + jsonObj.pageText[1].textCoke + '<p>');
        
        // Get the home page centre column text data
        $('#title_centre').html('<h2>' + jsonObj.pageText[2].titleSprite + '<h2>');
        $('#text_centre').html('<p>' + jsonObj.pageText[2].textSprite + '<p>');
        
        // Get the home page right column text data
        $('#title_right').html('<h2>' + jsonObj.pageText[3].titlePepper + '<h2>');
        $('#text_right').html('<p>' + jsonObj.pageText[3].textPepper + '<p>');
    });
});