import styled from "styled-components";
import DrivenTittle from "../Tools/Images/DrivenTittle.png";

import { useNavigate } from "react-router-dom";
import { postLogin } from "../Tools/DrivenPlus";
import { useContext } from "react";
import UserContext from "../Component/Context";

export default function Login() {
    const navigate = useNavigate()
    const { email, setEmail, password, setPassword, setBearerToken } = useContext(UserContext);

    function HandleForm(e) {
        e.preventDefault()

        const infos = {
            email, password
        }

        const promise = postLogin(infos)
        promise.catch(res => {
            alert('Email em uso ou senha inválidos!')
        })
        promise.then(res => {
            const token = res.data.token
            const HeaderToken = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            setBearerToken(HeaderToken)

            navigate('/Subscriptions')
        })

    }

    return (
        <Article>

            <ImageArea>
                <img src={DrivenTittle} alt='' />
            </ImageArea>

            <Form onSubmit={HandleForm}>
                <Input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                <Input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} required />

                <Button><p>ENTRAR</p></Button>
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
    max-width: 500px;
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

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 24px;
`

const Account = styled.p`
    text-decoration-line: underline;
    text-align: center;
`