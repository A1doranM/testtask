import React from 'react';
import {connect} from "react-redux";
import TableAllTrackers from "./TableAllTrackers";

class TableAllTrackersContainer extends React.Component {

    render () {
        return (
            <TableAllTrackers />
        )
    }
}

let mapStateToProps = (state) => {
    return {
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAllTrackersContainer);
