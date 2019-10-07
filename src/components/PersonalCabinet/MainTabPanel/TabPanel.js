import React from 'react'
import {AntTab, AntTabs} from "../CustomizedTabs/AntTabs";
import {styleForTabPanels} from "./TabPanelStyle";
import ActualOrdersTab from "../ActualOrdersTab/ActualOrdersTab";

let TabPanel = (props) => {
    const [value, setValue] = React.useState(0);

    const styleFor = styleForTabPanels();

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styleFor.tabWrapper}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label={props.tabsContent.actualOrders.title} {...a11yProps(0)}/>
                <AntTab label={props.tabsContent.draft} {...a11yProps(1)}/>
                <AntTab label={props.tabsContent.archive} {...a11yProps(2)}/>
            </AntTabs>
            <ActualOrdersTab data={props.tabsContent.actualOrders} svg={props.svg} value={value} index={0}/>
        </div>
    )
};

export default TabPanel;