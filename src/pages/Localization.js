import {Containerr} from '../styles/StyleServices'

import Map1 from '../images/map-img1.png'
import Map2 from '../images/map-img2.png'
import Map3 from '../images/map-img3.png'
import Map4 from '../images/map-img4.png'

import Maps from './Map'

import * as S from '../styles/StyleLocalization'

import Headerr from '../Header'
import Foot from '../Footer'


function Localization(){
    return(
        <>
            <Headerr />
            <S.Location>
                
                <Containerr style={{width: '90%',}}>
                    <S.Head>
                        <S.DivInfo>
                            <S.Info>
                                <S.Icon>
                                    <S.ImgInfo src={Map1}/>
                                </S.Icon>
                                <S.Text>
                                    <S.Span1>Localização:</S.Span1>
                                    <S.Span2>Rua da Matrix, 33</S.Span2>
                                </S.Text>
                            </S.Info>

                            <S.Info>
                                <S.Icon>
                                    <S.ImgInfo src={Map2}/>
                                </S.Icon>
                                <S.Text>
                                    <S.Span1>Telefone:</S.Span1>
                                    <S.Span2>(11)99999-9999</S.Span2>
                                </S.Text>
                            </S.Info>
                        </S.DivInfo>

                        <S.DivInfo>
                            <S.Info>
                                <S.Icon>
                                    <S.ImgInfo src={Map3}/>
                                </S.Icon>
                                <S.Text>
                                    <S.Span1>E-mail:</S.Span1>
                                    <S.Span2>contato@barbershop.com</S.Span2>
                                </S.Text>
                            </S.Info>

                            <S.Info>
                                <S.Icon>
                                    <S.ImgInfo src={Map4}/>
                                </S.Icon>
                                <S.Text>
                                    <S.Span1>Horário:</S.Span1>
                                    <S.Span2>Seg. à Sex: 9AM às 17PM</S.Span2>
                                </S.Text>
                            </S.Info>
                        </S.DivInfo>
                    </S.Head>                 
                    <S.Map>
                        <Maps />
                    </S.Map>
                    
                </Containerr>                
            </S.Location>
            <Foot />
        </>
    )
}


export default Localization