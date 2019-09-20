import React from 'react';
import language from '../../../assets/images/language_menu/languages.svg';
import arrow from '../../../assets/images/language_menu/arrow.svg';
import {LanguageButton, LanguageDropDownMenu, LanguageMenuItem, styleForLanguageMenu} from "./LanguageMenuStyles";


export default function LanguageMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const styleFor = styleForLanguageMenu();

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(e) {
        setAnchorEl(null);
    }

    return (
        <div>
            <LanguageButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={language}/>
                <span className={styleFor.languageMenu_text}>EN</span>
                <img src={arrow}/>
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