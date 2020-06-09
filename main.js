// Nell’esercizio del pomeriggio dovremo scaricare un menu già completo nella parte html-css 
// e dovremo aggiungere la funzionalità di apertura/chiusure del menu all’hamburger menu
// (visibile in versione mobile) utilizzando jQuery.




// il click fa apparire il menu nascosto e...
$('.header-right a').click(function () {

    $('.hamburger-menu').addClass('active');

});

// ...fa sparire il menu
$('.hamburger-menu > a').click(function () {

    $('.hamburger-menu').removeClass('active');

});