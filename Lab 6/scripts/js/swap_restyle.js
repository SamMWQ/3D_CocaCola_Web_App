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
            document.getElementById('body').style.backgroundColor = 'lightblue';
            document.getElementById('header').style.backgroundColor = '#FF0000';
            document.getElementById('footer').style.backgroundColor = '#FF9900';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = '#FF6600';
            document.getElementById('header').style.backgroundColor = '#FF9999';
            document.getElementById('footer').style.backgroundColor = '#996699';
            break;
        case 3:
            document.getElementById('body').style.backgroundColor = 'coral';
            document.getElementById('header').style.backgroundColor = 'darkcyan';
            document.getElementById('footer').style.backgroundColor = 'darksalmon';
            break;
        case 4:
            document.getElementById('body').style.backgroundColor = 'lightgray';
            document.getElementById('header').style.backgroundColor = 'chocolate';
            document.getElementById('footer').style.backgroundColor = 'dimgray';
            break;
    }
}

function changeBack() {
    document.getElementById('body').style.backgroundColor = '#FFFFFF';
    document.getElementById('header').style.backgroundColor = 'rgba(175, 0, 0, 1)';
    document.getElementById('footer').style.backgroundColor = 'rgba(175, 0, 0, 1)';
}

$(document).ready(function() {
    $('#about').hide();
    $('#models').hide();
    $('#second-model-description').hide();
    $('#third-model-description').hide();
});

$(document).ready(function() {
    $('#show-models').click(function() {
        $('#home').hide();
        $('#models').show();
    });
    $('#first-model').click(function() {
        $('#first-model-description').show();
        $('#second-model-description').hide();
        $('#third-model-description').hide();
    });
    $('#second-model').click(function() {
        $('#first-model-description').hide();
        $('#second-model-description').show();
        $('#third-model-description').hide();
    });
    $('#third-model').click(function() {
        $('#first-model-description').hide();
        $('#second-model-description').hide();
        $('#third-model-description').show();
    });
});

$(document).ready(function() {
    // Add click event to navigation item buttons
    $('.nav-link').click(function() {
        // Remove "active" class from all navigation item buttons
        $('.nav-link').removeClass('active');
        // Add "active" class to clicked navigation item button
        $(this).addClass('active');
    });
});
