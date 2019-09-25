import {styled, makeStyles} from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

export const CloseMenuButton = styled(CloseIcon)({
    variant: 'outlined',
    marginLeft: '250px',
    marginTop: '20px'
});

export const styleForSideMenu = makeStyles(theme => ({
    sideMenu_header: {
        display: 'flex',
        alignItems: 'center',
        width: '280px',
        height: '65px',
        backgroundColor: '#e1ebee',
    },

    sideMenu_userName: {
        width: '240px',
        paddingLeft: '5px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        color: 'black',
    },

    innerMenu_expandMoreIcon: {
        position: 'absolute',
        right: '10px'
    },

    innerMenu_text: {
        marginLeft: '25px',
        fontSize: 'h6'
    },

    innerMenu_item: {
        fontSize: 'h6'
    },

    sideMenu_footer: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: '10px'
    },

    sideMenu_footer_languages: {
        width: '140',
        margin: '10px',
    },

    sideMenu_footer_copyright:{
        marginLeft: '40px'
    }
}));