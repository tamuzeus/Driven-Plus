import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Tools/GlobalStyle";
import { Reset } from "styled-reset";


import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

function App() {

    return (
        <BrowserRouter>
            <Reset/>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))