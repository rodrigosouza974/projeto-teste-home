import React from 'react'
import {FiThumbsUp } from 'react-icons/fi';

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    UserInfo,
    PostInfo,
    UserPicture
} from './styles';

const Card = () =>{
  return (
    <CardContainer>
        <ImageBackground  src ="https://img.freepik.com/fotos-gratis/fundo-gradiente-de-grade-digital-futurista-azul-escuro_53876-129728.jpg?t=st=1728769449~exp=1728773049~hmac=66d276e0559ee716e69fd09646295bf52a0f791fdc05fdca61bb622c096aa3cb&w=1380"/> 
        <Content>
            <UserInfo>
                <UserPicture src ="https://avatars.githubusercontent.com/u/124813706?v=4&size=64" />
                <div>
                    <h4>Rodrigo Souza</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o Curso de React</h4>
                <p>Projeto feito para o Curso de React</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTMl #CSS #JAVASCRIPT #REACT</h4>
                <p>
                    <FiThumbsUp/>10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
export{Card}
