// JavaScript document
$(document).ready(function () {
  // AJAX service request to get the main text data from the json data store
  $.getJSON("../application/model/data.json", function (jsonObj) {
    console.log(jsonObj);
    // Get the first home page main text data
    $("#title_home").html(
      "<h1>" + jsonObj.homePageText[0].titleHistory + "<h1>"
    );
    $("#subtitle_home").html(
      "<h2>" + jsonObj.homePageText[0].subtitleHistory + "<h2>"
    );
    $("#text_home").html("<p>" + jsonObj.homePageText[0].textHistory + "<p>");
    $("#link_home").html(
      "<a href='" +
        jsonObj.homePageText[0].link +
        "'class='btn btn-primary btn-responsive'>Find out more</a>"
    );

    // Get the second home page main text data
    $("#title2_home").html(
      "<h1>" + jsonObj.modelPageText[1].titleAppletiser + "<h1>"
    );
    $("#text2_home").html(
      "<p>" + jsonObj.modelPageText[1].textAppletiser + "<p>"
    );
    $("#link2_home").html(
      "<a href='" +
        jsonObj.homePageText[1].link +
        "'class='btn btn-primary btn-responsive'>Find out more</a>"
    );

    // Get the third home page main text data
    $("#title3_home").html(
      "<h1>" + jsonObj.modelPageText[2].titlePowerade + "<h1>"
    );
    $("#text3_home").html(
      "<p>" + jsonObj.modelPageText[2].textPowerade + "<p>"
    );
    $("#link3_home").html(
      "<a href='" +
        jsonObj.homePageText[2].link +
        "'class='btn btn-primary btn-responsive'>Find out more</a>"
    );

    // Get social media text data
    $("#social_prompt1").html(
      "<h4>" + jsonObj.homePageText[3].socialPrompt + "<h4>"
    );
    $("#social_prompt2").html(
      "<h4>" + jsonObj.homePageText[3].socialPrompt + "<h4>"
    );
    $("#social_prompt3").html(
      "<h4>" + jsonObj.homePageText[3].socialPrompt + "<h4>"
    );

    // Get the model page Coca Cola data
    $("#title_cola").html(
      "<h2 style='font-weight: bold;'>" +
        jsonObj.modelPageText[0].titleCoke +
        "<h2>"
    );
    $("#text_cola").html("<p>" + jsonObj.modelPageText[0].textCoke + "<p>");

    // Get the model page Appletiser data
    $("#title_apple").html(
      "<h2 style='font-weight: bold;'>" +
        jsonObj.modelPageText[1].titleAppletiser +
        "<h2>"
    );
    $("#text_apple").html(
      "<p>" + jsonObj.modelPageText[1].textAppletiser + "<p>"
    );

    // Get the model page Powerade data
    $("#title_power").html(
      "<h2 style='font-weight: bold;'>" +
        jsonObj.modelPageText[2].titlePowerade +
        "<h2>"
    );
    $("#text_power").html(
      "<p>" + jsonObj.modelPageText[2].textPowerade + "<p>"
    );
  });
});
