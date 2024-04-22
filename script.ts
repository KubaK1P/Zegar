function getComponents(){
    const clock = document.getElementById("clock");
    const hover = document.getElementById("hover");
    const icon = document.getElementById("icon");
    if(!clock) throw "no clock";
    if(!hover) throw "no hover";
    if(!icon) throw "no icon";
    return {clock, hover, icon}
}

let extended = false;
let data = new Date();

function addZero(number: number):string {
    if (number < 10) 
        return "0" + number;
    return number.toString();
}

function init() {
    const {clock, hover, icon} = getComponents()
    clock.innerHTML = addZero(data.getHours()) + ":" + addZero(data.getMinutes());
    hover.addEventListener("click", () => {
        if (!extended) {
            hover.classList.add("hoverOnClick");
            icon.classList.remove("fa-arrow-up");
            icon.classList.add("fa-arrow-down");
            extended = !extended;
        } else {
            hover.classList.remove("hoverOnClick");
            icon.classList.remove("fa-arrow-down");
            icon.classList.add("fa-arrow-up");
            extended = !extended;
        }
    });
}

function asyncClock() {
    const {clock} = getComponents()
    data = new Date();
    if (data.getMinutes() == 0) {
        clock.classList.add("anim");
    } else {
        clock.classList.remove("anim");
    }
    clock.innerHTML = addZero(data.getHours()) + ":" + addZero(data.getMinutes());
}

init();
setInterval(asyncClock, 1000);