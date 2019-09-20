import React from 'react';
import {styled} from '@material-ui/styles';
import 'typeface-roboto';
import {CustomButton} from "../GeneralStyleVariables";

const LocalVariables = {
    'marginRight': '3px',
    'backgroundColor': 'transparent',
    'borderRadius': '0.3',
    'boxShadow': 'inset 0 0',
    'zIndex_0': '0',
    'color': 'white'
};

const Transparent = styled(CustomButton)({
    background: LocalVariables.backgroundColor,
    borderRadius: `${LocalVariables.borderRadius}rem`,
    boxShadow: LocalVariables.boxShadow,
    color: LocalVariables.color,
    '&:hover': {
        boxShadow: LocalVariables.boxShadow,
        color: 'white',
        background: 'transparent'
    },
});

let ButtonTransparent = (props) => {
    return (
        <Transparent
            variant="contained"
            type="submit"
        >
            {props.children}
        </Transparent>
    )
};

export default ButtonTransparent;