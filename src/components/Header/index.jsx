import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo.png'
import { BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper ,
    UserPicture 
} from "./styles"

const Header = ({autenticado}) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <UserPicture  src ={logo} alt= "logo generico"/>
                    {autenticado ?(
                        <>
                        <BuscarInputContainer>
                        <Input placeholder ='buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                        ): null}
                </Row>
                <Row>
                {autenticado ?(
                    <UserPicture src= "https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
                 ):( <>
                    <MenuRight href ="#">Home</MenuRight>
                    <Button title ="Entrar"/>
                    <Button  title ="Cadastrar" />
                    </>
                )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export{Header}