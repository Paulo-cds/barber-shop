import logo from './images/logo.png'
import logotwo from './images/much-img.png'
//import React, {useState} from 'react'
//import handleChangePage from '../ChangePage'
//import { Link, animateScroll as scroll } from "react-scroll";
import {Switch, BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom'

import {colorPrimary, colorSecondary} from './styles/Colors'
import styled from 'styled-components'

import {    
    Head,
    Navi,
    List,
    Logo,
    Item,
    Links,
    styleLink,    
} from './StyleHeader'

const Linked = styled(Link)`
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


function Header (color) {
   
    
    
    return (
        <>
        
        <Head >
        
        
                        <Navi>
                            <List>
                                <Item>
                                    < Links  >
                                        < Linked to="/Home"  >
                                            Inicio 
                                        </Linked>
                                    </Links>
                                </Item>
                                <Item>
                                    < Links >
                                        < Linked to="/Sobre" >
                                            Sobre 
                                        </Linked>
                                    </Links>
                                </Item>
                                <Item>
                                    <Links >
                                        < Linked to="/Services">
                                            Serviços 
                                        </Linked>
                                    </Links>
                                </Item>
                                <Item>
                                    <Logo src={logo}/>
                                </Item>
                                <Item>
                                    <Links>
                                        < Linked to="/Gallery">
                                            Galeria 
                                        </Linked>
                                    </Links>
                                </Item>
                                <Item>
                                    <Links>
                                        < Linked to="/Appointment">
                                         Reservas 
                                        </Linked>
                                    </Links>
                                </Item>
                                <Item>
                                    <Links>
                                        < Linked to="/Localization">
                                            Localização 
                                        </Linked>
                                    </Links>
                                </Item>
                            </List>
                        </Navi>
        </Head>
        </>
    )
}


export default Header