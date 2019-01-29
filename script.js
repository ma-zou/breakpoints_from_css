
window.breakpoint = function (width, direction) {
    var bps = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '').split('....');
    var breakpoints = new Array();
    for (i = 0; i < bps.length; i++) {
        var temp = bps[i].split(':');
        breakpoints[temp[0]] = temp[1];
    }
    direction = (typeof direction === 'undefined') ? 'min' : direction;
    if(typeof width === 'undefined') {
        return breakpoints
    } else {
        if (direction === 'min') return window.matchMedia("(min-width: " + breakpoints[width] + ")").matches;
        else return window.matchMedia("(max-width: " + breakpoints[width] + ")").matches
    }
}
