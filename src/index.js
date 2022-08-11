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

function App() {


    return (
        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider>
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