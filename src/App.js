import styled from 'styled-components'


import Home from './pages/Home'


import Sobre from './pages/Sobre'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
import Gallery from './pages/Gallery'
import Localization from './pages/Localization'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'

//import React, {useState} from 'react'




function App() {

  return (
    <>
        <Router>
                <Switch>
                    
                
                    <Route path="/Sobre" component={Sobre}/>
                        
                
                
                    <Route path="/Services" component={Services}/>
                        
                
                
                    <Route path="/Appointment" component={Appointment}/>
                       
                
                
                    <Route path="/Gallery" component={Gallery}/>
                        
                
                    <Route path="/Localization" component={Localization}/>
                        
                    <Route path="/" component={Home}/>
                     
                </Switch>
            </Router> 
    </>
  );
}





export default App;
