import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { postSignIn } from "../Tools/DrivenPlus";
import { useContext } from "react";
import UserContext from "../Component/Context";

export default function Registration () {
    const navigate = useNavigate()

    const { name, setName } = useContext(UserContext);
    const { cpf, setCpf } = useContext(UserContext);
    const { email, setEmail } = useContext(UserContext);
    const { password, setPassword } = useContext(UserContext);

    function HandleForm(e) {
        e.preventDefault()

        const infos = {
            name, cpf, email, password
        }

        const promise = postSignIn(infos)
        promise.catch(res => {
            alert('Email em uso ou campos inválidos, tente utilizar outro!')
        })
        promise.then(res => {
            alert('Conta criada!')
            navigate('/')
            console.log(infos)
        })
    }

    return (
        <Article>
            <Form onSubmit={HandleForm}>
                <Input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder="Nome" required />
                <Input type='text' onChange={(e) => setCpf(e.target.value)} value={cpf} placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite o CPF no formato (XXX.XXX.XXX-XX), respeitando uso de pontos e traço, verifique se não possui espaços extras!" required />
                <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" title="Digite o email respeitando o uso do @, verifique se não possui espaços extras!" required />
                <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" required />

                <Button><p>CADASTRAR</p></Button>
                <Account onClick={() => navigate('/')}>Já possui conta? Entre </Account>
            </Form>
        </Article>
    )

}

const Article = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80vw;
`

const Input = styled.input`
    height: 52px;
    margin: 10px 0 10px 0;
`

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 24px;
    font-weight: 700;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
`

const Account = styled.p`
    text-decoration-line: underline;
    text-align: center;
`