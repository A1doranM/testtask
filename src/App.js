import React from 'react';
import './App.css';
import PersonalCabinetContainer from "./components/PersonalCabinet/PersonalCabinetContainer";
import CustomTable from "./components/CustomTable/CustomTable";
import Contacts from "./components/Сontacts/Contacts";
import ToolBarContainer from "./components/Toolbar/ToolBarContainer";
import OperatorCabinetContainer from "./components/OperatorCabinet/OperatorCabinetContainer";

function App() {
    return (
        <div className="App">
            <OperatorCabinetContainer/>
            {/*<PersonalCabinetContainer/>*/}
            {/*<ToolBarContainer scrolledToolbar={false}/>*/}
            {/*<Contacts/>*/}
            {/*<CustomTable/>*/}
        </div>
    );
}

export default App;
