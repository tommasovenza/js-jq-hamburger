// // Nell’esercizio del pomeriggio dovremo scaricare un menu già completo nella parte html-css e dovremo aggiungere la funzionalità di 
// apertura/chiusure del menu all’hamburger menu(visibile in versione mobile) utilizzando jQuery.
// Il codice base è scaricabile da qui https://bitbucket.org/booleancareers/ex-hamburger-menu-base

// Nome repo: js-jq-hamburger

// Buon lavoro! :)


// il click fa apparire il menu nascosto e...
$('.fa-bars').click(function() {

        $('.hamburger-menu').show();
    
}); 

// ...fa sparire il menu
$('.fa-times').click(function() {

    $('.hamburger-menu').hide();

}); 

