window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", scrollVar);
window.addEventListener("resize", scrollVar);

function scrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreen = htmlElement.scrollTop / htmlElement.clientHeight;

    var bocksDepth = Math.floor(Math.min(percentOfScreen * 80, 23));
    if (bocksDepth == 0) bocksDepth = 1;
    
    const element =  document.getElementById("bocksImg");
    element.src = window.location.origin + "/photos/frame-"+bocksDepth+".png"
    element.style.transformY = "translate("+(bocksDepth-1)*1+"%)";
    element.style.opacity = 1 - ((bocksDepth-1)/22);
    element.style.scale = 1+((bocksDepth-1)/22);

    const scrollElement = document.getElementById("arrowImg");
    scrollElement.style.opacity = 1 - ((bocksDepth-1)/5);

    const titleElement = document.getElementById("fptTitle");
    titleElement.style.transformY = "translate(-"+bocksDepth*1.5+"%)";
    titleElement.style.opacity = 1 - ((bocksDepth-1)/22);

    var r = 25-(25*((bocksDepth-1)/22))
    var g = 19-(19*((bocksDepth-1)/22))
    var b = 75-(75*((bocksDepth-1)/22))

    htmlElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const aboutSections = document.getElementsByClassName("about");
    for (var i = 0; i < aboutSections.length; i++) {
        aboutSections[i].style.opacity = ((bocksDepth-1)/22);
    }
}