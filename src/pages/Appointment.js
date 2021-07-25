import {    
    Tittle,
    Agend,
    Heading,
    Page,
    Formulario,
    Lab,
    Entry,
    FormDiv,
    PersonalData,
    Message,
    Sel,
    Opt,
    Botao,
    PersonalDiv,
} from '../styles/StyleAppointment'

import Headerr from '../Header'
import Foot from '../Footer'

//import Chair from 

import Headin from '../images/heading-ic-white.png'

import {Containerr} from '../styles/StyleServices'


function Appointment() {
    return (        
        <>
            <Page>
                <Headerr />
                <Containerr>
                
                    <Tittle>
                        Faça um agendamento
                    </Tittle>
                    <Heading src={Headin}/>

                    <Formulario>  
                        <PersonalData>
                            <PersonalDiv>

                                <FormDiv>
                                    <Lab>Nome</Lab>
                                    <Entry placeholder="Digite seu Nome"></Entry>
                                </FormDiv>
                                <FormDiv style={{marginRight: '50px',}}>
                                    <Lab>E-mail</Lab>
                                    <Entry placeholder="Digite seu E-mail"></Entry>
                                </FormDiv>
                            </PersonalDiv>

                            <PersonalDiv>

                                <FormDiv>
                                    <Lab>Telefone</Lab>
                                    <Entry placeholder="Digite seu Telefone"></Entry>
                                </FormDiv>
                                <FormDiv>
                                    <Lab>Tipo de Serviço</Lab>
                                    <Sel>
                                        <Opt value="">Cortar Cabelo</Opt>
                                        <Opt value="">Cortar Cabelo e Barba</Opt>
                                    </Sel>
                                </FormDiv>
                            </PersonalDiv>
                        </PersonalData> 


                        <Lab>Mensagem</Lab>
                        <Message></Message>

                        <Botao>Enviar</Botao>
                    </Formulario>
                </Containerr>        
            </Page>
            <Foot />
        </>    
    )
}


export default Appointment