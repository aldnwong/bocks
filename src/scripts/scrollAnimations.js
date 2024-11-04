var locked = true;
setTimeout(unlock, 4000)

window.onbeforeunload = function () {
    window.scroll(0, 0);
}

function unlock() {
    locked = false
    window.addEventListener("scroll", scrollAnimation);
    window.addEventListener("resize", scrollAnimation);
}

function scrollAnimation() {
    var scrollPx = document.documentElement.scrollTop;
    var topScrollHeightPx = document.getElementById("bocksScroll").scrollHeight
    var bocksAnimationPercent = Math.min(scrollPx/topScrollHeightPx, 1);
    var bocksImageNum = Math.floor(bocksAnimationPercent*22)+1
    
    const element =  document.getElementById("bocksImg");
    element.src = window.location.origin + "/photos/frame-"+bocksImageNum+".png"
    element.style.opacity = 1 - bocksAnimationPercent;
    element.style.scale = 1 + bocksAnimationPercent;

    const scrollElement = document.getElementById("arrowImg");
    scrollElement.style.opacity = 1 - Math.max(bocksAnimationPercent*10, 0);

    const titleElement = document.getElementById("title");
    titleElement.style.transformY = "translate(-"+bocksAnimationPercent*200+"%)";
    titleElement.style.opacity = 1 - bocksAnimationPercent;

    var r = 25-(25*bocksAnimationPercent)
    var g = 19-(19*bocksAnimationPercent)
    var b = 75-(75*bocksAnimationPercent)

    document.documentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let aboutSections = document.getElementsByClassName("about");
    for (let i = 0; i < aboutSections.length; i++) {
        if (bocksAnimationPercent>0.75)
            aboutSections[i].style.opacity = (bocksAnimationPercent*2)-1;
        else
            aboutSections[i].style.opacity = 0;
    }
}