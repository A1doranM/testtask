import {
    makeStyles
} from "@material-ui/core";

export const styleForDropDownPage = makeStyles(theme => ({
    DropDownPage: {
        position: 'fixed',
        top: '121px',
        width: '100%',
        height: '161px',
        background: 'black',
    },
    DropDownPage_rectangle: {
        position: 'fixed',
        top: '108px',
        left: '50%',
        width: '26.66px',
        height: '26.66px',
        background: '#FFFFFF',
        transform: 'matrix(0.71, 0.69, -0.73, 0.71, 0, 0)',
    }
}));