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
            plusIcon: state.operatorCabinet.SVGjson.icons.plus,
            transportStickerIcon: state.operatorCabinet.SVGjson.icons.transportSticker,
            recipientContactsIcon: state.operatorCabinet.SVGjson.icons.recipientContacts,
            deliveryAddressIcon: state.operatorCabinet.SVGjson.icons.deliveryAddress,
            paymentCardsIcon: state.operatorCabinet.SVGjson.icons.paymentCards,
            profileSettingsIcon: state.operatorCabinet.SVGjson.icons.profileSettings,
            pen: state.operatorCabinet.SVGjson.icons.pen,
            mail: state.operatorCabinet.SVGjson.icons.mail,
            operator: state.personalCabinet.SVGjson.icons.operator,
        },
        operatorID: state.operatorCabinet.operatorID,
        operatorName: state.operatorCabinet.operatorName,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorCabinetContainer);