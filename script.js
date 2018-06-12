
breakpoint = new Array();
breakpoint.getBreakpoints = (function () {
    var bps = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '').split('....');
    var breakpoints = new Array()
    for (i = 0; i < bps.length; i++) {
        var temp = bps[i].split(':');
        breakpoints[temp[0]] = temp[1];
    }
    breakpoints.bfs = window.getComputedStyle(document.querySelector('html')).getPropertyValue('font-size');
    return breakpoints
})()
breakpoint.match = (function () {
    setBreakpointValue();
    window.addEventListener('resize', setBreakpointValue);
})()
function setBreakpointValue() {
    for (key in breakpoint.getBreakpoints) {
        if (key != "bfs") {
            breakpoint[key] = new Array();
            breakpoint[key].min = window.matchMedia("(min-width: " + breakpoint.getBreakpoints[key] + ")").matches;
            breakpoint[key].max = window.matchMedia("(max-width: " + breakpoint.getBreakpoints[key] + ")").matches;
        }
    }
}