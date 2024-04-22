import asyncClock from "./clock"
import init from "./init"
import { State } from "./lib"


let state = {
    extended: false,
    date: new Date()
}
function setState(newst:(x:State)=>State){
    state = newst(state)
}


init(state, setState)
setInterval(()=>{asyncClock(state, setState)}, 1000);