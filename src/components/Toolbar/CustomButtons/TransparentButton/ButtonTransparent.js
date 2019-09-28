import React from 'react';
import {styled} from '@material-ui/styles';
import 'typeface-roboto';
import {CustomButton} from "../GeneralStyleVariables";

const Transparent = styled(CustomButton)({
    background: 'transparent',
    borderRadius: '0.3rem',
    boxShadow: 'inset 0 0',
    '&:hover': {
        boxShadow: 'inset 0 0',
        color: 'white',
        background: 'transparent'
    },
    '@media(max-width: 960px)' : {
        fontSize: '0'
    }
});

let ButtonTransparent = (props) => {
    return (
        <Transparent
            {...props}
            variant="contained"
            type="submit"
        >
            {props.children}
        </Transparent>
    )
};

export default ButtonTransparent;