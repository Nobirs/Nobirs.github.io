let navImage = document.querySelector(".MenuImage");
let navLinks = document.querySelectorAll(".navLink");
let allDetails = document.querySelectorAll("details");

for(let link of navLinks) {
    link.onclick = function(e) {
        navImage.click();
        for (detail of allDetails) {
            if (link.innerText != detail.querySelector('summary').innerText) {
                detail.open = false;
            }
            else {
                detail.open = true;
            }
        }
        if (link.innerText == 'Contacts') {
            let butterflyGif = document.querySelector(".butterfly_image");
            butterflyGif.style.display = 'block';
            setTimeout(() => {
                butterflyGif.style.display = 'none';
            }, 1800);
        }
    };
}

navImage.onclick = function(e) {
    let navMenu = document.querySelector(".MenuBar");
    navMenu.classList.toggle('active');
    document.querySelector("body").classList.toggle("stop_scroll");
}

