import styled from 'styled-components'

import {colorPrimary, colorSecondary} from './styles/Colors'

import color from './pages/Home'


 export const Head = styled.header `
                //padding: 30px 0;
                background-color: #191919;
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

            export const Logo = styled.img`
                margin: 0 30px; 
            `

            export const Item = styled.li`
                display:flex;
                align-items: center;  
               // font-family: 'Poppins', sans-serif;
                width: 150px;
                justify-content: center;
                

            `

            export const Links = styled.button`
                
                color:white;
                background-color: rgba(10,23,55,0);
                border:none;
                text-transform: uppercase;
                text-decoration: none;
                font-weight: bold;
                font-size:12px;
                padding: 20px;
                :hover{
                border-bottom:1px solid ${colorPrimary}; 
                color: ${colorPrimary};
                cursor: pointer;
                
            }
            `
            

            
            

            