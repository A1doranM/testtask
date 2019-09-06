import {connect} from "react-redux";
import React from "react";
import Menu from "./Menu";
import {
    getMenuDataActionCreator,
    setCurrentLanguageActionCreator} from "../../../redux/menuReducer";

class MenuContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(getMenuDataActionCreator());
    }

    render() {
        return (
            <Menu logo={this.props.logo}
                  nav={this.props.nav}
                  signUpButton={this.props.signUpButton}
                  logInButton={this.props.logInButton}
                  langMenu={this.props.langMenu}
                  currentLanguage={this.props.currentLanguage}
                  setCurrentLanguage={this.props.setCurrentLanguage}
                  dispatch={this.props.dispatch}
                  />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        logo: state.menuPage.logo,
        nav: state.menuPage.nav,
        langMenu: state.menuPage.langMenu,
        signUpButton: state.menuPage.signUpButton,
        logInButton: state.menuPage.logInButton,
        currentLanguage: state.menuPage.currentLanguage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getMenuData: getMenuDataActionCreator,
        setCurrentLanguage: setCurrentLanguageActionCreator,
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);