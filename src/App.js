import React from 'react';
import "./App.css";
import SingUp from './Components/SingUp';
import Login from './Components/Login';
import { Navigate, Route , Routes} from "react-router-dom";

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path="/singup" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/singup"/>} />
                {/* <Redirect from="/" to="/singup" /> */}
            </Routes>
        </div>
    );
};

export default App;