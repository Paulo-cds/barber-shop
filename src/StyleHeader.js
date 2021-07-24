import styled from 'styled-components'

import {colorPrimary, colorSecondary} from './styles/Colors'

import color from './pages/Home'


 export const Head = styled.header `
                //padding: 30px 0;
                background-color: #191919;
                

                @media(max-width:1000px){
                    display:none;
                }
            `
            export const Hamburguer = styled.div`
                background-color: #191919;
                
                display: none;

                @media(max-width:1000px){
                    display: flex;
                    justify-content: space-between;
                    height: 10rem;
                }
            `

            export const Navi = styled.nav`
                display: flex;
                justify-content:center;
            `

            export const List = styled.ul`
                list-style: none;
                text-decoration: none;
                display: flex;
            `

            export const DivLogo = styled.div`
                position: absolute;                
                margin: .3rem auto;
                left: 35%;      

                @media(min-width:501px) and (max-width:650px){
                    left:25%;
                }

                @media(min-width: 371px) and (max-width: 500px){
                    left:30%;
                }

                @media(max-width: 370px){
                    left:25%;
                }
            `

            export const Logo = styled.img`
                margin: .30rem 1.87rem;  
                width: 70%;                              
            `

            export const Item = styled.li`
                display:flex;
                align-items: center;  
               // font-family: 'Poppins', sans-serif;
                width: 9.37rem;
                justify-content: center;
                

            `

            export const Links = styled.button`
                
                color:white;
                background-color: rgba(10,23,55,0);
                border:none;
                text-transform: uppercase;
                text-decoration: none;
                font-weight: bold;
                font-size:.75rem;
                padding: 1.25rem;
                :hover{
                border-bottom:1px solid ${colorPrimary}; 
                color: ${colorPrimary};
                cursor: pointer;
                
            }
            `

    export const GoTopo = styled.div`        
        position: fixed;
        width: 2%;
        bottom: 1%;
        left: 1%;
        z-index: 99;                
        -webkit-transition: all 1s ease;
        transition: all 1s ease;

        &:hover{
            cursor:pointer;
        }
    `

    export const ImgTop = styled.img`
         width: 100%;
        background: white;
        border-radius: 100%;
    `
            

            
            

            