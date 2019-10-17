import React from 'react';
import {connect} from "react-redux";
import CustomTable from "../CustomTable/CustomTable";

class TableAllTrackersContainer extends React.Component {
    render() {
        return (
            <CustomTable columns={this.props.columns}
                         rows={this.props.rows}
                         pageSize={this.props.pageSize}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        columns: state.tableAllTrackers.columns,
        rows: state.tableAllTrackers.rows,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAllTrackersContainer);
