import React from 'react';
import PersonalCabinet from "./PersonalCabinet";
import {connect} from 'react-redux';
import {initPersonalCabinetActionCreator} from "../../redux/personalCabinetReducer";

class PersonalCabinetContainer extends React.Component {
    componentDidMount(){
        this.props.initPersonalCabinet();
    }

    render() {
        return (
            <PersonalCabinet icons={this.props.icons}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        icons: {
            plusIcon: state.personalCabinet.SVGjson.icons.plus,
            transportStickerIcon: state.personalCabinet.SVGjson.icons.transportSticker,
            recipientContactsIcon: state.personalCabinet.SVGjson.icons.recipientContacts,
            deliveryAddressIcon: state.personalCabinet.SVGjson.icons.deliveryAddress,
            paymentCardsIcon: state.personalCabinet.SVGjson.icons.paymentCards,
            profileSettingsIcon: state.personalCabinet.SVGjson.icons.profileSettings,
            markFriendIcon: state.personalCabinet.SVGjson.icons.markFriend,
            printerIcon: state.personalCabinet.SVGjson.icons.printer,
        }
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        initPersonalCabinet: () => {
            dispatch(initPersonalCabinetActionCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinetContainer);