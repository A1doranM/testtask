import React from 'react';
import {connect} from "react-redux";
import CustomTable from "../../CustomTable/CustomTable";

class TableAllTrackersContainer extends React.Component {
    constructor(props){
        super(props);
        this.rows = this.props.rows;
    }

    getTrackerId = (row) => {
        alert(row.id);
    };

    filterUnprocessedProcessedPaidRows = () => {
        switch (this.props.filterUnprocessedProcessedPaidValue) {
            case 'unprocessed':
                return this.rows.filter(row => row.status === 'unprocessed');
            case 'processed':
                return this.rows.filter(row => row.status === 'processed');
            case 'paid':
                return this.rows.filter(row => row.status === 'paid');
            default:
                return this.rows;
        }
    };

    render() {
        return (
            <CustomTable columns={this.props.columns}
                         rows={this.filterUnprocessedProcessedPaidRows()}
                         pageSize={this.props.pageSize}
                         icons={this.props.icons}
                         cellOnClick={this.getTrackerId}
                         sortingException={[
                             {columnName: 'checkbox'},
                             {columnName: 'edit'},
                         ]}
                         defaultSortingColumn={{columnName: 'id', direction: 'asc'}}
                         columnWithMenu={'edit'}
                         columnMenuElem={<div>
                             <div>A</div>
                             <div>B</div>
                             <div>C</div>
                         </div>}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        columns: state.tableAllTrackers.columns,
        rows: state.tableAllTrackers.rows,
        icons: {
            triplePoint: state.tableAllTrackers.SVGjson.icons.triplePoint
        },
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAllTrackersContainer);
