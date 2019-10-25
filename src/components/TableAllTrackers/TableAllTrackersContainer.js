import React from 'react';
import {connect} from "react-redux";
import CustomTable from "../CustomTable/CustomTable";
import {Redirect} from "react-router-dom";

class TableAllTrackersContainer extends React.Component {

    redirectToTrackerPage = (row) => {
        alert(row.id);
        // return <Redirect to={'/tracker/' + row.id}  />
    };

    render() {
        return (
            <CustomTable columns={this.props.columns}
                         rows={this.props.rows}
                         pageSize={this.props.pageSize}
                         icons={this.props.icons}
                         onClickRowListener={this.redirectToTrackerPage}/>
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
