import styled from 'styled-components'
import BackgroundImg from '../images/chair-ic.png'

import {colorPrimary, colorPrimaryLight, colorTri} from './Colors'



export const Page = styled.div`
    background-color: ${colorPrimary};
    height: 100vh;    
    padding-bottom: 100px;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 300px;
`

export const Tittle = styled.h2`
    color: ${colorPrimaryLight};
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 20px;
    text-align:center;
`

export const Agend = styled.img``

export const Heading = styled.img`
    margin: 0 auto;
    display: block;
`

export const Formulario  = styled.form`
    margin-top: 80px;
`

export const Lab = styled.label`
    display: block;
    color: ${colorPrimaryLight};
    font-size: 14px;
    margin-bottom: 2px;
`

export const Entry = styled.input`
    padding: 10px 10px;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 3px;
`

export const Sel = styled.select`
    padding: 10px 10px;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 3px;
`

export const Opt = styled.option`
    width: 100%;
`


export const FormDiv = styled.div`
    width: 100%;
    margin-right: 50px;
    :last-of-type{
        margin-right: 0;
    }
`


export const PersonalData = styled.div`
    display: flex;
    justify-content: space-between;    
    margin-bottom: 20px;
`

export const Message = styled.textarea`
    padding: 10px 10px;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 3px;
    height: 100px;
`


export const Botao = styled.button`
    background-color: ${colorTri};
    color: white;
    padding: 15px 40px;
    border: none;
    margin-top:10px;
    text-transform: uppercase;
    font-weight: bold;
`