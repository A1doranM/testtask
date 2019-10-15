import React from 'react'
import {
    SortingState,
    IntegratedSorting, PagingState, IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import {withStyles} from "@material-ui/core";

const styles = {
    customCell: {
        whiteSpace: "normal",
        width: 'auto',
        padding: '0'
    }
};

const CustomTableCellBase = ({ classes, ...restProps }) => (
    <Table.Cell className={classes.customCell} {...restProps} />
);

export const CustomTableCell = withStyles(styles)(CustomTableCellBase);

// const CellStyleBody = ({...props}) => (
//     <Table.Cell
//         {...props}
//         style={{
//             width: '300px',
//             color: 'red'
//         }}
//     />
// );
//
// const CellBody = (props) => {
//     return <CellStyleBody {...props} />;
// };

let CustomTable = (props) => {
    const [defaultSorting] = React.useState([
        {columnName: 'id', direction: 'desc'},
    ]);
    const [sortingStateColumnExtensions] = React.useState([
        {columnName: 'checkbox', sortingEnabled: false},
        {columnName: 'edit', sortingEnabled: false},
    ]);
    const [columnWidths, setColumnWidths] = React.useState([
        { columnName: 'name', width: 180 },
        { columnName: 'gender', width: 180 },
        { columnName: 'city', width: 180 },
        { columnName: 'car', width: 240 },
    ]);

    const [columns] = React.useState([
        {name: 'checkbox', title: 'Checkbox'},
        {name: 'id', title: 'ID'},
        {name: 'trackerNumber', title: 'Tracker number'},
        {name: 'creationDate', title: 'Date of creation'},
        {name: 'updateDate', title: 'Date of update'},
        {name: 'clearanceDate', title: 'Clearance date'},
        {name: 'invoiceNumber', title: 'Invoice number'},
        {name: 'deliveryDate', title: 'Delivery date'},
        {name: 'status', title: 'Status'},
        {name: 'carrier', title: 'Carrier'},
        {name: 'containerNumber', title: 'Container number'},
        {name: 'totalWeight', title: 'Total weight'},
        {name: 'volumeWeight', title: 'Volume weight'},
        {name: 'assessedValue', title: 'Assessed value'},
        {name: 'dutySize', title: 'Duty size'},
        {name: 'controlValue', title: 'Control value'},
        {name: 'deliveryRate', title: 'Delivery rate'},
        {name: 'deliveryCurrency', title: 'Delivery currency'},
        {name: 'totalShippingCost', title: 'TotalShippingCost'},
        {name: 'valuationCurrency', title: 'Valuation currency'},
        {name: 'senderPhoneNumber', title: 'Senders phone number'},
        {name: 'senderEmail', title: 'Sender email'},
        {name: 'senderCompanyName', title: 'senderCompanyName'},
        {name: 'senderCountry', title: 'Sender country'},
        {name: 'recipientPhoneNumber', title: 'Recipient phone number'},
        {name: 'recipientEmail', title: 'Recipient email'},
        {name: 'recipientCompanyName', title: 'recipientCompanyName'},
        {name: 'recipientCountry', title: 'Recipient country'},
        {name: 'recipientWorkerFullName', title: 'Full name of recipient worker'},
        {name: 'giveOutWorkerFullName', title: 'Full name of give out worker'},
        {name: 'edit', title: 'Edit'},
    ]);

    // const [rows] = React.useState(props.tableData.map((data) => {
    //         return (
    //             {
    //                 date: data.date,
    //                 invoiceNumber: data.invoiceNumber,
    //                 status: data.status,
    //                 icon: <span dangerouslySetInnerHTML={{__html: props.printerIcon}}/>,
    //             }
    //         )
    //     })
    // );

    const [rows] = React.useState([
            {
                checkbox: '1',
                id: '0',
                trackerNumber: '0',
                creationDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
                updateDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
                clearanceDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
                invoiceNumber: '123',
                deliveryDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
                status: 'asd',
                carrier: 'Maersk',
                containerNumber: '12312412425',
                totalWeight: '444444',
                volumeWeight: '24',
                assessedValue: '12',
                dutySize: '312',
                controlValue: '2123',
                deliveryRate: '124',
                deliveryCurrency: 'qewqq1',
                totalShippingCost: '1232312312312312312312312',
                valuationCurrency: '123123',
                senderPhoneNumber: '+3123123',
                senderEmail: '@@@@@',
                senderCompanyName: 'asdasd',
                senderCountry: 'asdasdaas',
                recipientPhoneNumber: '+3123123',
                recipientEmail: '@@@@@@',
                recipientCompanyName: 'asdasdasdasd',
                recipientCountry: 'asdasdasaaaaaa',
                recipientWorkerFullName: 'rockkkk',
                giveOutWorkerFullName: 'aaasdaweqwqwr',
                edit: 'edit'
            },
            {
                checkbox: '1',
                id: '0',
                trackerNumber: '0',
                creationDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
                updateDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
                clearanceDate: new Date('2018-02-28, 12:06:28').toLocaleString(),
                invoiceNumber: '123',
                deliveryDate: new Date('2018-09-28, 12:06:28').toLocaleString(),
                status: 'asd',
                carrier: 'Maersk',
                containerNumber: '12312412425',
                totalWeight: '444444',
                volumeWeight: '24',
                assessedValue: '12',
                dutySize: '312',
                controlValue: '2123',
                deliveryRate: '124',
                deliveryCurrency: 'qewqq1',
                totalShippingCost: '1232312312312312312312312',
                valuationCurrency: '123123',
                senderPhoneNumber: '+3123123',
                senderEmail: '@@@@@',
                senderCompanyName: 'asdasd',
                senderCountry: 'asdasdaas',
                recipientPhoneNumber: '+3123123',
                recipientEmail: '@@@@@@',
                recipientCompanyName: 'asdasdasdasd',
                recipientCountry: 'asdasdasaaaaaa',
                recipientWorkerFullName: 'rockkkk',
                giveOutWorkerFullName: 'aaasdaweqwqwr',
                edit: 'edit'
            },
            {
                checkbox: '1',
                id: '0',
                trackerNumber: '0',
                creationDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
                updateDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
                clearanceDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
                invoiceNumber: '123',
                deliveryDate: new Date('2018-01-28, 12:06:28').toLocaleString(),
                status: 'asd',
                carrier: 'Maersk',
                containerNumber: '12312412425',
                totalWeight: '444444',
                volumeWeight: '24',
                assessedValue: '12',
                dutySize: '312',
                controlValue: '2123',
                deliveryRate: '124',
                deliveryCurrency: 'qewqq1',
                totalShippingCost: '0',
                valuationCurrency: '123123',
                senderPhoneNumber: '+3123123',
                senderEmail: '@@@@@',
                senderCompanyName: 'asdasd',
                senderCountry: 'asdasdaas',
                recipientPhoneNumber: '+3123123',
                recipientEmail: '@@@@@@',
                recipientCompanyName: 'asdasdasdasd',
                recipientCountry: 'asdasdasaaaaaa',
                recipientWorkerFullName: 'rockkkk',
                giveOutWorkerFullName: 'aaasdaweqwqwr',
                edit: 'edit'
            }
        ]
    );


    return (
        <div>
            <Grid
                rows={rows}
                columns={columns}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={2}
                />
                <SortingState defaultSorting={defaultSorting}
                              columnExtensions={sortingStateColumnExtensions}/>
                <IntegratedSorting/>
                <IntegratedPaging/>
                <Table cellComponent={CustomTableCell}/>
                <TableHeaderRow
                    allowSorting
                    showSortingControls
                    cellComponent={CustomTableCell}
                />
                <PagingPanel/>
            </Grid>
        </div>
    )
};

export default CustomTable;