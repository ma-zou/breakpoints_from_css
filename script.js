breakpoint = new Array();
breakpoint.getBreakpoints = (function () {
    bps = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '').split('....');
    breakpoints = new Array()
    for (i = 0; i < bps.length; i++) {
        temp = bps[i].split(':');
        breakpoints[temp[0]] = "(min-width: " + temp[1] + ")";
    }
    return breakpoints
})()
breakpoint.match = (function () {
    setBreakpointValue();
    window.addEventListener('resize', setBreakpointValue);
})()
function setBreakpointValue() {
    for (key in breakpoint.getBreakpoints) {
        breakpoint[key] = window.matchMedia(breakpoint.getBreakpoints[key]).matches;
    }
}

window.addEventListener('resize', function () {
    if (breakpoint["medium"]) {
        document.getElementById("wrapper").style.background = "#000";
    } else {
        document.getElementById("wrapper").style.background = "#fff";
    }
});
