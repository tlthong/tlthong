// translate about-me
var translateVi = document.querySelector('.btn-translate-vietnamese');
var translateEn = document.querySelector('.btn-translate-english');

function translate() {
    document.querySelector('.about-me__des-vietnamese').classList.toggle('close');
    document.querySelector('.about-me__des-vietnamese').classList.toggle('open');
    document.querySelector('.about-me__des-english').classList.toggle('open');
    document.querySelector('.about-me__des-english').classList.toggle('close');
}

translateVi.addEventListener('click',translate);
translateEn.addEventListener('click',translate);


// click show picture

var navClick = document.querySelectorAll('.nav-bar__link');

var navLinkClick = document.links;
 
for (var i = 0; i < navLinkClick.length; i++ ) {
    navLinkClick[i].onclick = function(e) {
    }
}

