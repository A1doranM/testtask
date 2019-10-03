import React from 'react'
import {
    makeStyles
} from "@material-ui/core";
import {Typography} from "@material-ui/core/es/index";

let OrdersTable = (props) => {
    const {value, index} = props;

    let styleFor = makeStyles(theme => ({
        ordersTable: {
            width: '100%',
            maxWidth: '100%',
            borderCollapse: 'collapse',
            background: 'red',
        }
    }));

    {/*<div*/}
        {/*hidden={value !== index}*/}
        {/*id={`simple-tabpanel-${index}`}*/}
        {/*aria-labelledby={`simple-tab-${index}`}*/}
    {/*>*/}
        {/*<table className="asd">*/}
            {/*<tbody>*/}
            {/*<tr>*/}
                {/*<th>№ Invoice</th>*/}
                {/*<th>Data</th>*/}
                {/*<th>Status</th>*/}
            {/*</tr>*/}
            {/*</tbody>*/}
        {/*</table>*/}
    {/*</div>*/}

    return (
        <table className={styleFor.ordersTable}>
            <tbody>
            <tr>
                <th>№ Invoice</th>
                <th>Data</th>
                <th>Status</th>
            </tr>
            </tbody>
        </table>
    )
};

export default OrdersTable;