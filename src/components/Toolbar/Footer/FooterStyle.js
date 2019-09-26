import {
    makeStyles
} from "@material-ui/core";

let generalStyleForFooter = {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    left: '0',
    height: '100px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '16px',
    textTransform: 'uppercase',
};

export const styleForFooter = makeStyles(theme => ({
    footer: {
        ...generalStyleForFooter,
        background: 'linear-gradient(45deg, #478292 30%, #095e72 90%)',
    },

    footer_body: {
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

    //LOGO

    footer_logo: {
        marginLeft: '15px',
    },

    //SPACERS

    footer_body_spacerBetweenLogoLangMenu: {
        flex: '1'
    },

    //RESPONSIVE

    [theme.breakpoints.down('md')]: {
        //FOR NAVIGATION
        footer_body: {
            width: '940px',
        },

        //FOR LANGUAGE MENU
        footer_langMenu: {
            margin: '3px',
        },

        //FOR SPACERS
        footer_body_spacerBetweenLogoLangMenu: {
            flex: '1',
        },
        spacerBetweenNavControls: {
            display: 'none'
        }
    },

    [theme.breakpoints.down('sm')]: {
        footer_body: {
            width: '720px',
        }
    },

    '@media(max-width: 720px)': {
        footer_body: {
            width: '100vw',
        },
    },
}));
