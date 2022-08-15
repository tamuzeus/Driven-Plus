import User from "../Tools/Images/User.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { postDelete } from "../Tools/DrivenPlus";
import { useContext } from "react";
import UserContext from "../Component/Context";

export default function Home() {
    const { bearertoken, homeinfo, userinf} = useContext(UserContext);
    const navigate = useNavigate()
    const perks = homeinfo.membership.perks

    return (
        <Article>
            <Header>
                <IconBody>
                    <img src={homeinfo.membership.image} alt=''></img>
                </IconBody>

                <UserIconBody>
                    <img src={User} alt=''></img>
                </UserIconBody>
            </Header>

            <Body>
                <Tittle>Olá, <span>{userinf}</span></Tittle>
                {perks.map((value, index) => <Button key={index}><Link href={value.link}>{value.title}</Link></Button>)}
            </Body>

            <Footer>
                <Button onClick={() => navigate('/Subscriptions/')}><p>Mudar plano</p></Button>
                <Buttonr onClick={() => { postDelete(bearertoken); navigate('/Subscriptions/') }}><p>Cancelar plano</p></Buttonr>
            </Footer>

        </Article>
    )

}

const Link = styled.a`
    color: white;
    text-decoration: none; 
`

const Article = styled.article`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const IconBody = styled.div`
    width: 74.52px;
    height: 50.87px;
    margin-left: 38px;
    margin-top: 10px;
`

const UserIconBody = styled.div`
    width: 34px;
    height: 34px;
    margin-right: 22px;
    margin-bottom: 10px;
    position: absolute;
    right: 22px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`
const Tittle = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 53px;
`

const Button = styled.button`
    width: 80vw;
    margin: 4px 0 4px 0;
`

const Buttonr = styled.button`
background-color: #FF4747;
    width: 80vw;
    margin: 4px 0 4px 0;
`

const Footer = styled.div`
    display: grid;
    align-self: center;
    justify-self: center;
`
