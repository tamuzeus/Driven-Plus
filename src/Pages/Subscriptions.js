import { getPlans } from "../Tools/DrivenPlus";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Component/Context";
import { useNavigate} from "react-router-dom";

function PlansComponent({ src, price, id }) {
    const navigate = useNavigate()
    const {setValue} = useContext(UserContext);

    return (
        <PlanBody value={id} onClick={() => {
            navigate(`/subscriptions/${id}`)
            setValue(id)
        }}>
            <LogoBody><img src={src} alt=''/></LogoBody>
            <Price>{price}</Price>
        </PlanBody>
    )
}

export default function Subscriptions() {

    const { bearertoken } = useContext(UserContext);
    const [Array, setArray] = useState([])

    useEffect(() => {
        if(!bearertoken){return}
        const promise = getPlans(bearertoken)
        promise.catch(res => {
            console.log('error')
        })
        promise.then(res => {
            setArray(res.data)
        })
    }, [bearertoken])

    return (
        <Article>
            <Choose>Escolha seu Plano</Choose>

            {Array.map((value) => <PlansComponent
                key={value.id}
                id={value.id}
                src={value.image}
                price={value.price}
            />)}

        </Article>
    )

}

const Article = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const Choose = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 24px;
`

const PlanBody = styled.div`
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

const LogoBody = styled.div`
    width: 139.38px;
    height: 95.13px;
    margin-right: 20px;
`

const Price = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`
