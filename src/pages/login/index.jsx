import { MdEmail,MdLock } from 'react-icons/md'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column,Container,CriarText, EsqueciText, Row,SubtitleLogin, Title,TitleLogin,Wrapper} from './styles';

const Login =()=>{
    return(<>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts,...
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu Cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password"leftIcon={<MdLock/>} /><br/>
                    <Button title="Entrar"  variant = "secondary"  />
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
        
        </Column>
    </Container>
    </>)
       
}
export {Login}