import React from 'react';

import {styleForFooter} from "./FooterStyle";
import SVGjson from "../../../json/SVGjson"
import LanguageMenuContainer from "../LanguageMenu/LanguageMenuContainer";

let Footer = (props) => {
    let styleFor = styleForFooter();

    return (
        <footer className={styleFor.footer}>
            <nav className={styleFor.footer_body}>
                {/*!!!!!!!!!!!!!!!!!!!!!!! ПОМЕНЯТЬ ЭТО ГОВНО !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                {/*                                                                       |*/}
                {/*                                                                       V*/}
                <div className={styleFor.footer_logo}><span dangerouslySetInnerHTML={{__html: SVGjson.icons.logo}}/></div>
                <div className={styleFor.footer_body_spacerBetweenLogoLangMenu}/>
                <div className={styleFor.footer_langMenu}>
                    <LanguageMenuContainer menuStyle={'drop-down'}/>
                </div>
            </nav>
        </footer>
    )
};

export default Footer;