import styled from "styled-components";
import DrivenTittle from "../Tools/Images/DrivenTittle.png";

import {useNavigate } from "react-router-dom";

export default function Login () {
    const navigate = useNavigate()

    return (
        <Article>

            <ImageArea>
                <img src={DrivenTittle} alt=''/>
            </ImageArea>

            <Form>
                <Input type='email' placeholder="Email" required />
                <Input type='password' placeholder="Senha" required />

                <Button onClick={() => navigate('/subscriptions')}><p>ENTRAR</p></Button>
                <Account onClick={() => navigate('/sign-up')}>Não possuí uma conta? Cadastre-se</Account>
            </Form>
        </Article>
    )

}

const Article = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const ImageArea = styled.div`
    height: 60px;
    width: 80vw;
    margin-bottom: 100px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80vw;
`

const Input = styled.input`
    padding-left: 10px;
    margin: 10px 0 10px 0;
`

const Button = styled.button `
    margin-top: 10px;
    margin-bottom: 24px;
`

const Account = styled.p `
    text-decoration-line: underline;
    text-align: center;
`