let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function fnResume(type) {
    let i, j, tabContent, tabLinks;

    tabLinks = document.getElementsByClassName("tab-btn");

    for (j = 0; j < tabLinks.length; j++) {
        tabLinks[j].style.backgroundColor = "#3C526F";
    }
    tabContent = document.getElementsByClassName("resume-fi");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(type).style.display = "block";
    document.getElementById(type + "btn1").style.backgroundColor = "#274060";
}