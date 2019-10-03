import React from 'react'
import {styleForOrdersTable} from "./OrdersTableStyle";


let OrdersTable = (props) => {
    // const {value, index} = props;

    const styleFor = styleForOrdersTable();


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