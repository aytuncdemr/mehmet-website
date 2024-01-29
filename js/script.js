"use strict";

function open_mobile_nav() {
    const mobile_nav_elem = document.querySelector(".mobile-nav");
    const mobile_overlay_elem = document.querySelector(".mobile-overlay");

    mobile_nav_elem.style.display = "flex";

    mobile_overlay_elem.style.display = "block";

    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
}

function close_mobile_nav() {
    const mobile_nav_elem = document.querySelector(".mobile-nav");
    const mobile_overlay_elem = document.querySelector(".mobile-overlay");

    mobile_nav_elem.style.display = "none";
    mobile_overlay_elem.style.display = "none";

    document.body.style.position = "initial";
    document.body.style.overflow = "initial";
}

document.querySelectorAll(".mobile-nav a").forEach((elem) => {
    elem.addEventListener("click", function () {
        close_mobile_nav();
    });
});

document.querySelectorAll(".project").forEach((elem) => {
    elem.addEventListener("click", function () {
        const link = this.querySelector("a").href;
        window.open(link);
    });
});

document.querySelector(".bars").addEventListener("click", open_mobile_nav);
document
    .querySelector(".nav-close-btn")
    .addEventListener("click", close_mobile_nav);
