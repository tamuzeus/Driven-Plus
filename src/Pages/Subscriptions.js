import Group1 from "../Tools/Images/Group1.png";
import Group2 from "../Tools/Images/Group2.png";
import Group3 from "../Tools/Images/Group3.png";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Subscriptions () {

    const navigate = useNavigate()

    return (
        <Article>
            <Choose>Escolha seu Plano</Choose>

            <PlanBody onClick={() => {navigate('/subscriptions/id_do_plano')}}>
                <LogoBody><img src={Group1} alt=''/></LogoBody>
                <Price>R$ 39,99</Price>
            </PlanBody>


            <PlanBody onClick={() => {navigate('/subscriptions/id_do_plano')}}>
                <LogoBody><img src={Group2} alt=''/></LogoBody>
                <Price>R$ 69,99</Price>
            </PlanBody>


            <PlanBody onClick={() => {navigate('/subscriptions/id_do_plano')}}>
                <LogoBody><img src={Group3} alt=''/></LogoBody>
                <Price>R$ 99,99</Price>
            </PlanBody>
        </Article>
    )

}

const Article = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const Choose = styled.h1 `
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 24px;
`

const PlanBody = styled.div `
    margin: 10px 0 5px 0px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    width: 290px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 10px;
`

const LogoBody = styled.div `
    width: 139.38px;
    height: 95.13px;
    margin-right: 20px;
`

const Price = styled.p `
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`
