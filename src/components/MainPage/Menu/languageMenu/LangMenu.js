import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/index";

const useStyles = makeStyles(theme => ({
    menu:{
        marginTop: '40px',
    },
    menuItem:{
        width: '75px'
    }
}));

export default function LanguageMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = React.useState(false);
    const classes = useStyles();

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(e) {
        if (e.target.value !== undefined) {
            props.dispatch(props.setCurrentLanguage(e.target.value));
            setAnchorEl(null);
        }
    }

    function closeMenu(e) {
        if(isOpen){
            setAnchorEl(null);
        }
    }

    let languages = props.languages.submenu.map((language) => {
        return <MenuItem key={language.id}
                         onClick={handleClose}
                         value={language.id}
                         className={classes.menuItem}
        >{language.title}</MenuItem>
    });

    return (
        <div className={classes.menu_wrapper}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <LanguageIcon color='action' className='langIcon'/>
                {props.currentLanguage}
                <ExpandMoreIcon color='action' fontSize='small'/>
            </Button>
            <Menu
                id="simple-menu"
                className={classes.menu}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {languages}
            </Menu>
        </div>
    );
}