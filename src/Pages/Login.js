import styled from "styled-components";
import DrivenTittle from "../Tools/Images/DrivenTittle.png";

// import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Login () {
    const navigate = useNavigate()

    return (
        <Article>

            <ImageArea>
                <Img src={DrivenTittle}/>
            </ImageArea>

            <Form>
                <Input type='email' placeholder="Email" required />
                <Input type='password' placeholder="Senha" required />

                <Button><p>ENTRAR</p></Button>
                <Account onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</Account>
            </Form>
        </Article>
    )

}

const Article = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageArea = styled.div`
    height: 60px;
    width: 80vw;
    margin-bottom: 100px;
`

const Img = styled.img `
    width: 100%;
    height: 100%;
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