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
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex-wrap: wrap;
    width: 900px;
`

export const GalleryImage = styled.div`
    
    margin: 6px;
    width: 30%;
`

export const ImgGall = styled.img`
    width: 100%;
    border: 10px solid ${colorPrimary};
`