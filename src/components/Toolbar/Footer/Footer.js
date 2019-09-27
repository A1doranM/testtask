import React from 'react';
import logo from '../../../assets/images/toolbar/logo.svg';
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import {styleForFooter} from "./FooterStyle";

let Footer = (props) => {
    let styleFor = styleForFooter();

    return (
        <footer className={styleFor.footer}>
            <nav className={styleFor.footer_body}>
                <div className={styleFor.footer_logo}><img src={logo} alt={'logo'}/></div>
                <div className={styleFor.footer_body_spacerBetweenLogoLangMenu}/>
                <div className={styleFor.footer_langMenu}>
                    <LanguageMenu menuStyle={'drop-down'}/>
                </div>
            </nav>
        </footer>
    )
};

export default Footer;