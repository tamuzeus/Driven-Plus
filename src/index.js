import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Tools/GlobalStyle";
import { Reset } from "styled-reset";


import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Subscriptions from "./Pages/Subscriptions";
import ConfirmSub from "./Pages/ConfirmSub";
import Home from "./Pages/Home";
import UserContext from "./Component/Context"
import { useState } from "react";

function App() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [bearertoken, setBearerToken] = useState('')

    return (
        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ openModal, setOpenModal, name, setName, cpf, setCpf, email, setEmail, password, setPassword, bearertoken, setBearerToken }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Cadastro />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/subscriptions/id_do_plano" element={<ConfirmSub />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))