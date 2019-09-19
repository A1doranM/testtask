import {
    makeStyles
} from "@material-ui/core";

export const styleForToolbar = makeStyles(theme => ({
    toolbar: {
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        height: '65px',
        background: 'linear-gradient(45deg, #478292 30%, #095e72 90%)',
    },

    // NAVIGATION

    toolbar_navigation: {
        display: 'flex',
        height: '100%',
        width: '1140px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        '& ul': {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
        },

    },

    toolbar_navigation_items: {
        '& li': {
            padding: '0 0.5rem',
        },
    },

    toolbar_navigation_items_link: {
        color: 'DarkGray',
        textDecoration: 'none',

        '&:hover': {
            color: 'white',
        },
        '&:active': {
            color: 'white',
        },
    },

    // CONTROLS

    toolbar_control_items: {
        fontWeight: '1000',
        '& li': {
            margin: '3px',
            padding: '0',
        },

    },

    //LANGUAGES

    toolbar_langMenu: {
        marginLeft: '15px'
    },

    //LOGO

    toolbar_logo: {
        marginLeft: '15px',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
        }
    },

    //SPACERS

    spacerBetweenLogoNav: {
        flex: '0.5',
    },
    spacerBetweenNavControls: {
        flex: '0.5',
    },

    //RESPONSIVE

    [theme.breakpoints.up('lg')] : {
        toolbar_sideMenuButton: {
            display: 'none',
        }
    },

    [theme.breakpoints.down('md')] : {
        //FOR NAVIGATION
        toolbar_navigation:{
            width: '940px',
        },
        toolbar_navigation_items: {
            display: 'none'
        },

        //FOR SIDE MENU
        toolbar_sideMenuButton: {
            marginRight: '10px',
        },

        //FOR LANGUAGE MENU
        toolbar_langMenu:{
          margin: '3px',
        },

        //FOR SPACERS
        spacerBetweenLogoNav: {
            flex: '1',
        },
        spacerBetweenNavControls: {
            display: 'none'
        }
    },

    [theme.breakpoints.down('sm')] : {
        toolbar_navigation: {
            width: '720px',
        }
    },

    '@media(max-width: 720px)' : {
        toolbar_navigation: {
            width: '100vw',
        },
    }
}));
