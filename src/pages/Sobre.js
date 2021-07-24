import styled from 'styled-components'
import ClassicCut from '../images/classic-cut.png'

import Local from '../images/loc-ic.png'
import Phone from '../images/phone-ic.png'
import Shaveb from '../images/shave-brush.jpg'


import {
    About,
    Timing,
    Experience,
    Containerr,
    Overlay,
    Overlay2,
    Over,
    Classic,
    Horarios,
    Text,
    H4,
    Funcionamento,
    Timers,
    Loc,
    History,
    Years,
    Texto,
    Shave,    
    Parag,
    Textox,
} from '../styles/StyleSobre'

import Headerr from '../Header'
import Foot from '../Footer'


function Sobre() {

    return(
    <>
        <Headerr />
        <About>
            <Containerr>
                <Timing>
                    <Overlay>                        
                        <Classic src={ClassicCut}/>
                        <Horarios>
                            Horários
                        </Horarios>
                        <Text>
                            <H4>Segunda-feira à Sexte-feira</H4>
                            <Funcionamento>09:00 AM - 17:00 PM</Funcionamento>
                        </Text>

                        <Text>
                            <H4>Sábado</H4>
                            <Funcionamento>09:00 AM - 14:00 PM</Funcionamento>
                        </Text>

                        <Text>
                            <H4>Domingo</H4>
                            <Funcionamento>Fechado</Funcionamento>
                        </Text>
                        <br /> <br />
                        <Loc src={Local} />
                        <Funcionamento>
                            Rua da Matrix, 33
                        </Funcionamento>
                        <br /> <br />
                        <Loc src={Phone} />
                        <Funcionamento>
                           (11)99999-9999
                        </Funcionamento>
                    </Overlay>

                    <Overlay2>   
                        <Classic src={ClassicCut}/>                                             
                        <Horarios>
                            Horários
                        </Horarios>
                        <Over>
                            <Timers>

                                <Text>
                                    <H4>Segunda-feira à Sexta-feira</H4>
                                    <Funcionamento>09:00 AM - 17:00 PM</Funcionamento>
                                </Text>

                                <Text>
                                    <H4>Sábado</H4>
                                    <Funcionamento>09:00 AM - 14:00 PM</Funcionamento>
                                </Text>

                                <Text>
                                    <H4>Domingo</H4>
                                    <Funcionamento>Fechado</Funcionamento>
                                </Text>
                            </Timers>
                            
                            <Timers>

                                <Funcionamento>
                                <Loc src={Local} />
                                <br/>
                                    Rua da Matrix, 33
                                </Funcionamento>
                                
                                
                                <Funcionamento style={{marginTop: '20px',}}>
                                <Loc src={Phone}  />
                                <br/>
                                (11)99999-9999
                                </Funcionamento>
                            </Timers>
                        </Over>
                    </Overlay2>
                </Timing>
                <Experience>
                    <History>Uma história única</History>
                    <Years>52 anos de experiência</Years>
                
                    <Texto>
                        <Textox>
                            <Parag>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Parag>
                            <Parag>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Parag>
                        </Textox>                        
                        <Shave  src={Shaveb}/>                        
                    </Texto>
                </Experience>
            </Containerr>
        </About>
        <Foot/>
    </>

)
}

export default Sobre