import React from 'react'
import {
    SortingState,
    IntegratedSorting, PagingState, IntegratedPaging, SelectionState,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import {withStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
    customCell: {
        whiteSpace: "normal",
        padding: '0',
        verticalAlign: 'center'
    },
    triplePointButton: {
        marginTop: '16px',
    }
};

let CustomTable = (props) => {
    const triplePoint = props.icons.triplePoint;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [defaultSorting] = React.useState([
        {columnName: 'id', direction: 'desc'},
    ]);

    const [sortingStateColumnExtensions] = React.useState([
        {columnName: 'checkbox', sortingEnabled: false},
        {columnName: 'edit', sortingEnabled: false},
    ]);

    const CustomTableCellBase = ({classes, ...restProps}) => {
        if (restProps.column.name === 'edit') {
            return (
                <Table.Cell className={classes.customCell} {...restProps} >
                    <span aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                          dangerouslySetInnerHTML={{__html: triplePoint}}/>
                </Table.Cell>
            )
        }
        return (
            <Table.Cell className={classes.customCell} {...restProps} onClick={() => alert(restProps.row.id)}/>
        )
    };

    const CustomHeaderCellBase = ({classes, ...restProps}) => {
        return (
            <Table.Cell className={classes.customCell} {...restProps}/>
        )
    };

    const CustomTableCell = withStyles(styles)(CustomTableCellBase);

    const CustomHeaderCell = withStyles(styles)(CustomHeaderCellBase);

    const tableHeaderCell = (props) => {
        const {column} = props;
        return column.name === 'edit' ? (
            <TableHeaderRow.Cell className={styles.customCell} {...props}/>
        ) : (
            <TableHeaderRow.Cell className={styles.customCell} {...props}/>
        )
    };

    const TableRow = ({row, ...restProps}) => (
        <Table.Row
            {...restProps}
            onClick={() => alert(row.id)}
        />
    );

    const CustomTablePagination = props => (
        <PagingPanel.Container {...props} style={{justifyContent: 'center'}}/>
    );

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
                <Table
                       cellComponent={CustomTableCell}/>
                <TableHeaderRow
                    allowSorting
                    showSortingControls
                    cellComponent={CustomHeaderCell}
                />
                <PagingPanel containerComponent={CustomTablePagination}/>
            </Grid>
        </div>
    )
};

export default CustomTable;