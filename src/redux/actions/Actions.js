import { USER,RIDE_DETAILS } from "./ActionTypes";

export const setUser =(data)=>({
    type:USER,
    payload:data
})

export const setRideDetails =(data)=>({
    type:RIDE_DETAILS,
    payload:data
})