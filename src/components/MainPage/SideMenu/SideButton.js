import React from 'react'
import {Drawer, Hidden} from "@material-ui/core/es/index";
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from "./SideMenu";
import {
    IconButton
} from "@material-ui/core";
import {styleForSideButton} from "./SideMenuStyle";

let SideButton = (props) => {
    const {container} = props;
    const styleFor = styleForSideButton();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                className={styleFor.menuButton}
            >
                <MenuIcon/>
            </IconButton>
            <nav aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <SideMenu {...props} handleDrawerToggle={handleDrawerToggle}/>
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
};

export default SideButton;