import React from 'react'
import {Drawer, Hidden} from "@material-ui/core/es/index";
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from "./SideMenu";
import {
    IconButton, makeStyles
} from "@material-ui/core";

let styleForSideButton = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

let SideButton = (props) => {
    const {container} = props;
    const classes = styleForSideButton();
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
                className={classes.menuButton}
            >
                <MenuIcon/>
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
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