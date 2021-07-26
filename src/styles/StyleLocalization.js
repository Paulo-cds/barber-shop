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

    @media(max-width: 375px)  {
        display: grid;
        place-items: center;
    }
`
export const Info = styled.div`
    display: flex;
    align-items: center;  

    &:last-child{
        margin-left: 1.5rem;
    }  

    @media(max-width: 1000px){        
        margin: .5rem auto;
        

        &:last-child{
        margin-left: 0;
        } 
    }

    @media(max-width: 425px){
        display: grid;
        place-items: center;
    }
`

export const DivInfo = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1000px){
        display: grid;
        place-items: center;
        
    }
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

    @media(max-width: 425px){
        display: none;
    }
`
export const Text = styled.div`
    width: 50%;
    flex-wrap: wrap;

    @media(max-width: 375px)  {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const ImgInfo = styled.img``

export const Span1 = styled.span`
    display: block;
    font-size: 13px;
    color: silver;
`

export const Span2 = styled.span`
    font-size: 13px;
    color: white;  
     

    @media(max-width: 375px)  {
        margin-left: 1rem;
    } 
`


export const Map = styled.div``

export const Iscript = styled.script`
    height: 500px;
`

