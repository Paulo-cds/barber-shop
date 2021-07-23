import styled from 'styled-components'
import Background from '../images/bg-location.jpg'
export const colorPrimary = '#917758';



export const Location = styled.div`    
    padding: 100px 0; 
    background: url(${Background});
    background-size: cover;
`

export const Head = styled.div`
    background-color: #191919;
    padding: 40px;
    width: 93,5%;
    display: flex;
    justify-content: space-between;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
`

export const  Icon = styled.div`
    margin-right: 15px;
    border: 1px solid ${colorPrimary};
    border-radius: 100%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Text = styled.div``

export const ImgInfo = styled.img``

export const Span1 = styled.span`
    display: block;
    font-size: 13px;
    color: silver;
`

export const Span2 = styled.span`
    font-size: 13px;
    color: white;
`


export const Map = styled.div``

export const Iscript = styled.script`
    height: 500px;
`

