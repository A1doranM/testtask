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
        marginRight: '20%',
        fontWeight: '1000',
        '& li': {
            padding: '0',
        },

    },

    //LOGO

    toolbar_logo: {
        marginLeft: '20%',
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

}));
