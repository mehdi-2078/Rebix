import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Landing, Login, Register} from "./pages";
import {RequireAuth} from "./helper/RequireAuth.jsx";
import {Settings, MakeTodo, ManageTodo} from "./containers/index.js";

const App = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="register/" element={<Register/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="panel/manageTodo/"
                       element={<RequireAuth><ManageTodo/></RequireAuth>}/>
                <Route path="panel/makeTodo/"
                       element={<RequireAuth><MakeTodo/></RequireAuth>}/>
                <Route path="panel/settings/"
                       element={<RequireAuth><Settings/></RequireAuth>}/>
            </Routes>
        </Router>
    );
};

export default App;