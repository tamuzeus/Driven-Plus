import User from "../Tools/Images/User.png";
import styled from "styled-components";
import { useNavigate, Navigate } from "react-router-dom";
import { postDelete } from "../Tools/DrivenPlus";

export default function Home() {
    const navigate = useNavigate()
    
    const name = JSON.parse(localStorage.getItem('name'))
    const membership = JSON.parse(localStorage.getItem('membership'))

    function delelePLan() {
        const promise = postDelete();
        promise.catch(res => { console.log('error') })
        promise.then(res => {
            alert('Plano cancelado! Você será redirecionado para página de novos planos!')
            navigate('/Subscriptions/')
        })
    }

    if (membership) {

        const logoimg = membership.image
        const perks = membership.perks

        return (
            <Article>
                <Header>
                    <IconBody>
                        <img src={logoimg} alt=''></img>
                    </IconBody>

                    <UserIconBody>
                        <img src={User} alt=''></img>
                    </UserIconBody>
                </Header>

                <Body>
                    <Tittle>Olá, <span>{name}</span>!</Tittle>
                    {perks.map((value, index) => <Button key={index}><Link href={value.link}>{value.title}</Link></Button>)}
                </Body>

                <Footer>
                    <Button onClick={() => navigate('/Subscriptions/')}><p>Mudar plano</p></Button>
                    <Buttonr onClick={() => { delelePLan() }}><p>cancelar plano</p></Buttonr>
                </Footer>

            </Article>
        )
    }else{
        return <Navigate to='/Subscriptions'/>
    }
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
