import styled from 'styled-components'
import background from '../images/bg-home.jpg'
import {colorPrimary} from './Colors'

import { Link, animateScroll as scroll } from "react-scroll"



            export const Body = styled.div`
                background-image: url(${background});
                height: 100vh;
                width: 100%;
                background-size: cover;
                background-repeat: no-repeat;                
                position: relative;
                //padding: 40px 0;
                background-attachment: fixed;
            `

            export const Homer = styled.section`

            `
            export const Header = styled.header `
                padding: 30px 0;
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

            /**********Banner*********/

            export const Banner = styled.div`
                color: white;
                text-align:center;    
                position: absolute;
                top: 50%;
                left:50%;
                height: 16,87rem;
                width:46,87rem;
                margin-left:-25%;
                margin-top:-15%;

                @media(max-width:1000px){
                    margin-left: -45%;
                }
            `

            export const Slogan1 = styled.span`
            color: ${colorPrimary};
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 14px;
            `

            export const Slogan2 = styled.span`
            margin-bottom:15px;
            display: block;
            `

            export const Tittle = styled.h1`
            font-size: 120px;
            margin: 30px 0;
            `

            export const SecondLogo = styled.img``
                
       