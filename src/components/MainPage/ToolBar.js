import React, {useState} from 'react';
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
import DropDownPage from "../DropDownPage/DropDownPage";

let ToolBar = (props) => {
    let styleFor = styleForToolbar();
    const [DropDownOpen, setDropDownOpen] = React.useState(false);

    let toggleDropDown = (event) => {
        setDropDownOpen(!DropDownOpen);
    };

    return (
        <AppBar className={props.scrolledToolbar ? styleFor.toolbarScrolled : styleFor.toolbarDefault}>
            <nav className={styleFor.toolbar_navigation}>
                <div className={styleFor.toolbar_logo}><img src={logo} alt={'logo'}/></div>
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
                            <ButtonTransparent onClick={toggleDropDown}>
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
                            <img src={calc} alt={'add'} className={styleFor.toolbar_list_items_Icons}/>
                        </li>
                        <li>
                            <img src={SignInLogIn} alt={'search'} className={styleFor.toolbar_list_items_Icons}/>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_sideMenuButton}>
                    <SideButton/>
                </div>
            </nav>
            {DropDownOpen
                ? <div className={styleFor.toolbar_dropDownPage} onClick={toggleDropDown}>
                    <DropDownPage backg={'red'}/>
                </div>
                : <div className={styleFor.toolbar_dropDownPageClose}/>
            }
        </AppBar>
    )
};

export default ToolBar;