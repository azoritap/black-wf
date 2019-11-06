// ==UserScript==
// @name         Black Wayfarer Lite
// @namespace    https://github.com/klinsk/black-wf
// @version      1.2.2
// @description  Black Wayfarer Review Lite Version
// @author       klinsk
// @match        https://wayfarer.nianticlabs.com/review
// @grant        none
// @run-at       document-idle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @updateURL    https://github.com/klinsk/black-wf/raw/master/black-wf.js
// @downloadURL  https://github.com/klinsk/black-wf/raw/master/black-wf.js
// ==/UserScript==

var $ = window.$;
var COUNTDOWN = 12;

function sendCountdown() {
    var dummyNow = new Date();
    dummyNow.setSeconds(dummyNow.getSeconds() + COUNTDOWN);
    var countDownDate = dummyNow.getTime();
    $('#submitDiv button').append($('<span class="bw-countdown"></span>'));
    $('#submitDiv button').css({
        'color': '#666',
        'background': 'rgba(0,0,0,.085)',
        'cursor': 'default',
        'pointer-events': 'none'
    });
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

        // Display the result in the element
        $('#submitDiv button .bw-countdown').html(' ' + seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $('#submitDiv button .bw-countdown').remove();
            $('#submitDiv button').removeAttr('style');
        }
    }, 1000);
}

waitForKeyElements(".card-area[ng-show*=EDIT]:not(.ng-hide)", function() {
    $('.bw-fiveStars').hide();
});

waitForKeyElements(".known-information div", function() {
    $('.known-information div').css({
        'font-size': '11px',
        'color': '#ffffff',
        'padding': '10px 0px 0px 0px'
    });

    $('.known-information.known-information__title div').css({
        'padding': '0px'
    });

    $('.known-information div[ng-if="!answerCtrl.needsTitleEdit"], .known-information div[ng-if="answerCtrl.needsTitleEdit"]').css({
        'font-size': '14px'
    });
});

waitForKeyElements(".supporting-statement-central-field", function() {
    $('.supporting-statement-central-field').css({
        'padding': '15px 0px 0px 0px',
        'background-color': '#353535'
    });

    $('.supporting-statement-central-field p').css({
        'color': '#ffffff',
        'font-size': '11px'
    });

});

waitForKeyElements('.known-information--placeholder[ng-if="answerCtrl.needsDescriptionEdit"]', function() {
    $('.known-information--placeholder[ng-if="answerCtrl.needsDescriptionEdit"]').hide();
});

$(document).ready(function() {

    //Fondo Negro
    $('.container').css({
        'background-color': '#252525',
        'padding': '0px 15px 0px 15px'
    });

    //Oculta cabecera
    $('.answer-header').hide();
    $('.card-area').css({
        'margin': '0px'
    });
    $('.answer-btn-container.bottom-btns').css({
        'margin': '15px 0px'
    });

    //Tarjetas
    $('.card').css({
        'background-color': '#353535',
        'color': '#ffffff',
        'height': '90px',
        'min-height': '90px',
        'line-height': '1.1',
        'font-size': '14px',
        'box-shadow': '1px 2px 4px #1b1b1b'
    });

    $('.button-secondary').css({
        'box-shadow': '1px 2px 4px #1b1b1b'
    });

    //Titulo tarjetas
    $('.card-style__header, .card__header').css({
        'margin-bottom': '5px'
    });

    $('.card-header__title').css({
        'color': '#E47252',
        'font-size': '14px'
    });

    $('.card-header__description').css({
        'font-size': '11px'
    });

    //Titulos dentro tarjetas
    $('.card .flexbox-grow.supporting-central-field').css('background-color', '#353535');
    $('.card h1.title-description').css({
        'color': '#ffffff',
        'font-size': '14px'
    });
    $('.card h4.title-description').css({
        'color': '#ffffff',
        'font-size': '11px'
    });

    $('.card-header__description').hide();

    //Comentarios ocultos review
    $('#what-is-it-card, #additional-comments-card').hide();
    //Comentarios ocultos edit
    $('.what-is-it-card, .comments-card').hide();

    //Orden tarjetas
    $('#descriptionDiv').append($('#histcult-card .card__header.card-header'));
    $('#descriptionDiv').append($('#histcult-card .card__body'));
    $('#descriptionDiv').append($('#histcult-card .card__footer'));
    $('#descriptionDiv').append($('#uniqueness-card .card__header.card-header'));
    $('#descriptionDiv').append($('#uniqueness-card .card__body'));
    $('#descriptionDiv').append($('#uniqueness-card .card__footer'));
    $('#descriptionDiv').append($('#safety-card .card__header.card-header'));
    $('#descriptionDiv').append($('#safety-card .card__body'));
    $('#descriptionDiv').append($('#safety-card .card__footer'));
    $('#three-card-container').remove();

    $('#photo-card').css({
        'order': 1,
        'height': '390px'
    });

    $('#photo-card .card__header.card-header').hide();

    var $fiveStarsButton = $('<button class="button-primary">5✭</button>').css({
        'min-width': '60px'
    });
    var $fiveStarsButtonDiv = $('<div class="bw-fiveStars submit-btn-container"></div>').css({
        'float': 'left'
    });
    $fiveStarsButtonDiv.append($fiveStarsButton);

    $fiveStarsButton.on('click', function() {
        $('.five-stars button:last-child').click();
    });

    $('#photo-card .five-stars').after($fiveStarsButtonDiv);

    $('#supporting-card').removeClass('ng-hide');
    $('#supporting-card').css({
        'order': 2,
        'height': '390px'
    });

    $('#supporting-card .card__header.card-header').hide();

    $('#descriptionDiv').css({
        'order': 3,
        'height': '390px'
    });

    $('#map-card').removeClass().addClass('card').addClass('card--expand').css({
        'order': 5,
        'height': '390px'
    });

    $('#map-card .card__footer').css({
        'margin-top': '0px'
    });

    //Map reset new icon
    $('#map-card .reset-map-icon').hide();

    var $resetMapIcon = $('<div class="bw-reset-map-icon"></div>').html('↻').css({
        'font-size': '20px',
        'color': '#ffffff',
        'background': 'none',
        'background-size': 'unset',
        'opacity': 1,
        'margin-left': '15px',
        'width': '24px',
        'height': '24px',
        'text-align': 'right',
        'display': 'inline-block;',
        'margin': '0 auto',
        'cursor': 'pointer'
    })

    $resetMapIcon.on('click', function() {
        $('#map-card .reset-map-icon').click();
    });

    $('#map-card .card-header__actions').append($resetMapIcon);

    var $address = $('#map-card .flex-map-row *:last-child').removeClass('ng-hide').attr('style',
        'margin-bottom: 15px; display: block !important; font-size: 11px;'
    );
    $('#supporting-card').prepend($address);

    $('#duplicates-card').removeClass().addClass('card').addClass('card--expand').css({
        'order': 6,
        'height': '390px',
        'color': '#353535',
    });

    //Map reset new icon
    $('#duplicates-card .reset-map-icon').hide();

    var $resetDuplicatesMapIcon = $('<div class="bw-reset-map-icon"></div>').html('↻').css({
        'font-size': '20px',
        'color': '#ffffff',
        'background': 'none',
        'background-size': 'unset',
        'opacity': 1,
        'margin-left': '15px',
        'width': '24px',
        'height': '24px',
        'text-align': 'right',
        'display': 'inline-block;',
        'cursor': 'pointer'
    })

    $resetDuplicatesMapIcon.on('click', function() {
        $('#duplicates-card .reset-map-icon').click();
    });

    $('#duplicates-card .card-header__top').append($resetDuplicatesMapIcon);

    $('.known-information-card').css({
        'height': '100%',
        'background-color': '#353535',
        'color': '#ffffff',
        'overflow-y': 'hidden',
        'border': 'none'
    });

    $('.known-information-card .card-header').hide();

    $('.known-information').css({
        'background-color': '#353535',
        'min-height': 'unset'
    });

    $('.known-information__title').css({
        'padding-bottom': '5px'
    });

    $('.known-information__title').css({
        'color': '#ffffff'
    });

    $('.known-information__map').css({
        'padding-top': '10px'
    });

    $('.known-information-group').hide();

    $('.known-information-group').children().each(function() {
        $('.known-information-group').parent().append($(this));
    });

    $('.known-information-card h3').css({
        'color': '#ffffff',
        'font-size': '14px'
    });

    $('.known-information-description').css({
        'font-size': '11px'
    });

    $('.card[ng-show="subCtrl.pageData.titleEdits.length > 1"]').css({
        'height': 'unset',
        'width': '100%'
    });

    $('.card[ng-show="subCtrl.pageData.descriptionEdits.length > 1"]').css({
        'height': 'unset',
        'width': '100%'
    });

    $('.known-information--placeholder[ng-show="answerCtrl.needsLocationEdit"]').hide();
    $('.known-information--placeholder[ng-if="answerCtrl.needsDescriptionEdit"]').hide();

    $('.map-edit-card').css({
        'height': '400px',
        'width': '100%'
    });

    sendCountdown();
});
