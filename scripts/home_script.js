const image_slideshow = document.getElementById('image_slideshow');

let imageSources = [
    'images/product1.png',
    'images/lightsaber-butter-knife.jpg',
    'images/neon-green-sword.jpg',
    'images/toastie-knife.jpg'
]

let currentSrcNum = 0;
let currentImgSrc = 'images/Four_Star_Products_alpha.png';

let cycleImgs = () => {
    if (currentSrcNum >= imageSources.length - 1) {
        currentSrcNum = 0;
    } else {
    currentSrcNum++;
    }
    currentImgSrc = imageSources[currentSrcNum];
}

let setSlideShowImage = imgSrc => {
    image_slideshow.innerHTML = '<img src="' + imgSrc + '" id="ss_image" />'
}

let runSlideshow = () => {
    cycleImgs();
    setSlideShowImage(currentImgSrc);
}

setInterval(runSlideshow, 2000)
