import { MdEmail,MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Column,Container,CriarText, EsqueciText, Row,SubtitleLogin, Title,TitleLogin,Wrapper} from './styles';

import { api } from "../../services/api";
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3,'no minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Login =()=>{

    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(errors,isValid);

    const onSubmit = async (formData:IFormData) => {
        try{
            const {data}= await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha Inválido')
            }
        }catch{
            alert('houve um erro, tente novamente')
        }
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name= "email" errorMessage ={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input name= "password" errorMessage ={errors?.password?.message} control={control} placeholder="Senha" type="password"leftIcon={<MdLock/>} /><br/>
                    <Button title="Entrar"  variant = "secondary" type="submit" />
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