import React from 'react'
import {
   AppBar
} from "@material-ui/core";
import LanguageMenu from "./LanguageMenu/LanguageMenu";
import {styleForToolbar} from "./AppBarStyle";
import {NavLink} from "react-router-dom";
import SideButton from "./SideMenu/SideButton";
import ButtonSignUp from "./CustomButtons/ButtonsSignUpLogIn/ButtonSignUp";
import ButtonLogIn from "./CustomButtons/ButtonsSignUpLogIn/ButtonLogIn";


let ToolBar = (props) => {
    const styleFor = styleForToolbar();

    return (
        <AppBar className={styleFor.toolbar}>
            <nav className={styleFor.toolbar_navigation}>
                <div className={styleFor.toolbar_logo}><a href={'/'}> the logo</a></div>
                <div className={styleFor.spacerBetweenLogoNav}/>
                <div className={styleFor.toolbar_navigation_items}>
                    <ul>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>MAIN</NavLink></li>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>CONTACTS</NavLink></li>
                    </ul>
                </div>
                <LanguageMenu/>
                <div className={styleFor.spacerBetweenNavControls}/>
                <div className={styleFor.toolbar_control_items}>
                    <ul>
                        <li>
                            <ButtonSignUp>SIGN UP</ButtonSignUp>
                        </li>
                        <li>
                            <ButtonLogIn>LOG IN</ButtonLogIn>
                        </li>
                    </ul>
                </div>
                <SideButton/>
            </nav>
        </AppBar>
    )
};

export default ToolBar;