import {Navigate} from "react-router-dom";
import {isLogin} from "./storages.js";


export function RequireAuth({children}) {

    return Boolean(isLogin) === true ? children : <Navigate to="/login" replace/>;
}