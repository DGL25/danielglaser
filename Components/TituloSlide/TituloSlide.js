import Link from "next/link";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import styled from "styled-components";

const Slide = styled.div`
    margin-top: 10%;
    max-width: ${({maxWidth}) => maxWidth};
`

const Titulo = styled.h1`font-family: 'Montserrat', sans-serif;font-weight: 600;`

const Subtitulo = styled.h2`
    margin: 25px 0 50px 0;
    font-size: 1.625em;
`

const Botoes = styled.nav`
    margin-top: 25px;
`

function TituloSlide() {

    const [index, setIndex] = useState(0)

    const infosSlide = [
        {id: 0,title: 'Alcance o mundo!',subtitle: 'Eleve a sua empresa a um novo nível profissional, conecte-se aos seus clientes e ao mundo.',buttonText: 'Quero Alcançar o Mundo!',buttonLink: 'https://form.jotform.com/221397782914062',maxWidth: '650px'},
        {id: 1,title: 'O design te destaca!',subtitle: 'Seja Identidade Visual ou Social Media, a Moneri Design faz a sua empresa crescer e se destacar no meio dos seus concorrentes.',buttonText: 'Quero me Destacar!',buttonLink: 'https://moneridesign.com.br',maxWidth: '845px'},
        {id: 2,title: 'Concorrentes? Não, parceiros',subtitle: 'Entre em contato para podermos conversar sobre futuras parcerias, seja você freelancer ou recrutador',buttonText: 'Vamos Conversar',buttonLink: 'https://wa.me/5527999678371',maxWidth: '1030px'},
    ]

    return (
        <Slide maxWidth={infosSlide[index].maxWidth} >
            <Titulo className="display-3">{infosSlide[index].title}</Titulo>
            <Subtitulo className="display-6">{infosSlide[index].subtitle}</Subtitulo>
            <Link href={infosSlide[index].buttonLink} target='_blank'><Button variant="outline-light" style={{fontWeight: '700',borderWidth: '2.5px'}}>{infosSlide[index].buttonText}</Button></Link>
            <Botoes><ul style={{padding: '0'}}>{infosSlide.map(({id})=>(<li key={id} style={{display: 'inline'}}><Button onClick={()=> setIndex(id)} variant={index === id ? "light" : "outline-light"} style={{marginRight: '15px', width: index === id && '50px'}}></Button></li>))}</ul></Botoes>
        </Slide>
    );
}

export default TituloSlide;