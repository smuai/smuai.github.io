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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
    // root: {
    //     fontFamily: 'Montserrat',
    //     fontSize: "18px",
    //     fontWeight: "bold",
    // },
    list: {
        width: 192,
        fontFamily: "Montserrat",
        fontSize: "15px",
    },
    listItemText: {
        fontFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "bold",
    },
    listItem: {
        paddingLeft: "0px",
    },
    listItemIcon: {
        color: "#1b2a52",
    }
});

const theme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        regular: {
          minHeight: "32px",
          '@media(max-width:768px)' : {
            minHeight:"48px"
          }
        }
      },
      MuiListItemIcon: {
        root: {
          '@media(max-width:768px)' : {
            minWidth:"35px"
          }
        }
      },
    }
});

function Header() {
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
                <ListItem className={classes.listItem}>
                    <Button style={{paddingLeft: "20px"}} href="/">
                        <ListItemIcon className={classes.listItemIcon}><Home /></ListItemIcon>
                        <ListItemText disableTypography className={classes.listItemText} primary="OVERVIEW"/>
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button style={{paddingLeft: "20px"}} href="/people">
                        <ListItemIcon className={classes.listItemIcon}><People /></ListItemIcon>
                        <ListItemText disableTypography className={classes.listItemText} primary="OUR PEOPLE"/>
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button style={{paddingLeft: "20px"}} href="/insights">
                        <ListItemIcon className={classes.listItemIcon}><FlashOn /></ListItemIcon>
                        <ListItemText disableTypography className={classes.listItemText} primary="OUR INSIGHTS"/>
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button style={{paddingLeft: "20px"}} href="/events">
                        <ListItemIcon className={classes.listItemIcon}><Event /></ListItemIcon>
                        <ListItemText disableTypography className={classes.listItemText} primary="OUR EVENTS"/>
                    </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button style={{paddingLeft: "20px"}} href="/contact">
                        <ListItemIcon className={classes.listItemIcon}><ContactPhone /></ListItemIcon>
                        <ListItemText disableTypography className={classes.listItemText} primary="CONTACT US"/>
                    </Button>
                </ListItem>
            </List>
        </div>
    );

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="sticky" color="inherit" id="header" style={{position: "fixed"}}>
                <Toolbar className="toolbar">
                    <div style={{flexGrow: 1}}>
                        <a href="/"><img src={logo} alt="SmuAI Logo" className="logo"/></a>
                    </div>

                    <div className="navbar-buttons">
                        <Button disableRipple color="inherit" href='/' size="large" className="button">Overview</Button>
                        <Button disableRipple color="inherit" href="/people" size="large">Our People</Button>
                        <Button disableRipple color="inherit" href="/insights" size="large">Our Insights</Button>
                        <Button disableRipple color="inherit" href="/events" size="large">Our Events</Button>
                        <Button disableRipple color="inherit" href="/contact" size="large">Contact Us</Button>
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
        </MuiThemeProvider>
    )
}

export default Header;