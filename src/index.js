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

function App() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [bearertoken, setBearerToken] = useState('');
    const [membershipId, setMembershipId] = useState('');
    const [info, setInfo] = useState('');
    const [value, setValue] = useState('');
    const [confirm, setConfirm] = useState('');
    const [homeinfo, setHomeinfo] = useState('');
    const [userinf, setUserinf] = useState('');

    return (
        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ userinf, setUserinf, homeinfo, setHomeinfo, confirm, setConfirm, openModal, setOpenModal, name, setName, cpf, setCpf, email, setEmail, password, setPassword, bearertoken, setBearerToken, membershipId, setMembershipId, value, setValue, info, setInfo }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Registration />} />
                    <Route path="/Subscriptions" element={<Subscriptions />} />
                    <Route path="/Subscriptions/:PlanId" element={<ConfirmSub />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))