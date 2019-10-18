import React from 'react';
import {styled} from '@material-ui/styles';
import 'typeface-roboto';
import {CustomButton} from "../GeneralStyleVariables";

const LocalVariables = {
    'marginRight': '3px',
    'backgroundColor': '#eca347',
    'borderRadius': '0.3',
    'zIndex_0': '0',
    'padding': '0px 45px',
};

const Colored = styled(CustomButton)({
    background: LocalVariables.backgroundColor,
    borderRadius: `${LocalVariables.borderRadius}rem`,
    padding: LocalVariables.padding,
    borderStyle: 'none',
    '&:hover': {
        backgroundColor: LocalVariables.backgroundColor
    },
});
let ButtonColored = (props) => {
    return (
        <Colored
            variant="contained"
            type={props.type}
            style={props.style}
        >
            {props.children}
        </Colored>
    )
};

export default ButtonColored