// Some comments so that it saves

// Works toggle menu
let toggleNavStatus = false;
console.log("imported js");

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    console.log("Click!");

    if(toggleNavStatus) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.height = "0";
        let arrayLength = getSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    } else if (!toggleNavStatus) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.height = "260px";
        let arrayLength = getSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }
}

// Menu bar scrolling thing
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    console.log("Scrolled!")
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        let getSidebar = document.querySelector(".nav-sidebar");
        getSidebar.style.top = "100px";

        if (window.innerWidth > 900)
            document.getElementById("navbar-wide").style.top = "0";
        else
            document.getElementById("navbar-small").style.top = "0";
    } else {
        if (toggleNavStatus) {
            let getSidebar = document.querySelector(".nav-sidebar");
            getSidebar.style.top = "0px";
            toggleNav();
        }

        if (window.innerWidth > 900)
            document.getElementById("navbar-wide").style.top = "-100px";
        else
            document.getElementById("navbar-small").style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
}
