const frameCount = 23;
const photoLocation = window.location.origin + "/photos/";

function preload(src) {
    let image = new Image();
    image.src = src;
}

for (var i = 1; i <= frameCount; i++) {
    preload(photoLocation+"frame-"+i+".png")
}

preload(photoLocation + "arrowDown.png");
preload(photoLocation + "placeholder.png");