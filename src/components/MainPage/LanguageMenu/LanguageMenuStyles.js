import {styled} from '@material-ui/styles';
import {Button} from "@material-ui/core/es/index";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const LanguageButton = styled(Button)({
    borderRadius: '0.3',
    boxShadow: 'inset 0 0 0 1px white',
    color: 'white'
});

export const LanguageDropDownMenu = styled(Menu)({
    marginTop: '40px',
});

export const LanguageMenuItem = styled(MenuItem)({
    textAlign: 'center',
    display: 'block',
    width: '75px',
});
