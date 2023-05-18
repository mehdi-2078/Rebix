import {lastLoginDate} from "./storages.js";


export function ConvertDate() {
    const date = new Date(+lastLoginDate).toLocaleDateString('fa-IR')
    const time = new Date(+lastLoginDate).toLocaleTimeString('fa-IR')
    console.log({time, date})
    return {time, date}
}