import React from 'react';
import language from '../../../assets/images/languageMenu/languages.svg';
import arrow from '../../../assets/images/languageMenu/arrow.svg';
import {LanguageButton, LanguageDropDownMenu, LanguageMenuItem, styleForLanguageMenu} from "./LanguageMenuStyles";

let changeLanguage = () => {};

export default function LanguageMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const styleFor = styleForLanguageMenu();

    let handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    let handleClose = (e) => {
        setAnchorEl();
    };

    if(props.menuStyle === 'drop-down') {
        return (
            <div>
                <LanguageButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <img src={language} alt={'language'}/>
                    <span className={styleFor.languageMenuDropDown_text}>EN</span>
                    <img src={arrow} alt={'arrow'}/>
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
                    <LanguageMenuItem onClick={handleClose}>CN</LanguageMenuItem>
                </LanguageDropDownMenu>
            </div>
        );
    } else if(props.menuStyle === 'horizontal'){
        return (
            <div className={styleFor.languageMenuHorizontal}>
                <div className={styleFor.languageMenuHorizontal_item}>EN</div>
                <div className={styleFor.languageMenuHorizontal_item}>RU</div>
                <div className={styleFor.languageMenuHorizontal_item}>CN</div>
            </div>
        );
    }
}
