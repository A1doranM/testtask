import React from 'react';
import language from '../../../assets/images/languageMenu/languages.svg';
import arrow from '../../../assets/images/languageMenu/arrow.svg';
import {LanguageButton, LanguageDropDownMenu, LanguageMenuItem, styleForLanguageMenu} from "./LanguageMenuStyles";

export default function LanguageMenu(props) {
    let languageMenuData = {
        EN: 'EN',
        RU: 'RU',
        CN: 'CN',
    };

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
                    <span className={styleFor.languageMenuDropDown_text}>{languageMenuData.EN}</span>
                    <img src={arrow} alt={'arrow'}/>
                </LanguageButton>
                <LanguageDropDownMenu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <LanguageMenuItem onClick={handleClose}>{languageMenuData.EN}</LanguageMenuItem>
                    <LanguageMenuItem onClick={handleClose}>{languageMenuData.RU}</LanguageMenuItem>
                    <LanguageMenuItem onClick={handleClose}>{languageMenuData.CN}</LanguageMenuItem>
                </LanguageDropDownMenu>
            </div>
        );
    } else if(props.menuStyle === 'horizontal'){
        return (
            <div className={styleFor.languageMenuHorizontal}>
                <div className={styleFor.languageMenuHorizontal_item}>{languageMenuData.EN}</div>
                <div className={styleFor.languageMenuHorizontal_item}>{languageMenuData.RU}</div>
                <div className={styleFor.languageMenuHorizontal_item}>{languageMenuData.CN}</div>
            </div>
        );
    }
}
