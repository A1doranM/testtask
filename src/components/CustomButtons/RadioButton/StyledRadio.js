import {withStyles} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import React from "react";

export const StyledRadio = withStyles({
    root: {
        color: '#828282',
        '&$checked': {
            color: '#828282',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);