// ==UserScript==
// @name         Black Wayfarer Lite
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       klinsk
// @match        https://wayfarer.nianticlabs.com/review
// @grant        none
// @run-at       document-idle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

var $ = window.$;

waitForKeyElements (".card-area[ng-show*=EDIT]:not(.ng-hide)", function() {
    $('.bw-fiveStars').hide();
});

$(document).ready(function() {

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
        'background-color': '#252525',
        'color': '#ffffff',
        'height': '90px',
        'min-height': '90px',
        'width': '360px',
        'min-width': '360px',
        'line-height': '1.1',
        'font-size': '14px'
    });

    //Titulo tarjetas
    $('.card-style__header, .card__header').css({
        'margin-bottom': '5px'
    });

    $('.card-header__title').css({
        'color': '#df471c',
        'font-size': '14px'
    });

    $('.card-header__description').css({
        'font-size': '11px'
    });

    //Titulos dentro tarjetas
    $('.card .flexbox-grow.supporting-central-field').css('background-color', '#252525');
    $('.card h1.title-description.ng-binding').css({
        'color': '#ffffff',
        'font-size': '14px'
    });
    $('.card h4.title-description.ng-binding').css({
        'color': '#ffffff',
        'font-size': '11px'
    });
    $('.card .supporting-statement-central-field').css('background-color', '#252525');
    $('.card .supporting-statement-central-field p').css({
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

    var $address = $('#map-card .flex-map-row *:last-child').removeClass('ng-hide').css({
        'margin-bottom': '15px'
    });
    $('#supporting-card').prepend($address);

    $('#duplicates-card').removeClass().addClass('card').addClass('card--expand').css({
        'order': 6,
        'height': '400px',
        'color': '#252525',
    });

    $('.known-information-card').css({
        'max-width': '360px',
        'min-width': '360px',
        'min-height': '90px',
        'height': '500px',
        'background-color': '#252525',
        'color': '#ffffff',
        'overflow-y': 'hidden'
    });

    $('.known-information-card h3').css({
        'color': '#ffffff',
    });

    $('.card[ng-show="subCtrl.pageData.titleEdits.length > 1"]').css({
        'height': '400px',
        'width': '100%'
    });

    $('.card[ng-show="subCtrl.pageData.descriptionEdits.length > 1"]').css({
        'height': '400px',
        'width': '100%'
    });

    $('.map-edit-card').css({
        'height': '400px',
        'width': '100%'
    });

    var $fiveStarsButton = $('<button class="button-primary">✭✭✭✭✭</button>');
    var $fiveStarsButtonDiv = $('<div class="bw-fiveStars submit-btn-container" style="margin-left: 30px;"></div>');
    $fiveStarsButtonDiv.append($fiveStarsButton);

    $('.answer-btn-container').append($fiveStarsButtonDiv);

    $fiveStarsButton.on('click', function() {
        $('.five-stars button:last-child').click();
        //$('#submitDiv button').click();
    });
});