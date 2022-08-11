import styled from "styled-components";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate()

    return (
        <Article>
            <Form>
                <Input type='text' placeholder="Nome" required />
                <Input type='text' placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite o CPF no formato XXX.XXX.XXX-XX" required />
                <Input type='email' placeholder="Email" required />
                <Input type='password' placeholder="Senha" required />

                <Button><p>CADASTRAR</p></Button>
                <Account onClick={() => navigate('/')}>Já possuí conta? Entre </Account>
            </Form>
        </Article>
    )

}

const Article = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80vw;
`

const Input = styled.input`
    font-family: 'Roboto';
    border-radius: 8px;
    height: 52px;
    padding-left: 10px;
    margin: 10px 0 10px 0;
`

const Button = styled.button `
    margin-top: 10px;
    margin-bottom: 24px;
    font-weight: 700;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
`

const Account = styled.p `
    text-decoration-line: underline;
    text-align: center;
`