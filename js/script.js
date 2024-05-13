let heartImg = document.querySelector('#heartImg');
// heartImg.addEventListener('click', play())
let heartImage = document.querySelector('.heartImage');
let swiperWrapper = document.querySelector('.swiper-wrapper');
var currentAudio = null;
// It does not work so. HAve a look at it later. 
function createSlides() {
    let swiperWrapper = document.querySelector('.swiper-wrapper');
    console.log(swiperWrapper)
    for (let i = 1; i < 15; i++) {
        swiperWrapper.innerHTML += `<div class="swiper-slide"> <img src="../pic/pic${i}.png" /> </div>`;
    }
    console.log(swiperWrapper)
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "cards",
    grabCursor: true,

});

// createSlides();

heartImage.addEventListener('click', () => {
    console.log('clicked')
    // Show Slider 
    swiperWrapper.style.opacity = 1;
});

function playSong(songName) {
    var audioElements = document.querySelectorAll("audio");
    audioElements.forEach(function (audio) {
        audio.pause();
    });
    let audio = new Audio(`../music/${songName}.mp3`);
    audio.song = songName;
    // stop the other songs
    if (currentAudio) {

        currentAudio.pause();
        if (currentAudio.song == songName) {

            audio.pause();
            stopCircleAnimation(document.querySelector(`.circle[data-song="${songName}"]`));
        } else {
            audio.play();
            stopCircleAnimation(document.querySelector(`.circle[data-song="${currentAudio.song}"]`));
        }
    }
    else {
        audio.play();
    }


    // audio.play();
    currentAudio = audio;

}

function setSongs() {
    let circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {

            let songName = circle.getAttribute('data-song');
            playSong(songName);
            circleAnimation(circle);
        });
    })
}

function circleAnimation(circle) {
    circle.style.border = '5px solid red';
    circle.style.animation = "borderColorChange 5s infinite alternate";
}

function stopCircleAnimation(circle) {
    console.log(circle)
    circle.style.border = '1px solid yellow';
    circle.style.animation = "none";
}




function init() {
    swiperWrapper.style.opacity = 0;
}
setSongs();
init();