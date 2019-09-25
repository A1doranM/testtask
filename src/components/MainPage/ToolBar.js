import React from 'react';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dropDownPage = React.createRef();
    const [open, setOpen] = React.useState(false);

    const toggleDropDownPage = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const closeDropDownPage = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    return (
        <div className={props.scrolledToolbar ? styleFor.toolbarScrolled : styleFor.toolbarDefault}>
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
                <div className={styleFor.toolbar_trackers_list_items}>
                    <ul>
                        <li>
                            <ButtonTransparent onClick={toggleDropDownPage}>
                                SEARCH TRACKER
                                <SearchIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                        <li>
                            <ButtonTransparent onClick={toggleDropDownPage}>
                                CREATE TRACKER
                                <AddIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_navigation_spacerBetweenListLanguages}/>
                <div className={styleFor.toolbar_langMenu}>
                    <LanguageMenu menuStyle={'drop-down'}/>
                </div>
                <div className={styleFor.toolbar_controls_list_items}>
                    <ul>
                        <li>
                            <img src={calc} alt={'add'} className={styleFor.toolbar_list_items_Icons} onClick={toggleDropDownPage}/>
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
            {!open
                ? <div style={{display: 'none'}}/>
                : <div ref={dropDownPage} className={styleFor.toolbar_dropDownPage} onClick={closeDropDownPage}>
                    <DropDownPage anchorEL={anchorEl}/>
                </div>
            }
        </div>
    )
};

export default ToolBar;