import React from 'react';
import PersonalCabinet from "./PersonalCabinet";
import {connect} from 'react-redux';
import {initPersonalCabinetActionCreator} from "../../redux/PersonalCabinetReducer";

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
            plusIcon: state.personalCabinet.icons.plus,
            transportStickerIcon: state.personalCabinet.icons.transportSticker,
            recipientContactsIcon: state.personalCabinet.icons.recipientContacts,
            deliveryAddressIcon: state.personalCabinet.icons.deliveryAddress,
            paymentCardsIcon: state.personalCabinet.icons.paymentCards,
            profileSettingsIcon: state.personalCabinet.icons.profileSettings,
            markFriendIcon: state.personalCabinet.icons.markFriend,
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