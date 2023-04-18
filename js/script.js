let navImage = document.querySelector(".MenuImage");
let navLinks = document.querySelectorAll(".navLink");

for(let link of navLinks) {
    link.onclick = function(e) {
        navImage.click();
    };
}

navImage.onclick = function(e) {
    let navMenu = document.querySelector(".MenuBar");
    navMenu.classList.toggle('active');
    document.querySelector("body").classList.toggle("stop_scroll");
}