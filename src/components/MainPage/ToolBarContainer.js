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
