import React from 'react'
import {connect} from 'react-redux'
import LanguageMenu from "./LanguageMenu";

class LanguageMenuContainer extends React.Component {

    render() {
        return (
            <LanguageMenu menuStyle={this.props.menuStyle}
                          languageIcon={this.props.languageIcon}
                          arrow={this.props.arrow}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        languageIcon: state.toolBar.SVGjson.icons.language,
        arrow: state.toolBar.SVGjson.icons.arrowLang,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageMenuContainer);
