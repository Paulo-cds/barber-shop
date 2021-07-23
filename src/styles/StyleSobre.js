import {colorPrimary} from './Colors'
import {colorSecondary} from './Colors'
import styled from 'styled-components'

import brushBig from '../images/brush-big.jpg'


export const Containerr = styled.div`  
  width: 1170px;
  margin: 0 auto;
  display:flex;
`


export const About = styled.section`    
    background-color: ${colorPrimary};
    //font-family: sans-serif;
    display:flex;
    padding-bottom:40px;
`
export const Timing = styled.div`
    width: 33%;
    background-image: url(${brushBig});
    padding: 20px;
    position: relative;
    top: -50px;
`

export const Overlay = styled.div`
    background: rgba(0,0,0,0.8);
    text-align: center;
    padding: 40px 20px;
`



export const Classic = styled.img`
    width: 50px;
`

export const Horarios = styled.h3`
    color: ${colorPrimary};
    text-transform: uppercase;
    border-bottom: 1px solid ${colorPrimary};
    width: fit-content;
    margin: 0 auto 30px auto;
    font-size: 30px;
`

export const Text = styled.div`
    margin: 10px 0;
    :after{
        content: '•';
        display: block;
        color: white;
        font-size: 25px;
        margin-top: 10px;
    }
    :last-of-type:after{
        content: '|';
    }
`

export const H4 = styled.h4`
    color:grey;
    font-weight: 400;
    font-size: 15px;
`


export const Funcionamento = styled.span`
    color:white;
    font-size: 15px;
    display: block;
`

export const Experience = styled.div`
    width: 66%;
    color: white;
    margin-left: 7%;
    margin-top: 100px;    
    
`

export const Loc = styled.img``

export const History = styled.span``

export const Years = styled.h2`
    font-weight: 400;
    font-size: 40px;
    :after{
        display: block;
        content: '';
        width: 100px;
        height: 3px;
        background-color: ${colorSecondary};
        margin: 20px 0;
    }
`

export const Texto = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Textox = styled.div``

export const Shave = styled.img``

export const Parag = styled.p`
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 17px;
`