import React from 'react';
import {NavLink} from "react-router-dom";
import SideButton from "./SideMenu/SideButton";
import ButtonTransparent from "../CustomButtons/TransparentButton/ButtonTransparent";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {styleForToolbar} from "./ToolBarStyle";
import DropDownPage from "../DropDownPage/DropDownPage";
import LanguageMenuContainer from "./LanguageMenu/LanguageMenuContainer";

let ToolBar = (props) => {

    let toolbarData = {
        navigation: {
            main: 'HOME',
            FAQ: 'FAQ',
            contacts: 'CONTACTS',
        },
        buttonSearchTracker: 'SEARCH TRACKER',
        buttonCreateTracker: 'CREATE TRACKER',
    };


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
                <div className={styleFor.toolbar_logo}><span dangerouslySetInnerHTML={{__html: props.logo}}/></div>
                <div className={styleFor.toolbar_navigation_spacerBetweenLogoNavList}/>
                <div className={styleFor.toolbar_navigation_items}>
                    <ul>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>{toolbarData.navigation.main}</NavLink></li>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>{toolbarData.navigation.FAQ}</NavLink></li>
                        <li><NavLink className={styleFor.toolbar_navigation_items_link} to='/'>{toolbarData.navigation.contacts}</NavLink></li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_navigation_spacerBetweenLogoNavList}/>
                <div className={styleFor.toolbar_trackers_list_items}>
                    <ul>
                        <li>
                            <ButtonTransparent onClick={toggleDropDownPage}>
                                {toolbarData.buttonSearchTracker}
                                <SearchIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                        <li>
                            <ButtonTransparent onClick={toggleDropDownPage}>
                                {toolbarData.buttonCreateTracker}
                                <AddIcon className={styleFor.toolbar_tracker_items_Icons}/>
                            </ButtonTransparent>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_navigation_spacerBetweenListLanguages}/>
                <div className={styleFor.toolbar_langMenu}>
                    <LanguageMenuContainer menuStyle={'drop-down'}/>
                </div>
                <div className={styleFor.toolbar_controls_list_items}>
                    <ul>
                        <li>
                            <span dangerouslySetInnerHTML={{__html: props.calc}} onClick={toggleDropDownPage}/>
                        </li>
                        <li>
                            <span dangerouslySetInnerHTML={{__html: props.signInLogIn}}/>
                        </li>
                    </ul>
                </div>
                <div className={styleFor.toolbar_sideMenuButton}>
                    <SideButton burgerIcon={props.burgerIcon} xIcon={props.xIcon} copyright={props.copyright}/>
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