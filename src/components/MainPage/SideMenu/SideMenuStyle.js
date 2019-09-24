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
    sideMenu_close:{
    },
    innerMenu_expandMoreIcon: {
        position: 'absolute',
        right: '10px'
    },
    innerMenu_text: {
        marginLeft: '5px',
        fontSize: 'h6'
    },
    innerMenu_item: {
        marginLeft: '40px',
        fontSize: 'h6'
    },
}));

export const styleForSideButton = makeStyles(theme => ({}));