import {
    makeStyles
} from "@material-ui/core";

let generalStyleForToolbar = {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    height: '120px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '16px',
    textTransform: 'uppercase',
};

export const styleForToolbar = makeStyles(theme => ({
    toolbarDefault: {
        ...generalStyleForToolbar,
        background: 'linear-gradient(45deg, #478292 30%, #095e72 90%)',
    },

    toolbarScrolled: {
        ...generalStyleForToolbar,
        background: 'transparent',
    },

    // NAVIGATION

    toolbar_navigation: {
        display: 'flex',
        height: '100%',
        width: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        color: '#85ADB6',
        textDecoration: 'none',

        '&:hover': {
            color: 'white',
        },
        '&:active': {
            color: 'white',
        },
    },

    // LISTS

    toolbar_trackers_list_items: {
        '& li': {
            margin: '10px',
            padding: '0',
        },
    },

    toolbar_controls_list_items: {
        '& li': {
            margin: '15px',
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
    },

    //ICONS

    toolbar_tracker_items_Icons: {
        marginLeft: '3px',
        fontSize: '20px',
    },


    //SPACERS

    toolbar_navigation_spacerBetweenLogoNavList: {
        flex: '0.3',
    },
    toolbar_navigation_spacerBetweenListLanguages: {
        flex: '0.2',
    },

    //SIDE MENU

    toolbar_sideMenuButton: {
        marginLeft: '10px'
    },

    //DROP DOWN PAGE

    toolbar_dropDownPage: {
        display: 'flex',
        height: 'fit-content',
        width: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    //RESPONSIVE

    [theme.breakpoints.up('lg')]: {
        //FOR SIDE MENU
        toolbar_sideMenuButton: {
            display: 'none',
        },
    },

    [theme.breakpoints.down('md')]: {
        //FOR NAVIGATION
        toolbar_navigation: {
            width: '940px',
        },
        toolbar_navigation_items: {
            display: 'none'
        },

        //FOR TRACKERS
        toolbar_trackers_list_items: {
            display: 'none',
        },

        //FOR SIDE MENU
        toolbar_sideMenuButton: {
            marginRight: '10px',
        },

        //FOR LANGUAGE MENU
        toolbar_langMenu: {
            margin: '3px',
        },

        //FOR SPACERS
        toolbar_navigation_spacerBetweenLogoNavList: {
            flex: '1',
        },
        spacerBetweenNavControls: {
            display: 'none'
        }
    },

    [theme.breakpoints.down('sm')]: {
        toolbar_navigation: {
            width: '720px',
        }
    },

    '@media(max-width: 720px)': {
        toolbar_navigation: {
            width: '100vw',
        },
    },
}));
