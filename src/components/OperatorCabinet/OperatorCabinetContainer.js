import React from 'react';
import OperatorCabinet from "./OperatorCabinet";
import {connect} from 'react-redux';

class OperatorCabinetContainer extends React.Component {
    render() {
        return (
            <OperatorCabinet icons={this.props.icons}
                             operatorID={this.props.operatorID}
                             operatorName={this.props.operatorName}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        icons: {
            transportStickerIcon: state.operatorCabinet.SVGjson.icons.transportSticker,
            contactsIcon: state.operatorCabinet.SVGjson.icons.recipientContacts,
            mapIcon: state.operatorCabinet.SVGjson.icons.deliveryAddress,
            FAQIcon: state.operatorCabinet.SVGjson.icons.paymentCards,
            settingsIcon: state.operatorCabinet.SVGjson.icons.profileSettings,
            pen: state.operatorCabinet.SVGjson.icons.pen,
            mail: state.operatorCabinet.SVGjson.icons.mail,
            operator: state.personalCabinet.SVGjson.icons.operator,
            round: state.personalCabinet.SVGjson.icons.round,
            filter: state.personalCabinet.SVGjson.icons.filter,
        },
        operatorID: state.operatorCabinet.operatorID,
        operatorName: state.operatorCabinet.operatorName,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorCabinetContainer);