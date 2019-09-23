import React from 'react';
import {styleForSideMenu} from "./SideMenuStyle";
import {Collapse, List, ListItem, ListItemIcon, Typography} from "@material-ui/core/es/index";
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from "@material-ui/icons/esm/ExpandLess";
import ExpandMore from "@material-ui/icons/esm/ExpandMore";
import closeIcon from '../../../assets/images/sideMenu/x.svg';

let SideMenu = (props) => {
    const styleFor = styleForSideMenu();
    const [open, setOpen] = React.useState(true);

    function handleClick() {
        setOpen(!open);
    }

    return (
        <div>
            <div className={styleFor.sideMenu_header}>
                <div className={styleFor.sideMenu_userName}>User name</div>
                <img src={closeIcon}
                     onClick={props.handleDrawerToggle}
                     className={styleFor.sideMenu_close}
                     alt={'user name'}
                />
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClick}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}> SITE MENU </Typography>
                        </ListItemIcon>
                        {open ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>HOME</Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>CONTACTS</Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClick}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}> SITE MENU </Typography>
                        </ListItemIcon>
                        {open ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>HOME</Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>CONTACTS</Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
            <div>
                <List>
                    <ListItem button onClick={handleClick}>
                        <MenuIcon/>
                        <ListItemIcon>
                            <Typography className={styleFor.innerMenu_text}> SITE MENU </Typography>
                        </ListItemIcon>
                        {open ? <ExpandLess className={styleFor.innerMenu_expandMoreIcon}/> :
                            <ExpandMore className={styleFor.innerMenu_expandMoreIcon}/>}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>HOME</Typography>
                            </ListItem>
                            <ListItem button className={styleFor.innerMenu_item}>
                                <Typography className={styleFor.innerMenu_text}>CONTACTS</Typography>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        </div>
    );
};

export default SideMenu;