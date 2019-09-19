import React from 'react';
import {styled} from '@material-ui/styles';
import 'typeface-roboto';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {CustomButton} from "../GeneralStyleVariables";

const LocalVariables = {
    'marginRight': '3px',
    'backgroundColor': '#eca347',
    'borderRadius': '0.3',
    'zIndex_0': '0',
};

const LogIn = styled(CustomButton)({
    background: LocalVariables.backgroundColor,
    borderRadius: `${LocalVariables.borderRadius}rem`,
    boxShadow: LocalVariables.boxShadow,
    '&:hover': {
        backgroundColor: LocalVariables.backgroundColor
    },
});
let ButtonLogIn = (props) => {
    return (
        <LogIn
            variant="contained"
            type="submit"
        >
            <ExitToAppIcon fontSize='small'/> {props.children}
        </LogIn>
    )
};

export default ButtonLogIn