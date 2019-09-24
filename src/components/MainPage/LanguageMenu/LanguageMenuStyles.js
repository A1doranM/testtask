import {styled} from '@material-ui/styles';
import {Button} from "@material-ui/core/es/index";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    makeStyles
} from "@material-ui/core";


export const LanguageButton = styled(Button)({
    borderStyle: 'none',
    marginRight: '10px',
});

export const LanguageDropDownMenu = styled(Menu)({
    marginTop: '60px',
    marginLeft: '15px',
});

export const LanguageMenuItem = styled(MenuItem)({
    display: 'block',
    width: '55px',
});

export const styleForLanguageMenu = makeStyles(theme => ({
    languageMenu_text: {
        marginLeft: '5px',
        marginRight: '5px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '18px',
        textTransform: 'uppercase',
        color: 'white',
    },
    languageMenu_rectangle: {
        position: 'float',
        top: '-5px',
        left: '50%',
        width: '26.66px',
        height: '26.66px',
        background: 'black',
        transform: 'matrix(0.71, 0.69, -0.73, 0.71, 0, 0)',
        zIndex: '100',
    }
}));



