import Head from 'next/head'
import Image from 'next/image'
import { Button, Container } from 'react-bootstrap'

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
    filter: blur(50px);
    opacity: .25;
    z-index: -1;
  }

  &::before{bottom: 0;left: 0;border-radius: 0 100% 0 0;}
  &::after{top: 0%;right: 0%;border-radius: 0 0 0 100%;}
`
const Portfolio = styled.section`
  padding-bottom: 50px;
`

const ImagemPortfolio = styled.img`
  max-width: 432px;
  @media (max-width: 1200px) {display: none;}
`
const TituloPortfolio = styled.h1`
  font-family: 'Montserrat', sans-serif;font-weight: 600;
`

const SubtituloPortfolio = styled.h2`
  font: 300 1.625em 'Montserrat', sans-serif;
  margin: 25px 0 50px 0;
`

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
              <Link href='https://www.instagram.com/danielglaseroficial/' target={'_blank'}><Button variant='outline-light' style={{fontWeight: '600',borderWidth: '2.5px'}}>Ver Portfolio</Button></Link>
            </div>
          </Container>
        </Portfolio>
      </main>
    </>
  )
}