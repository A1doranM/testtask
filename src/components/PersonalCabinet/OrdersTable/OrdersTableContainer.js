import React from 'react';
import {connect} from "react-redux";
import OrdersTable from "./OrdersTable";

class OrdersTableContainer extends React.Component {

    render () {
        return (
            <OrdersTable value={this.props.value}
                         index={this.props.index}
                         tableData={this.props.tableData}
                         printerIcon={this.props.printerIcon}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tableData: state.personalCabinet.actualOrdersTableData,
        printerIcon: state.personalCabinet.SVGjson.icons.printer,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTableContainer);
