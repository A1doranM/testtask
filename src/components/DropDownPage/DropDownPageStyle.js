import {
    makeStyles
} from "@material-ui/core";

export const styleForDropDownPage = makeStyles(theme => ({
    DropDownPage: {
        width: '100%',
        height: '100%',
        background: 'white'
    },

    DropDownPage_content: {
        paddingTop: '26px',
        width: '100%',
        height: '91%',
    },

    DropDownPage_rectangle: {
        marginTop: '38px',
        width: '26.66px',
        height: '26.66px',
        // marginTop: '38px',
        background: 'white',
        transform: 'matrix(0.71, 0.69, -0.73, 0.71, 0, 0)',
    },
}));