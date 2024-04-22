import { State, addZero, getComponents } from "./lib";


export default function init(state:State, setState:((newst:(x:State)=>State)=>void)) {
    const {clock, hover, icon} = getComponents()
    clock.innerHTML = addZero(state.date.getHours()) + ":" + addZero(state.date.getMinutes());
    hover.addEventListener("click", () => {
        hover.classList.toggle("hoverOnClick");
        icon.classList.toggle("fa-arrow-up");
        icon.classList.toggle("fa-arrow-down");
        setState(st=>{
            return {
                ...st,
                extended: !st.extended
            }
        })
    });
}