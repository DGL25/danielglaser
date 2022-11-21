import Head from 'next/head'
import Image from 'next/image'
import { Button, Container } from 'react-bootstrap'
import { BsLinkedin, BsWhatsapp, BsInstagram, BsGithub, BsBehance} from 'react-icons/bs'

import Logo from '../Components/LogoDGL/Logo'

import styled from 'styled-components'
import TituloSlide from '../Components/TituloSlide/TituloSlide'
import Link from 'next/link'

const Cabecalho = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;height: 75px;
  display: flex;align-items:center;
`

const Slide = styled.section`
  position: relative;
  height: 100vh;
  background: rgba(255,255,255,.0);
  display: grid; place-items: center;
  z-index: 99;

  &::before,&::after{
    content: '';
    position: absolute;
    width: calc(100vw / 5);height: calc(100vw / 5);
    background: linear-gradient(80deg,#17EEEF, #7CFC00);
    filter: blur(100px);
    opacity: .15;
    z-index: -1;
    animation: blur 5s alternate infinite;
  }

  &::before{bottom: 0;left: 0;border-radius: 0 100% 100% 0;}
  &::after{top: 0%;right: 0%;border-radius: 0 0 0 100%;}

  @keyframes blur{
    0%{opacity:.1;}
    25%{opacity:.2;}
    50%{opacity:.3;}
    50%{opacity:.4;}
    100%{opacity:.5;}
  }
`
const Portfolio = styled.section`padding-bottom: 50px;`
const ImagemPortfolio = styled.img`max-width: 432px;@media (max-width: 1200px) {display: none;}`
const TituloPortfolio = styled.h1`font-family: 'Montserrat', sans-serif;font-weight: 600;`
const SubtituloPortfolio = styled.h2`font: 300 1.625em 'Montserrat', sans-serif;margin: 25px 0 75px 0;`

const Sobre = styled.section``
const ImagemSobre = styled.img`max-width: 500px;@media (max-width: 1200px) {display: none;}`
const TituloSobre = styled.h1`font-family: 'Montserrat', sans-serif;font-weight: 600;margin-bottom:50px;`

const Rodape = styled.footer`
  padding: 25px 0;
  background: rgba(255,255,255,.025);
`

const ListaRodape = styled.ul`
`

const ItemListaRodape = styled.li`
  &.titulo-lista{
    font-size: 1em;font-weight: 600;
  }

  margin: 5px 0;
  font-size: .8em;font-weight: 500;

  a{font-weight: 500;}
`
//grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

export default function Home() {
  return (
    <>
      <Head>
        
        <title>Desenvolvedor e Design Web : Daniel_GLaser</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel='icon' href='/logo-gradient.svg'/>

      </Head>

      <Cabecalho>
        <Container>
          <Logo/>
        </Container>
      </Cabecalho>
      <main>
        <Slide>
          <Container>
            <TituloSlide/>
          </Container>
        </Slide>
        <Portfolio>
          <Container style={{display:'flex',alignItems: 'center',justifyContent:'space-between',width: '100%'}}>
            <ImagemPortfolio src='/portfolios.png' alt='Imagem de portfolios de Daniel_GLaser'/>
            <div style={{maxWidth: '550px'}}>
              <TituloPortfolio className='display-6'>Site bonito? Pode até ser, mas funciona?</TituloPortfolio>
              <SubtituloPortfolio>Confira o meu portfólio, nele está designs baseados em sites reais e suas melhorias na usabilidade, tudo isso para que o seu cliente tenha uma ótima experiência.</SubtituloPortfolio>
              <Link href='https://www.instagram.com/danielglaseroficial/' target={'_blank'}><Button variant='outline-light' style={{fontWeight: '700',borderWidth: '2.5px'}}>Ver Portfolio</Button></Link>
            </div>
          </Container>
        </Portfolio>
        <Sobre>
          <Container style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
            <div>
              <TituloSobre className='display-6'>Quem è Daniel_GLaser?</TituloSobre>
              <p style={{maxWidth: '550px'}}>Olá, sou <b>Daniel_GLaser</b>, <b>Desenvolvedor</b> e <b>Designer Web</b>. Sou responsável por ajudar empresas a se conectarem aos seus respectivos clientes, através de um bom design e desenvolvimento, para elevar e passar <b>autoridade profissional</b>.</p>
            </div>
            <ImagemSobre src={'/dgl.png'}/>
          </Container>
        </Sobre>
        <Rodape>
          <Container style={{display: 'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))'}}>
            <ListaRodape>
              <ItemListaRodape className='titulo-lista'>Habilidades</ItemListaRodape>
              <ItemListaRodape>Reac.js / Next.js</ItemListaRodape>
              <ItemListaRodape>SASS | Styled Components</ItemListaRodape>
              <ItemListaRodape>UI Designer Figma</ItemListaRodape>
              <ItemListaRodape>Desenvolvedor Front-End</ItemListaRodape>
            </ListaRodape>

            <ListaRodape>
              <ItemListaRodape className='titulo-lista'>Contato</ItemListaRodape>
              <ItemListaRodape>WhatsApp: (27) 9 9967-8371</ItemListaRodape>
              <ItemListaRodape>E-mail: devdanielglaser@gmail.com</ItemListaRodape>
            </ListaRodape>

            <ListaRodape>
              <ItemListaRodape className='titulo-lista'>Social</ItemListaRodape>
              <ItemListaRodape style={{display: 'inline',margin: '0 5px'}}><Link href='https://www.linkedin.com/in/daniel-glaser-6b674b237/' target='_blank'><BsLinkedin size={20} color={"#fff"}/></Link></ItemListaRodape>
              <ItemListaRodape style={{display: 'inline',margin: '0 5px'}}><Link href='https://instagram.com/danielglaseroficial?igshid=YmMyMTA2M2Y=' target='_blank'><BsInstagram size={20} color={"#fff"}/></Link></ItemListaRodape>
              <ItemListaRodape style={{display: 'inline',margin: '0 5px'}}><Link href='https://github.com/DGL25' target='_blank'><BsGithub size={20} color={"#fff"}/></Link></ItemListaRodape>
              <ItemListaRodape style={{display: 'inline',margin: '0 5px'}}><Link href='https://wa.me/5527999678371' target='_blank'><BsWhatsapp size={20} color={"#fff"}/></Link></ItemListaRodape>
              <ItemListaRodape style={{display: 'inline',margin: '0 5px'}}><Link href='https://www.behance.net/daniel_gl' target='_blank'><BsBehance size={20} color={"#fff"}/></Link></ItemListaRodape>
            </ListaRodape>

            <ListaRodape>
              <ItemListaRodape className='titulo-lista'>Parceiros</ItemListaRodape>
              <ItemListaRodape><Link href={'https://moneridesign.com.br'} target='_blank'>Moneri Design</Link></ItemListaRodape>
            </ListaRodape>
          </Container>
        </Rodape>
      </main>
    </>
  )
}