let navImage = document.querySelector(".MenuImage");
let navLinks = document.querySelectorAll(".navLink");
let allDetails = document.querySelectorAll("details");
let footerContacts = document.querySelector('.ContactsFooter');

for(let link of navLinks) {
    link.onclick = function(e) {
        navImage.click();
        for (let detail of allDetails) {
            if (link.innerText != detail.querySelector('summary').innerText) {
                detail.open = false;
            }
            else {
                detail.open = true;
            }
        }
        if (link.innerText == 'Contacts') {
            footerContacts.style.display = 'block';
            let butterflyGif = document.querySelector(".butterfly_image");
            butterflyGif.style.display = 'block';
            setTimeout(() => {
                butterflyGif.style.display = 'none';
            }, 1800);
        } else {
            footerContacts.style.display = 'none';
        }
    };
}

navImage.onclick = function(e) {
    let navMenu = document.querySelector(".MenuBar");
    navMenu.classList.toggle('active');
    document.querySelector("body").classList.toggle("stop_scroll");
}


let details = document.querySelectorAll("details");
let mediaQueryList = window.matchMedia("(min-width: 600px)");


function openDetails(e) {
    if (e.matches) {
        for(let detail of details) {
            detail.setAttribute("open", "open");
        }
    } else {
        for(let detail of details) {
            detail.removeAttribute("open");
        }
    }
}

mediaQueryList.addListener(openDetails);


// var forceOpen = window.getComputedStyle(details).getPropertyValue("--details-force-opened");

// function forceState(isOpen) {
//   if( isOpen ) {
//     details.setAttribute("open", "open");
//   } else {
//     details.removeAttribute("open");
//   }
// }

// if(forceOpen && "matchMedia" in window) {
//   var mm1 = window.matchMedia(forceOpen);
//   forceState(mm1.matches);
//   mm1.addListener(function(e) {
//     forceState(e.matches);
//   });
// }


