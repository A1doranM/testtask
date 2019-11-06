import React from 'react'
import {
    SortingState,
    IntegratedSorting, PagingState, IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
    SelectionState,
    IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
    TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel
} from '@devexpress/dx-react-grid-material-ui';
import {withStyles} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
    customCell: {
        whiteSpace: "normal",
        padding: '0',
        verticalAlign: 'center'
    },
    triplePointButton: {
        marginTop: '16px',
    },
    tooltipWrapper: {
        background: 'red',
    }
};

const CustomTooltip = withStyles(theme => ({
    tooltip: {
        fontFamily: 'Roboto',
        lineHeight: '32px',
        background: '#ffffff',
        border: '4px solid #f7f7f7',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 12,
    },
}))(Tooltip);

let CustomTable = ({columns, rows, defaultSortingColumn = {}, sortingException = [], pageSize = 1, columnMenuElem, cellOnClick = null, icons, columnWithMenu}) => {
    const menuIcon = icons.triplePoint;
    const [defaultSorting] = React.useState(defaultSortingColumn);

    const [sortingStateColumnExtensions] = React.useState(sortingException.map((exception) => {
        return {
            columnName: exception.columnName, sortingEnabled: false
        }
    }));

    const CustomTableCellBase = ({classes, ...restProps}) => {
        if (restProps.column.name === columnWithMenu && columnMenuElem) {
            return (
                <Table.Cell className={classes.customCell} {...restProps} >
                    <CustomTooltip title={columnMenuElem} interactive>
                        <span aria-controls="simple-menu"
                              aria-haspopup="true"
                              dangerouslySetInnerHTML={{__html: menuIcon}}/>
                    </CustomTooltip>
                </Table.Cell>
            )
        }
        return (
            <Table.Cell className={classes.customCell} {...restProps} onClick={() => cellOnClick(restProps.row)}/>
        )
    };

    const CustomHeaderCellBase = ({classes, ...restProps}) => {
        return (
            <Table.Cell className={classes.customCell} {...restProps}/>
        )
    };

    const CustomTableCell = withStyles(styles)(CustomTableCellBase);

    const CustomHeaderCell = withStyles(styles)(CustomHeaderCellBase);

    const CustomTablePagination = props => (
        <PagingPanel.Container {...props} style={{justifyContent: 'center'}}/>
    );

    const [selection, setSelection] = React.useState([]);

    return (
        <div>
            <Grid
                rows={rows}
                columns={columns}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={pageSize}
                />
                <SelectionState
                    selection={selection}
                    onSelectionChange={setSelection}
                />
                <SortingState defaultSorting={[defaultSorting]}
                              columnExtensions={sortingStateColumnExtensions}/>
                <IntegratedSorting/>
                <IntegratedPaging/>
                <IntegratedSelection />
                <Table
                    cellComponent={CustomTableCell}/>
                <TableHeaderRow
                    allowSorting
                    showSortingControls
                    cellComponent={CustomHeaderCell}
                />
                <TableSelection showSelectAll />
                <PagingPanel containerComponent={CustomTablePagination}/>
            </Grid>
        </div>
    )
};

export default CustomTable;