
import logo from '../images/logo.png'
import logotwo from '../images/much-img.png'
//import React, {useState} from 'react'
//import handleChangePage from '../ChangePage'
//import { Link, animateScroll as scroll } from "react-scroll";
import {Switch, BrowserRouter as Router, Link, Route} from 'react-router-dom'

import {
    Body,
    Homer,
    Header,
    Navi,
    List,
    Logo,
    Item,
    Links,
    Banner,
    Slogan1,
    Slogan2,
    Tittle,
    SecondLogo,
} from '../styles/StyleHome'

import Headerr from '../Header'
import Foot from '../Footer'

import Sobre from './Sobre'
import Services from './Services'
import Appointment from './Appointment'
import Gallery from './Gallery'
import Localization from './Localization'

/*
const pages = {
    sobre: Sobre,
    services:Services,
    appointment:Appointment,
    gallery:Gallery,
    localization:Localization,
}
*/



function Home() {
    
    /*
    const [page, setPage] =useState()

    const handleChangePage = page => {
        setPage(page)
    }

    const Page = pages[page]
    */
    
    return(
        <>
            
            <Headerr />
            
           
            <Body>
                
                <Homer>
                   
                    <Banner>
                        <Slogan1>Profissionalismo e Excelência</Slogan1>
                        <Tittle>Barber Shop</Tittle>
                        <Slogan2>O melhor lugar para cuidar do seu estilo</Slogan2>
                        <SecondLogo src={logotwo} />
                    </Banner>
                </Homer>   
                
            </Body>
           
            <Foot/>                                   
            
        </>
    )
}

export default Home





