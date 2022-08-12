import Group1 from "../Tools/Images/Group1.png";
// import Group2 from "../Tools/Images/Group2.png";
// import Group3 from "../Tools/Images/Group3.png";
import User from "../Tools/Images/User.png";
import styled from "styled-components";

export default function Home() {

    return (
        <Article>
            <Header>
                <IconBody>
                    <img src={Group1} alt=''></img>
                </IconBody>

                <UserIconBody>
                    <img src={User} alt=''></img>
                </UserIconBody>
            </Header>

            <Body>
                <Tittle>Olá, <span>Fulano</span></Tittle>
                <Button><p>Solicitar brindes</p></Button>
                <Button><p>Materiais bônus de web</p></Button>

                <Button><p>Aulas bônus de tech</p></Button>
                <Button><p>Mentorias personalizadas</p></Button>
            </Body>

            <Footer>
                <Button><p>Mudar plano</p></Button>
                <Buttonr><p>Cancelar plano</p></Buttonr>
            </Footer>

        </Article>
    )

}

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
