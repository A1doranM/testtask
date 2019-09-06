import React from 'react';
import {
    AppBar, Toolbar, IconButton,
    CssBaseline, makeStyles, useTheme
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import LangMenu from './languageMenu/LangMenu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 0;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(2),
    },
    appBar: {
        height: '65px',
        textAlign: 'justify',
        background: 'linear-gradient(45deg, #478292 30%, #095e72 90%)',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    logo_wrapper: {
        [theme.breakpoints.up('xs')]: {
            marginLeft: '21%',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '5%',
        },
    },
    logo: {
        height: '50px',
        width: '110px',
        marginTop: '5px',
    },
    nav: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '16%',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        backgroundColor: 'transparent',
    },
    navs: {
        margin: theme.spacing(2),
        color: 'DarkGrey',
        fontStyle: 'verdana',
        fontSize: '17px',
        fontStretch: 'semi-condensed',
        fontWeight: '500',
        textDecoration: 'none',
        '&:hover': {
            color: 'white',
        },
        '&:active': {
            color: 'white',
        },
        '&:visited': {
            textDecoration: 'none',
        },
    },
    languages: {
        backgroundColor: 'transparent',
        width: '75px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '1%',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '55%',
            marginRight: '1%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginLeft: '35%',
            marginRight: '1%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginLeft: '30%',
            marginRight: '1%',
        },
    },
    controls: {
        fontWeight: 500,
        maxWidth: '230px',
        minWidth: '230px',
        marginRight: '5%',
        [theme.breakpoints.up('md')]: {
            marginLeft: '16%',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '1%',
        },

    },
    menuButton: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    signUp: {
        maxWidth: '120px',
        minWidth: '120px',
        fontSize: '12px',
        color: 'white',
        borderColor: 'white',
        marginRight: theme.spacing(1),
    },
    logIn: {
        maxWidth: '100px',
        minWidth: '100px',
        fontSize: '12px',
        color: 'white',
        backgroundColor: '#eca347',
        '&:hover': {
            backgroundColor: '#eca347',
        },
    },
    buttonLogo: {
        marginRight: '5px',
        width: '15px'
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


let Menu = (props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);;

    let MenuContent = {
        signUpButton: '',
        logInButton: '',
        navs: [],
    };

    if (props.currentLanguage === 'EN') {
        MenuContent.signUpButton = props.signUpButton.title_EN;
        MenuContent.logInButton = props.logInButton.title_EN;
        MenuContent.navs = props.nav.map((nav) => {
            return <a href='/' key={nav.id} className={classes.navs}>{nav.title_EN}</a>
        });
    } else if (props.currentLanguage === 'RU') {
        MenuContent.signUpButton = props.signUpButton.title_RU;
        MenuContent.logInButton = props.logInButton.title_RU;
        MenuContent.navs = props.nav.map((nav) => {
            return <a href='/' key={nav.id} className={classes.navs}>{nav.title_RU}</a>
        });
    }

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.logo_wrapper}>
                        <img className={classes.logo}
                             src='data:image/png;base64,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'
                             alt={' '}/>
                    </div>
                    <div className={classes.nav}>
                        {MenuContent.navs}
                    </div>
                    <div className={classes.languages}>
                        <LangMenu languages={props.langMenu}
                                  currentLanguage={props.currentLanguage}
                                  setCurrentLanguage={props.setCurrentLanguage}
                                  dispatch={props.dispatch}/>
                    </div>
                    <div className={classes.controls}>
                        <Button variant='outlined' className={classes.signUp}>
                            <PersonAddIcon fontSize='small' className={classes.buttonLogo}/>
                            <strong>{MenuContent.signUpButton}</strong>
                        </Button>
                        <Button variant='contained' className={classes.logIn}>
                            <ExitToAppIcon fontSize='small' className={classes.buttonLogo}/>
                            <strong>{MenuContent.logInButton}</strong>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Menu;