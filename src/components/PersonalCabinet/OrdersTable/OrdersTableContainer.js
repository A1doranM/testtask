import React from 'react';
import {connect} from "react-redux";
import OrdersTable from "./OrdersTable";
import {sortByKeyActionCreator} from "../../../redux/PersonalCabinetReducer";

class OrdersTableContainer extends React.Component {

    render () {
        return (
            <OrdersTable value={this.props.value}
                         index={this.props.index}
                         tableData={this.props.tableData}
                         printerIcon={this.props.printerIcon}
                         arrowIcon={this.props.arrowIcon}
                         sortByKey={this.props.sortByKey}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tableData: state.personalCabinet.actualOrdersTableData,
        printerIcon: state.personalCabinet.SVGjson.icons.printer,
        arrowIcon: state.personalCabinet.SVGjson.icons.arrow,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sortByKey: (key) => {
            dispatch(sortByKeyActionCreator(key));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTableContainer);
