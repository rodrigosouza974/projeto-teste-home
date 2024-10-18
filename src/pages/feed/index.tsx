import {Header} from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {Container, Column, Title, TitleHighlight  } from './styles';

const Feed =()=>{
    return(<>
    <Header autenticado={true}/>
    <Container>
        <Column flex= {3}>
        <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Column>
        <Column flex= {1}>
            <TitleHighlight>#Ranking 5 Top da semana</TitleHighlight>
            <UserInfo percentual={80} nome="Rodrigo Souza" image="https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
            <UserInfo percentual={40} nome="Rodrigo Souza" image="https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
            <UserInfo percentual={70} nome="Rodrigo Souza" image="https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
            <UserInfo percentual={89} nome="Rodrigo Souza" image="https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
            <UserInfo percentual={35} nome="Rodrigo Souza" image="https://avatars.githubusercontent.com/u/124813706?v=4&size=64"/>
        
        </Column>
    </Container>
    </>)
       
}
export {Feed}