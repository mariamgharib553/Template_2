// for navbar responsive.
function togglingFun() {
    var logo = document.querySelector("nav .logo")
    var ul = document.querySelector("header nav ul")
    logo.addEventListener("click", () => {
        if (ul.classList.contains("on")) {
            ul.classList.remove("on")
            ul.classList.add("off")
        } else {
            ul.classList.remove("off")
            ul.classList.add("on")
        }
    })
}
togglingFun();

// for clicking at any link.
function activateElement(list , activeClass_num) {
    var ul_target = [];
    for (let i = 0; i < list.length; i++) {
        ul_target.push(list[i]);
        ul_target[i].onclick = function() {
            document.getElementsByClassName("active")[activeClass_num].classList.remove("active")
            ul_target[i].classList.add("active")
        }
    }
}
activateElement(document.querySelectorAll("nav li a") , 0);

//for switching between active and inactive pages.
let landingPage = document.querySelector("#Home");
let bullets = document.querySelectorAll(".bullets li");
let Images = ["Images/landing.jpg",
            "Images/shuffle-02.jpg",
            "Images/shuffle-03.jpg",
            "Images/shuffle-04.jpg",
            "Images/shuffle-08.jpg"];

let index = 0;
function switchingUpPage() {
    if(index >= Images.length-1) {
        index = 0;
    } else {
        index++;
    }
    landingPage.style.backgroundImage = `url(${Images[index]})`;
    for(let i =0; i<bullets.length; i++) {
        if(bullets[i].classList.contains("active")) {
            bullets[i].classList.remove("active");
        }
    }
    bullets[index].classList.add("active");
}
function switchingDownPage() {
    if(index == 0) {
        index = Images.length-1;
    } else {
        index--;
    }
    landingPage.style.backgroundImage = `url(${Images[index]})`;
    for(let i =0; i<bullets.length; i++) {
        if(bullets[i].classList.contains("active")) {
            bullets[i].classList.remove("active");
        }
    }
    bullets[index].classList.add("active");
}

activateElement(document.querySelectorAll("#Portfolio .container .shuffle-list li"),2);

function showMore() {
    let togglebtn = document.querySelector(".more");
    let hiddenImgs = document.querySelectorAll("#Portfolio .imgs .hidden");
    if(togglebtn.innerHTML === "more") {
        hiddenImgs.forEach((img)=>{
            img.style.cssText = "display: block;";
        });
        togglebtn.innerHTML = "less";
    } else {
        hiddenImgs.forEach((img)=>{
            img.style.cssText = "display: none;";
        });
        togglebtn.innerHTML = "more";
    }
}
