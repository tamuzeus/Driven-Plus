import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Tools/GlobalStyle";
import { Reset } from "styled-reset";

import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Subscriptions from "./Pages/Subscriptions";
import ConfirmSub from "./Pages/ConfirmSub";
import Home from "./Pages/Home";
import UserContext from "./Component/Context"
import { useState } from "react";
import PrivatePage from "./Pages/PrivatePage";

function App() {

    const [openModal, setOpenModal] = useState(false);
    const [info, setInfo] = useState('');
    const [value, setValue] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ confirm, setConfirm, openModal, setOpenModal, value, setValue, info, setInfo }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Registration />} />
                    <Route path="/Subscriptions" element={
                        <PrivatePage>
                            <Subscriptions />
                        </PrivatePage>} />
                    <Route path="/Subscriptions/:PlanId" element={
                        <PrivatePage>
                            <ConfirmSub />
                        </PrivatePage>} />
                    <Route path="/Home" element={
                        <PrivatePage>
                            <Home />
                        </PrivatePage>
                    } />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))