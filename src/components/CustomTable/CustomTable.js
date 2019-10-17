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

let CustomTable = (props) => {
    const [defaultSorting] = React.useState([
        {columnName: 'id', direction: 'desc'},
    ]);
    const [sortingStateColumnExtensions] = React.useState([
        {columnName: 'checkbox', sortingEnabled: false},
        {columnName: 'edit', sortingEnabled: false},
    ]);

    return (
        <div>
            <Grid
                rows={props.rows}
                columns={props.columns}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={props.pageSize}
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