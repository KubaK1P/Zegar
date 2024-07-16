import { State, addZero, getComponents } from "./lib";

export default function asyncClock(state:State, setState:((newst:(x:State)=>State)=>void)) {
    const {clock} = getComponents()
    setState(st=>{
        return {
            ...st,
            date: new Date()
        }
    })
    if (state.date.getMinutes() == 0 || (state.date.getMonth() == 0 && state.date.getDate() == 19)) {
        clock.classList.add("anim");
    } else {
        clock.classList.remove("anim");
    }
    clock.innerHTML = addZero(state.date.getHours()) + ":" + addZero(state.date.getMinutes());
}