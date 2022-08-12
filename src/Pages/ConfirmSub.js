import Group1 from "../Tools/Images/Group1.png";
// import Group2 from "../Tools/Images/Group2.png";
// import Group3 from "../Tools/Images/Group3.png";
import Vector from "../Tools/Images/Vector.png";
import Money from "../Tools/Images/Money.png";
import Clipboard from "../Tools/Images/Clipboard.png";
import Modal from "../Component/Modal";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Component/Context";


export default function ConfirmSub () {
    const navigate = useNavigate()
    const {openModal, setOpenModal} = useContext(UserContext);

    return (
        <Article>

            <VectorBody onClick={() => {navigate('/subscriptions')}}>
                <img src={Vector} alt=''/>
            </VectorBody>

            <LogoBody><img src={Group1} alt=''/></LogoBody>
            <Tittle>Driven Plus</Tittle>
            
            <Body>
                <Superior>
                    <IconBody1><img src={Clipboard} alt=''/></IconBody1>
                    <Texttittle>Benefícios:</Texttittle>
                </Superior>

                <div>
                    <Text><span>1.</span> Brindes Exclusivos</Text>
                    <Text><span>2.</span> Brindes Exclusivos</Text>
                </div>
            </Body>

            <Body>
                <Superior>
                    <IconBody2><img src={Money} alt=''/></IconBody2>
                    <Texttittle>Preço:</Texttittle>
                </Superior>
                    <Text>R$ <span>39,99</span> cobrados mensalmente</Text>
            </Body>

            <Form>
                <Input type='text' placeholder="Nome impresso no cartão" required />
                <Input type='text' placeholder="Digitos do cartão" pattern="[0-9\s]{4} [0-9\s]{4} [0-9\s]{4} [0-9\s]{4}" title="Digite os números no formato (XXXX XXXX XXXX XXXX), respeitando o uso dos espaços" required />
                <Inferiorform>
                    <Input type='text' placeholder="Código de segurança" pattern="[0-9]{3}" title="Digite os números no formato (XXX)" required />
                    <Input type='text' placeholder="Validade" pattern="[0-9]{2}/[0-9]{2}" title="Digite os números no formato (XX/YY)" required />
                </Inferiorform>

                <Button onClick={() => {setOpenModal(!openModal)}}><p>ASSINAR</p></Button>
            </Form>

                {openModal ? <Modal/>: ''} 

                Quando receber e aprovar o axios, ai o modal aparece

        </Article>
    )
}


const Article = styled.article `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100vw;
`

const VectorBody = styled.div `
    width: 28px;
    height: 32px;
    position: absolute;
    top: 24px;
    left: 24px;
`

const LogoBody = styled.div `
    width: 139.38px;
    height: 95.13px;
    margin-right: 20px;
    margin-bottom: 12px;
`

const Tittle = styled.h1 `
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
`

const Body = styled.div `
    width: 80vw;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`

const Superior = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 10px;
`
const IconBody1 = styled.div `
    Width: 20px;
    Height: 20px;
    margin-right: 5px;
`

const IconBody2 = styled.div `
    Width: 15px;
    Height: 12px;
    margin-right: 5px;
`
const Texttittle = styled.p `
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`

const Text = styled.p `
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`

const Form = styled.form `
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`

const Input = styled.input ``

const Inferiorform = styled.div `
    display: flex;
    gap: 9px;
`

const Button = styled.button`
    margin-top: 12px;
    width: 100%;
    display: grid;
    justify-self: center;
    align-items: center;
    align-self: center;
`