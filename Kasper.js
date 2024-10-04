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
function activateElement(list, activeClass_num) {
    var ul_target = [];
    for (let i = 0; i < list.length; i++) {
        ul_target.push(list[i]);
        ul_target[i].onclick = function () {
            document.getElementsByClassName("active")[activeClass_num].classList.remove("active")
            ul_target[i].classList.add("active")
        }
    }
}
activateElement(document.querySelectorAll("nav li a"), 0);

//for switching between active and inactive pages.
let landingPage = document.querySelector("#Home");
let bullets = document.querySelectorAll(".bullets li");
let Images = ["Images/bg/wallpapersden.com_astronaut-fantasy-dream-4k.jpg",
              "Images/wallpapersden.com_planet-rising-over-galaxy.jpg",
              "Images/galaxy-space-fantasy-art.jpg",
              "Images/bg/fantasy-style-galaxy-background.jpg",
              "Images/bg/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai.jpg"];
            //   "Images/bg/HD-wallpaper-astronaut-earth-space-galaxy-satellites.png"];

let index = 0;
function switchingUpPage() {
    if (index >= Images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    landingPage.style.backgroundImage = `url(${Images[index]})`;
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].classList.contains("active")) {
            bullets[i].classList.remove("active");
        }
    }
    bullets[index].classList.add("active");
}
function switchingDownPage() {
    if (index == 0) {
        index = Images.length - 1;
    } else {
        index--;
    }
    landingPage.style.backgroundImage = `url(${Images[index]})`;
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].classList.contains("active")) {
            bullets[i].classList.remove("active");
        }
    }
    bullets[index].classList.add("active");
}
function ImageClick(num) {
    landingPage.style.backgroundImage = `url(${Images[num]})`;
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].classList.contains("active")) {
            bullets[i].classList.remove("active");
        }
    }
    bullets[num].classList.add("active");
}
activateElement(document.querySelectorAll("#Team-Challenges .container .shuffle-list li"), 2);

function showMore() {
    let togglebtn = document.querySelector(".more");
    let hiddenImgs = document.querySelectorAll("#Team-Challenges .imgs .hidden");
    if (togglebtn.innerHTML === "more") {
        hiddenImgs.forEach((img) => {
            img.style.cssText = "display: block;";
        });
        togglebtn.innerHTML = "less";
    } else {
        hiddenImgs.forEach((img) => {
            img.style.cssText = "display: none;";
        });
        togglebtn.innerHTML = "more";
    }
}

/*////////////////////////////GAMES/////////////////////////////////*/

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
const images = [
    { src: "Images/pexels-pixabay-2156.jpg", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/MyPhotos/img-2.jpg", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/MyPhotos/img-3.jfif", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/anime-style-galaxy-background.webp", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/shuffle-05.jpg", alt: "img", title: "Awesome Image", category: "Photography" },

    { src: "Images/MyPhotos/astronaut-4106766_1920.jpg", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/MyPhotos/milky-way-74005_1920.jpg", alt: "img", title: "Awesome Image", category: "Photography" },
    { src: "Images/MyPhotos/pexels-pixabay-39896.jpg", alt: "img", title: "Awesome Image", category: "Photography" },

    { src: "Images/MyPhotos/pexels-pixabay-256379.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/rabbit-8663111_1920.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/MyPhotos/space-4489339_1920.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/MyPhotos/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/MyPhotos/view-astronaut-spacesuit-snowboarding-moon.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },


    { src: "Images/pexels-pixabay-2156.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/pexels-pixabay-206359.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/pexels-therato-1933239.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    { src: "Images/pexels-pixabay-147411.jpg", alt: "img", title: "Awesome Image", category: "Photography", hidden: true },
    // Add other image objects here
];

const imageGallery = document.getElementById('image-gallery');

images.forEach(image => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    if (image.hidden) imgContainer.classList.add('hidden');

    imgContainer.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" />
        <div class="caption">
            <h4>${image.title}</h4>
            <p>${image.category}</p>
        </div>
    `;

    imageGallery.appendChild(imgContainer);
});
