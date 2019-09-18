import {styled, makeStyles} from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

export const CloseMenuButton = styled(CloseIcon)({
    variant: 'outlined',
    marginLeft: '250px',
    marginTop: '20px'
});

export const styleForSideMenu = makeStyles(theme => ({
    sideMenu_header: {
        width:'280px',
        height:'65px',
        backgroundColor: '#e1ebee',
    },
    innerMenu_expandMoreIcon: {
      marginLeft: '110px'
    },
    innerMenu_text:{
        marginLeft: '5px',
        fontSize: 'h6'
    },
    innerMenu_item:{
        marginLeft: '40px',
        fontSize: 'h6'
    }
}));