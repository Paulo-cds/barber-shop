import styled from 'styled-components'

import {colorPrimary, colorPrimaryLight, colorTri} from './Colors'



export const Page = styled.div`
    background-color: ${colorPrimaryLight};    
   // padding: 100px 0;
   
`

export const Tittle = styled.h2`
    color: ${colorTri};
    font-weight: 400;
    font-size: 50px;
    margin-bottom: 20px;
    text-align:center;
`

export const Img1 = styled.img`
    margin: 0 auto;
    display: block;
`


export const GalleryWrapper = styled.div`
    margin: 3.12rem auto 0;
    display: flex;
    flex-direction: column;
    height: 50rem;
    flex-wrap: wrap;
    width: 80%;
    
    @media (min-width: 692px) and (max-width:900px){
        height: 30rem;
    }

    @media (min-width: 562px) and (max-width: 691px){
        height: 25rem;
    }

    @media (min-width: 456px) and (max-width:561px){
        height: 50rem;
    }

    @media (min-width: 392px) and (max-width:455px){
        height: 40rem;
    }

    @media (min-width: 380px) and (max-width:391px){
        height: 39rem;
    }

    @media (min-width: 334px) and (max-width:379px){
        height: 35rem;
    }

    @media (max-width:333px){
        height: 33rem;
    }
`

export const GalleryImage = styled.div`    
    margin: .37rem;
    width: 30%;

    @media(max-width:561px)    {
        width: 45%;
    }
`

export const ImgGall = styled.img`
    width: 100%;
    border: 10px solid ${colorPrimary};
`