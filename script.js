var previousPosition = window.pageYOffset;
window.onscroll = function() {
    var currentPosition = window.pageYOffset;
    if (previousPosition > currentPosition) {

        document.getElementById('nav-bar').classList.remove('hide-nav');
    } else {

        document.getElementById('nav-bar').classList.add('hide-nav');
    }
    previousPosition = currentPosition;
}

var menu = document.getElementById('menu-div');
var menuBars = document.getElementById('menu-bars');
var screenOpacity = document.getElementById('screen-opacity');
var closeMenuIcon = document.getElementById("close-menu-icon")

menuBars.addEventListener('click', function() {
    menu.classList.remove('hidden');
    screenOpacity.classList.remove('hidden')
})

closeMenuIcon.addEventListener('click', function() {
    menu.classList.add('hidden');
    screenOpacity.classList.add('hidden')
})

screenOpacity.onclick = function() {
    menu.classList.add('hidden');
    screenOpacity.classList.add('hidden')
}
