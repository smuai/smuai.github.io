import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../Images/blue.png'
import "./styles.css"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import FlashOn from '@material-ui/icons/FlashOn';
import Event from '@material-ui/icons/Event';
import ContactPhone from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles({
    // root: {
    //     fontFamily: 'Montserrat',
    //     fontSize: "18px",
    //     fontWeight: "bold",
    // },
    list: {
      width: 255,
    },
});

export default function Header() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <Button href="/">
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="OVERVIEW"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button href="/people">
                        <ListItemIcon><People /></ListItemIcon>
                        <ListItemText primary="OUR PEOPLE"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button href="/insights">
                        <ListItemIcon><FlashOn /></ListItemIcon>
                        <ListItemText primary="OUR INSIGHTS"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button href="/events">
                        <ListItemIcon><Event /></ListItemIcon>
                        <ListItemText primary="OUR EVENTS"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button href="/contact">
                        <ListItemIcon><ContactPhone /></ListItemIcon>
                        <ListItemText primary="CONTACT US"/>
                    </Button>
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar position="static" color="inherit" id="header">
            <Toolbar>
                <div style={{flexGrow: 1}} className="logo">
                    <a href="/"><img src={logo} height='50px' width='231px' alt="SmuAI Logo" style={{padding: "0px"}} /></a>
                </div>

                <div className="navbar-buttons">
                    <Button color="inherit" href='/' size="large" className="button">Overview</Button>
                    <Button color="inherit" href="/people" size="large">Our People</Button>
                    <Button color="inherit" href="/insights" size="large">Our Insights</Button>
                    <Button color="inherit" href="/events" size="large">Our Events</Button>
                    <Button color="inherit" href="/contact" size="large">Contact Us</Button>
                    <SwipeableDrawer
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {sideList('left')}
                    </SwipeableDrawer>
                    <SwipeableDrawer
                        anchor="right"
                        open={state.right}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        {sideList('right')}
                    </SwipeableDrawer>
                </div>

                <div className="burger">
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}