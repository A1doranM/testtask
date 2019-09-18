import React from 'react'
import ToolBar from "./AppBar";
import {connect} from 'react-redux'

class AppBarContainer extends React.Component{
    componentDidMount(){

    }

    render(){
        return(
            <ToolBar />
        )
    }
}

export default connect()(AppBarContainer);
