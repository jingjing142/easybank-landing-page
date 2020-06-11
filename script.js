// const blogText = document.querySelectorAll('.blog-text');
// const lessThan1130 = window.matchMedia('(max-width: 1130px)');

// function removeBlogText(lessThan1130) {
//     if (lessThan1130.matches) {
//         blogText.forEach(text => (text.classList.add('hide')));
//     } else {
//         blogText.forEach(text => (text.classList.remove('hide')))
//     }
// }

// lessThan1130.addListener(removeBlogText);

const hamburger = document.getElementById('hamburger');
const menuWrapper = document.getElementById('menu-wrapper');
const closeBtn = document.getElementById('close-btn')

hamburger.addEventListener('click', displayMenu)
closeBtn.addEventListener('click', hideMenu)

function displayMenu() {
    menuWrapper.classList.toggle('visible');
    hamburger.setAttribute('style', 'display: none');
    closeBtn.removeAttribute('style', 'display: none');
}

function hideMenu() {
    menuWrapper.classList.toggle('visible');
    hamburger.removeAttribute('style', 'display: none');
    closeBtn.setAttribute('style', 'display: none');
}

