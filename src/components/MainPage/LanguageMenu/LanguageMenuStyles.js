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
    languageMenuDropDown_text: {
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
    languageMenuHorizontal: {
        width: '100%',
        height: '100%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '18px',
        textTransform: 'uppercase',
        color: 'black',
    },
    languageMenuHorizontal_item: {
        display: 'inline-block',
        margin: '10px',
    }
}));



