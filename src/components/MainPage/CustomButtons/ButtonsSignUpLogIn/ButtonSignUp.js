import React from 'react';
import {styled} from '@material-ui/styles';
import 'typeface-roboto';
import {CustomButton} from "../GeneralStyleVariables";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const LocalVariables = {
    'marginRight': '3px',
    'backgroundColor': 'transparent',
    'borderRadius': '0.3',
    'boxShadow': 'inset 0 0 0 1px white',
    'zIndex_0': '0',
};

const SignUp = styled(CustomButton)({
    background: LocalVariables.backgroundColor,
    borderRadius: `${LocalVariables.borderRadius}rem`,
    boxShadow: LocalVariables.boxShadow,
    '&:hover': {
        boxShadow: LocalVariables.boxShadow,
        background: 'transparent'
    },
});

let ButtonSignUp = (props) => {
    return (
        <SignUp
            variant="contained"
            type="submit"
        >
            <PersonAddIcon fontSize='small'/> {props.children}
        </SignUp>
    )
};

export default ButtonSignUp;