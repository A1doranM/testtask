import React from 'react'
import {Drawer, Hidden} from "@material-ui/core/es/index";
import SideMenu from "./SideMenu";

let SideButton = (props) => {
    const {container} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div>
            <span dangerouslySetInnerHTML={{__html: props.burgerIcon}} onClick={handleDrawerToggle}/>
            <nav aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
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