import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {LanguageButton, LanguageDropDownMenu, LanguageMenuItem, styleForLanguageMenu} from "./LanguageMenuStyles";


export default function LanguageMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(e) {
        setAnchorEl(null);
    }

    return (
        <div>
            <LanguageButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <LanguageIcon color='action' className='langIcon'/>
                EN
                <ExpandMoreIcon color='action' fontSize='small'/>
            </LanguageButton>
            <LanguageDropDownMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <LanguageMenuItem onClick={handleClose}>EN</LanguageMenuItem>
                <LanguageMenuItem onClick={handleClose}>RU</LanguageMenuItem>
            </LanguageDropDownMenu>
        </div>
    );
}