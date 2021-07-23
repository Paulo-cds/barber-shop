import logo from './images/logo.png'
import logotwo from './images/much-img.png'
import {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
    Hamburguer,
    DivLogo,
} from './StyleHeader'

const Linked = styled(Link)`
    color:white;
    background-color: rgba(10,23,55,0);
    border:none;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size:1,33rem;
    padding: 1,25rem;
    :hover{
    border-bottom:1px solid ${colorPrimary}; 
    color: ${colorPrimary};
    cursor: pointer;
    }
`

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,    
  },
  drawerPaper: {
    width: drawerWidth,    
  },
  drawerHeader: {
    
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


function Header (color) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawer = () => {
      setOpen(!open);
    };
  
    
    
    
    return (
        <>

        <Hamburguer>
        
            
            
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                
            
            
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawer}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>                
                <List style={{display: 'block'}}>   
                    <Divider/>      
                    <Linked to='/Home'>       
                        <ListItem button key={''} onClick={handleDrawer}>                        
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <Links style={{color:'black'}}>Inicio</Links>                                                                                                                                                                   
                        </ListItem>   
                    </Linked>        

                    <Divider/>
                    <Linked to='/Sobre'>
                        <ListItem button key={''} onClick={handleDrawer}>                        
                         <ListItemIcon><MailIcon /></ListItemIcon>
                         <Links style={{color:'black'}}>Sobre</Links>                         
                        </ListItem>  
                    </Linked>    

                    <Divider/>
                    <Linked to='/Services'>
                        <ListItem button key={''} onClick={handleDrawer}>                        
                         <ListItemIcon><MailIcon /></ListItemIcon>
                         <Links style={{color:'black'}}>Serviços</Links>                         
                        </ListItem>  
                    </Linked> 

                    <Divider/>
                    <Linked to='/Gallery'>
                        <ListItem button key={''} onClick={handleDrawer}>                        
                         <ListItemIcon><MailIcon /></ListItemIcon>
                         <Links style={{color:'black'}}>Galeria</Links>                         
                        </ListItem>  
                    </Linked> 

                    <Divider/>
                    <Linked to='/Appointment'>
                        <ListItem button key={''} onClick={handleDrawer}>                        
                         <ListItemIcon><MailIcon /></ListItemIcon>
                         <Links style={{color:'black'}}>Reservas</Links>                         
                        </ListItem>  
                    </Linked> 

                    <Divider/>
                    <Linked to='/Localization'>
                        <ListItem button key={''} onClick={handleDrawer}>                        
                         <ListItemIcon><MailIcon /></ListItemIcon>
                         <Links style={{color:'black'}}>Localização</Links>                         
                        </ListItem>  
                    </Linked> 
                </List>                
                
            </Drawer>
            </Toolbar>
            
        <DivLogo>
            <Logo src={logo}/>
        </DivLogo>
        </Hamburguer>
        
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