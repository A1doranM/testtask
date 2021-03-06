import React from 'react';
import {styleForSideMenu} from "./SideMenuStyle";
import {Collapse, List, ListItem, ListItemIcon, Typography} from '@material-ui/core/es/index';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/esm/ExpandLess';
import ExpandMore from '@material-ui/icons/esm/ExpandMore';
import LanguageMenu from '../LanguageMenu/LanguageMenu';

let SideMenu = (props) => {
    let SideMenuData = {
        userName: 'User Name',
        personalMenu: {
            title: 'PERSONAL CABINET',
            submenu: {
                settings: 'SETTINGS',
                documents: 'DOCUMENTS',
                exit: 'EXIT',
            }
        },
        trackersMenu: {
            title: 'TRACKERS',
            submenu: {
                create_tracker: 'CREATE TRACKER',
                tracker_history: 'TRACKERS HISTORY',
                address_book: 'ADDRESS BOOK',
                messages: 'MESSAGES',
                FAQ: 'FAQ',
            }
        },
        siteMenu: {
            title: 'SITE MENU',
            submenu: {
                home: 'HOME',
                contacts: 'CONTACTS',
                FAQ: 'FAQ',
            }
        }
    };

    const styleFor = styleForSideMenu();
    const [openPersonalMenu, setOpenPersonalMenu] = React.useState(true);
    const [openTrackersMenu, setOpenTrackersMenu] = React.useState(true);
    const [openSiteMenu, setOpenSiteMenu] = React.useState(true);

    function handleClickPersonalMenu() {
        setOpenPersonalMenu(!openPersonalMenu);
    }

    function handleClickTrackersMenu() {
        setOpenTrackersMenu(!openTrackersMenu);
    }

    function handleClickSiteMenu() {
        setOpenSiteMenu(!openSiteMenu);
    }

    return (
        <div>
            <div className={styleFor.sideMenu_header}>
                <div className={styleFor.sideMenu_userName}>{SideMenuData.userName}</div>
                <span dangerouslySetInnerHTML={{__html: props.xIcon}} onClick={props.handleDrawerToggle}/>
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClickPersonalMenu}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}>
                                {SideMenuData.personalMenu.title}
                            </Typography>
                        </ListItemIcon>
                        {openPersonalMenu ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={!openPersonalMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.personalMenu.submenu.settings}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.personalMenu.submenu.documents}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.personalMenu.submenu.exit}
                                </Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClickTrackersMenu}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}>
                                {SideMenuData.trackersMenu.title}
                            </Typography>
                        </ListItemIcon>
                        {openTrackersMenu ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={!openTrackersMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.trackersMenu.submenu.create_tracker}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.trackersMenu.submenu.tracker_history}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.trackersMenu.submenu.address_book}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.trackersMenu.submenu.messages}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.trackersMenu.submenu.FAQ}
                                </Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClickSiteMenu}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}>
                                {SideMenuData.siteMenu.title}
                            </Typography>
                        </ListItemIcon>
                        {openSiteMenu ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={!openSiteMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.siteMenu.submenu.home}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.siteMenu.submenu.FAQ}
                                </Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>
                                    {SideMenuData.siteMenu.submenu.contacts}
                                </Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
            <div className={styleFor.sideMenu_footer}>
                <div className={styleFor.sideMenu_footer_languages}>
                    <LanguageMenu menuStyle={'horizontal'}/>
                </div>
                <div className={styleFor.sideMenu_footer_copyright}>
                    <span dangerouslySetInnerHTML={{__html: props.copyright}}/>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;