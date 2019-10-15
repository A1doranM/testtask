import React from 'react'
import ToolBar from "./ToolBar";
import {connect} from 'react-redux'
import {initToolBarThunkCreator, switchCurrentLanguageThunkCreator} from "../../redux/toolBarReducer";

class ToolBarContainer extends React.Component {

    componentDidMount() {
        this.props.initToolBar();
    }

    render() {
        return (
            <ToolBar currentLanguage={this.props.currentLanguage}
                     nav={this.props.nav}
                     langMenu={this.props.langMenu}
                     signUpButton={this.props.signUpButton}
                     logInButton={this.props.logInButton}
                     switchCurrentLanguage={this.props.switchCurrentLanguage}
                     scrolledToolbar={this.props.scrolledToolbar}
                     logo={this.props.logo}
                     calc={this.props.calc}
                     signInLogIn={this.props.signInLogIn}
                     burgerIcon={this.props.burgerIcon}
                     personalCabinetIcon={this.props.personalCabinetIcon}
                     sideMenuIcon={this.props.sideMenuIcon}
                     trackersIcon={this.props.trackersIcon}
                     xIcon={this.props.xIcon}
                     copyright={this.props.copyright}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentLanguage: state.toolBar.currentLanguage,
        nav: state.toolBar.nav,
        langMenu: state.toolBar.langMenu,
        signUpButton: state.signUpButton,
        logInButton: state.logInButton,
        logo: state.toolBar.SVGjson.icons.logo,
        calc: state.toolBar.SVGjson.icons.calc,
        signInLogIn: state.toolBar.SVGjson.icons.signInLogIn,
        burgerIcon: state.toolBar.SVGjson.icons.burger,
        personalCabinetIcon: state.toolBar.SVGjson.icons.personalCabinet,
        sideMenuIcon: state.toolBar.SVGjson.icons.sideMenu,
        trackersIcon: state.toolBar.SVGjson.icons.trackers,
        xIcon: state.toolBar.SVGjson.icons.x,
        copyright: state.toolBar.SVGjson.icons.copyright,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initToolBar: () => {
            dispatch(initToolBarThunkCreator());
        },
        switchCurrentLanguage: () => {
            dispatch(switchCurrentLanguageThunkCreator());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolBarContainer);
