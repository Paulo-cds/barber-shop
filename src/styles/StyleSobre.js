import {colorPrimary, colorPrimaryLight} from './Colors'
import {colorSecondary} from './Colors'
import styled from 'styled-components'

import brushBig from '../images/brush-big.jpg'


export const Containerr = styled.div`  
  width: 1170px;
  margin: 0 auto;
  display:flex;

   @media(max-width: 1000px) {
       display: block;
       
   }
`


export const About = styled.section`    
    background-color: ${colorPrimary};
    //font-family: sans-serif;
    display:flex;
    padding-bottom:40px;
    min-height: 85vh;
`
export const Timing = styled.div`    
    background-image: url(${brushBig});
    padding: 20px;
    position: relative;
    top: -1.87rem;
    background-repeat: no-repeat;
    left: -.5%;

    @media(max-width: 1000px){
        background-image: none;
    }    

    
`

export const Overlay = styled.div`
    background: rgba(0,0,0,0.8);
    text-align: center;
    padding: 40px 20px;

    @media(max-width: 1000px){
        display: none;
        
    }    
`

export const Overlay2 = styled.div`
    display:none;
    background: rgba(0,0,0,0.8);
    text-align: center;
    padding: 40px 20px;
    border: 2px solid ${colorPrimaryLight};
    margin: 0 auto;

    @media(max-width: 1000px){
        display: block;
        
    }    
`

export const Over = styled.div`
    display:flex;
    justify-content: space-between;
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

        @media(max-width: 1000px){
        display: none;    
        }  
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

export const Timers = styled.div`
    display: flex;
    @media (max-width: 560px){
        display: block;
    }
`

export const Experience = styled.div`
    width: 66%;
    color: white;
    margin-left: 7%;
    margin-top: 100px;  

    @media(max-width: 1000px){
        margin: 3rem auto 0 7%;    
    }    
    
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
    position: relative;

    @media(max-width: 1000px){
        width: 90%;
    }

    @media(max-width: 680px){
        width: 80%;
    }
`

export const Textox = styled.div`
    z-index: 1;
`

export const Shave = styled.img`
    @media(max-width: 1000px){        
        z-index: 0;
        width: 50%; 
        position: absolute;        
        right: 0;
        bottom: 0;
        margin-right:-50%;
    }
`

export const Parag = styled.p`
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 17px;
    
`