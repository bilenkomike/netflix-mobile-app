function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .05) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
        else {
            el.removeAttribute('style');
        }
        
    })();
    // el.removeAttribute('style');
};

function fadeOut(el, fadeElem) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .05) < 0) {
            el.style.display = "none";
            fadeIn(fadeElem);
        } else {
            requestAnimationFrame(fade);
        }
    })();
};
