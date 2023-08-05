console.log("from script file");console.log("from script file");console.log("from script file");console.log("from script file");

document.addEventListener("scroll", function () {
    const homeSection = document.querySelector(".home");
    const homeHeight = homeSection.offsetHeight;
    const additionalText = document.querySelector(".additional-text");
    const scrollPosition = window.scrollY;

    if (scrollPosition < homeHeight) {
        homeSection.classList.add("show-text");
    } else {
        homeSection.classList.remove("show-text");
    }

    const showreelSection = document.querySelector(".showreel");
    const showreelOffsetTop = showreelSection.offsetTop;
    const showreelHeight = showreelSection.offsetHeight;
    const videoPlayer = showreelSection.querySelector("video");
    const isVideoMuted = videoPlayer.muted;

    if (scrollPosition >= showreelOffsetTop && scrollPosition <= showreelOffsetTop + showreelHeight) {
        showreelSection.classList.add("show-text");
    } else {
        showreelSection.classList.remove("show-text");
    }

    if (isVideoMuted) {
        showreelSection.classList.remove("unmuted");
    } else {
        showreelSection.classList.add("unmuted");
    }
});

const homeSection = document.querySelector(".home");
homeSection.addEventListener("mouseover", function () {
    homeSection.classList.add("hover-effect");
});

homeSection.addEventListener("mouseout", function () {
    homeSection.classList.remove("hover-effect");
});