import Close from "../Tools/Images/Close.png";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Component/Context";

export default function Modal() {
    const {openModal, setOpenModal} = useContext(UserContext);


    const navigate = useNavigate()

    return (
        <>
            <Shadow/>

            <Fullbody>
                <Iconbody>
                    <img src={Close} alt='' onClick={() => {setOpenModal(!openModal)}}/>
                </Iconbody>

                <Modalbody>

                    <Modaltext><p>Tem certeza que deseja assinar o plano <span>Driven Plus (R$ 39,99)</span>?</p></Modaltext>
                    <Modalbuttons>
                        <Buttonw onClick={() => {setOpenModal(!openModal)}}><p>Não</p></Buttonw>
                        <Buttonp onClick={() => navigate('/home')}><p>SIM</p></Buttonp>
                    </Modalbuttons>

                </Modalbody>
            </Fullbody>
        </>
    )

}

const Shadow = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.7;
    position: absolute;
`

const Fullbody = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Iconbody = styled.div`
    width: 28px;
    height: 24.5px;
    position: absolute;
    top: 25px;
    left: 90vw;
`

const Modalbody = styled.div`
    width: 248px;
    height: 210px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Modaltext = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    width: 204px;
    height: 67px;
    margin-bottom: 35px;
`

const Modalbuttons = styled.div`
    display: flex;
`

const Buttonw = styled.button`
    background: #CECECE;
    height: 52px;
    width: 95px;
    margin: 0 7px 0 7px;
`

const Buttonp = styled.button`
    height: 52px;
    width: 95px;
    margin: 0 7px 0 7px;
`
