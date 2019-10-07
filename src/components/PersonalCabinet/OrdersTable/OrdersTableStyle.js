import {
    makeStyles
} from "@material-ui/core";

export const styleForOrdersTable = makeStyles(theme => ({
    ordersTable: {
        width: '100%',
        maxWidth: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        textTransform: 'uppercase',
        textAlign: 'left',
        color: '#828282',
    },

    ordersTable_head: {},

    ordersTable_body: {
        '& tr':{
           height: '50px',
        }
    },

}));