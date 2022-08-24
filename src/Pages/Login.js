import styled from "styled-components";
import DrivenTittle from "../Tools/Images/DrivenTittle.png";

import { useNavigate, Navigate } from "react-router-dom";
import { postLogin } from "../Tools/DrivenPlus";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

            //salvando name
            const Name = res.data.name
            const serialName = JSON.stringify(Name)
            localStorage.setItem('name', serialName)

            //salvando token
            const Token = res.data.token
            const serialToken = JSON.stringify(Token)
            localStorage.setItem('token', serialToken)

            //salvando membership
            const Membership = res.data.membership
            const serialMembership = JSON.stringify(Membership)
            localStorage.setItem('membership', serialMembership)

            if (Membership) {
                navigate('/home')
            } else {
                navigate('/Subscriptions')
            }
        })
    }

    const token = JSON.parse(localStorage.getItem('token'))

    if(!token){
        return (
            <Article>
    
                <ImageArea>
                    <img src={DrivenTittle} alt='' />
                </ImageArea>
    
                <Form onSubmit={HandleForm}>
                    <Input type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <Input type='password' placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} required />
    
                    <Button><p>ENTRAR</p></Button>
                    <Account onClick={() => navigate('/sign-up')}>Não possui uma conta? Cadastre-se!</Account>
                </Form>
            </Article>
        )        
    }else{
        return <Navigate to='/home'/>
    }
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