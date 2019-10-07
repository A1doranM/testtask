import React from 'react'
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

let OrdersTable = (props) => {
    const {value, index} = props;

    const [defaultSorting] = React.useState([
        {columnName: 'date', direction: 'desc'},
    ]);

    const [sortingStateColumnExtensions] = React.useState([
        {columnName: 'icon', sortingEnabled: false},
    ]);

    const [columns] = React.useState([
        {name: 'date', title: 'Date'},
        {name: 'invoiceNumber', title: '№ Invoice'},
        {name: 'status', title: 'Status'},
        {name: 'icon', title: 'icon'},
    ]);

    const [rows] = React.useState(props.tableData.map((data) => {
            return (
                {
                    date: data.date,
                    invoiceNumber: data.invoiceNumber,
                    status: data.status,
                    icon: <span dangerouslySetInnerHTML={{__html: props.printerIcon}}/>,
                }
            )
        })
    );

    return (
        <div
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            <Grid
                rows={rows}
                columns={columns}
            >
                <SortingState defaultSorting={defaultSorting}
                              columnExtensions={sortingStateColumnExtensions}/>
                <IntegratedSorting/>
                <Table/>
                <TableHeaderRow
                    allowSorting
                    showSortingControls
                />
            </Grid>
        </div>
    )
};

export default OrdersTable;