import React from 'react';
import './App.css';
import PersonalCabinetContainer from "./components/PersonalCabinet/PersonalCabinetContainer";
import CustomTable from "./components/CustomTable/CustomTable";
import Contacts from "./components/Сontacts/Contacts";
import ToolBarContainer from "./components/Toolbar/ToolBarContainer";

function App() {
    return (
        <div className="App">
            {/*<PersonalCabinetContainer/>*/}
            {/*<ToolBarContainer scrolledToolbar={false}/>*/}
            <Contacts/>
            {/*<CustomTable/>*/}
        </div>
    );
}

export default App;
