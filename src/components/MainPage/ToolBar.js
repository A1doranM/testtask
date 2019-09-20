import React from 'react'
import {
    AppBar
} from "@material-ui/core";
import LanguageMenu from "./LanguageMenu/LanguageMenu";
import {NavLink} from "react-router-dom";
import SideButton from "./SideMenu/SideButton";
import ButtonTransparent from "./CustomButtons/TransparentButton/ButtonTransparent";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import calc from '../../assets/images/toolbar/calc.svg';
import logo from '../../assets/images/toolbar/logo.svg';
import SignInLogIn from '../../assets/images/toolbar/SignInLogIn.svg';
import {styleForToolbar} from "./ToolBarStyle";

let ToolBar = (props) => {
    const styleFor = styleForToolbar();

    return (
        <AppBar className={styleFor.toolbar}>
            <nav className={styleFor.toolbar_navigation}>
                <div className={styleFor.toolbar_logo}><img src={logo}/></div>
                <div className={styleFor.toolbar_navigation_spacerBetweenLogoNavList}/>
                <div className={styleFor.toolbar_navigation_items}>
                    <ul>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>MAIN</NavLink></li>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>FAQ</NavLink></li>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>CONTACTS</NavLink></li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_navigation_spacerBetweenLogoNavList}/>
                <div className={styleFor.toolbar_list_items}>
                    <ul>
                        <li>
                            <ButtonTransparent>
                                SEARCH TRACKER
                                <SearchIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                        <li>
                            <ButtonTransparent>
                                CREATE TRACKER
                                <AddIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_navigation_spacerBetweenListLanguages}/>
                <div className={styleFor.toolbar_langMenu}>
                    <LanguageMenu/>
                </div>
                <div className={styleFor.toolbar_list_items}>
                    <ul>
                        <li>
                            <img src={calc} className={styleFor.toolbar_list_items_Icons}/>
                        </li>
                        <li>
                            <img src={SignInLogIn} className={styleFor.toolbar_list_items_Icons}/>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_sideMenuButton}>
                    <SideButton/>
                </div>
            </nav>
        </AppBar>
    )
};

export default ToolBar;