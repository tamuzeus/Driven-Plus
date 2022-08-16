import Vector from "../Tools/Images/Vector.png";
import Money from "../Tools/Images/Money.png";
import Clipboard from "../Tools/Images/Clipboard.png";
import Modal from "../Component/Modal";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Component/Context";
import { getPlan} from "../Tools/DrivenPlus";

export default function ConfirmSub() {

    const navigate = useNavigate()
    const { openModal, setOpenModal, bearertoken, info, setInfo, value, setConfirm } = useContext(UserContext);
    const [perks, setPerks] = useState([])

    const [membershipId, setMembershipId] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [securityNumber, setSecurityNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    useEffect(() => {
        if (!bearertoken) { return }
        if (!value) { return }
        const promise = getPlan(value, bearertoken)
        promise.catch(res => {
            console.log('error')
        })
        promise.then(res => {
            setInfo(res.data)
            setMembershipId(value)
            setPerks(res.data.perks)
        })
    }, [bearertoken, value, setInfo])

    function HandleForm(e) {        
        e.preventDefault()

        const creditCard = {
            membershipId, cardName, cardNumber, securityNumber, expirationDate
        }
        
        setOpenModal(!openModal)
        setConfirm(creditCard)
    }


    return (
        <Article>

            <>
                <VectorBody onClick={() => { navigate('/subscriptions') }}>
                    <img src={Vector} alt='' />
                </VectorBody>

                <LogoBody><img src={info.image} alt='' /></LogoBody>
                <Tittle>{info.name}</Tittle>

                <Body>
                    <Superior>
                        <IconBody1><img src={Clipboard} alt='' /></IconBody1>
                        <Texttittle>Benefícios:</Texttittle>
                    </Superior>

                    <div>
                        {perks.map((value, index) => 
                            <Text key={index}><span>{index+1}.</span>{value.title}</Text>
                        )}
                    </div>
                </Body>

                <Body>
                    <Superior>
                        <IconBody2><img src={Money} alt='' /></IconBody2>
                        <Texttittle>Preço:</Texttittle>
                    </Superior>
                    <Text>R$ <span>{info.price}</span> cobrados mensalmente</Text>
                </Body>
            </>


            <Form onSubmit={HandleForm}>
                <Input type='text' onChange={(e) => setCardName(e.target.value)} placeholder="Nome impresso no cartão" required />
                <Input type='text'onChange={(e) => {setCardNumber(e.target.value)}}  placeholder="Digitos do cartão" pattern="[0-9\s]{4} [0-9\s]{4} [0-9\s]{4} [0-9\s]{4}" title="Digite os números no formato (XXXX XXXX XXXX XXXX), verifique se não possui espaços extras!" required />

                <Inferiorform>
                    <Input type='text' onChange={(e) => setSecurityNumber(e.target.value)} placeholder="Código de segurança" pattern="[0-9]{3}" title="Digite os números no formato (XXX), verifique se não possui espaços extras!" required />
                    <Input type='text' onChange={(e) => setExpirationDate(e.target.value)} placeholder="Validade" pattern="[0-9]{2}/[0-9]{2}" title="Digite os números no formato (XX/YY), verifique se não possui espaços extras!" required />
                </Inferiorform>
                <Button><p>ASSINAR</p></Button>
            </Form>

            {openModal ? <Modal /> : ''}

        </Article>
    )
}


const Article = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100vw;
`

const VectorBody = styled.div`
    width: 28px;
    height: 32px;
    position: absolute;
    top: 24px;
    left: 24px;
`

const LogoBody = styled.div`
    width: 139.38px;
    height: 95.13px;
    margin-right: 20px;
    margin-bottom: 12px;
`

const Tittle = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
`

const Body = styled.div`
    width: 80vw;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`

const Superior = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 10px;
`
const IconBody1 = styled.div`
    Width: 20px;
    Height: 20px;
    margin-right: 5px;
`

const IconBody2 = styled.div`
    Width: 15px;
    Height: 12px;
    margin-right: 5px;
`
const Texttittle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`

const Form = styled.form`
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`

const Input = styled.input``

const Inferiorform = styled.div`
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