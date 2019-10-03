import {
    makeStyles
} from "@material-ui/core";

export const styleForOrdersTable = makeStyles(theme => ({
    ordersTable: {
        width: '100%',
        maxWidth: '100%',
        borderCollapse: 'collapse',
        background: 'red',
    },
}));