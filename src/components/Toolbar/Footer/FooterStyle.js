import {
    makeStyles
} from "@material-ui/core";

let generalStyleForFooter = {
    width: '100%',
    height: '100px',
    position: 'relative'
};

export const styleForFooter = makeStyles(theme => ({
    footer: {
        ...generalStyleForFooter,
        background: 'linear-gradient(45deg, #478292 30%, #095e72 90%)',
    },

    footer_body: {
        display: 'flex',
        height: '100%',
        width: '1170px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        alignContent: 'center',
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
