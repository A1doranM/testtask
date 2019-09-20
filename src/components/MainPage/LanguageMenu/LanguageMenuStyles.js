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
    marginTop: '50px',
});

export const LanguageMenuItem = styled(MenuItem)({
    textAlign: 'center',
    display: 'block',
    width: '75px',
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
        }
    }))
;
