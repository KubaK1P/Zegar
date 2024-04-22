export function getComponents(){
    const clock = document.getElementById("clock");
    const hover = document.getElementById("hover");
    const icon = document.getElementById("icon");
    if(!clock) throw "no clock";
    if(!hover) throw "no hover";
    if(!icon) throw "no icon";
    return {clock, hover, icon}
}

export function addZero(number: number):string {
    if (number < 10) 
        return "0" + number;
    return number.toString();
}

export interface State{
    extended: boolean,
    date:Date
}