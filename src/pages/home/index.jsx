import { useNavigate } from "react-router-dom";
import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import {Header} from "../../components/Header";

import {Container,TextContent,Title, TitleHighlight,BannerImage  } from './styles';

const Home =()=>{

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login');
    }
    return(<>
    <Header/>
    <Container>
        <div>
            <Title>
                <TitleHighlight>
                Transforme seu Futuro com Tecnologia
                <br/>
                </TitleHighlight>
                O seu futuro agora. Inscreva-se
            </Title>
            <TextContent>
            Transforme seu Futuro com Tecnologia

No nosso curso de tecnologia, você terá a 
oportunidade de explorar os conceitos mais
 inovadores que estão moldando o futuro. Desde 
 programação e desenvolvimento web até inteligência
  artificial e ciência de dados, nossos módulos abrangem as
   habilidades essenciais que o mercado atual exige.
            </TextContent>
            <Button title = "começar agora" 
                    variant = "secondary" 
                    onClick ={handleClickSignIn}/>
        </div>
        <BannerImage src={bannerImage} alt="Imagem principal" />
    </Container>
    </>)
       
}
export {Home}