import React from 'react'
import {Typography} from "@material-ui/core/es/index";
import {AntTab, AntTabs} from "../AntTabs";
import {styleForActualOrdersTab} from "./ActualOrdersTabStyle";
import OrdersTable from "../../OrdersTable/OrdersTable";

let ActualOrdersTab = (props) => {
    const {value, index, ...other} = props;
    const styleFor = styleForActualOrdersTab();
    const [valueTab, setValueTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            <div className={styleFor.tabWrapper}>
                <div className={styleFor.tabWrapper_title}>
                    {props.data.historyOfOrders}
                </div>
                <div>
                    <AntTabs value={valueTab} onChange={handleChange} aria-label="ant example">
                        <AntTab label={props.data.toReceive} {...a11yProps(0)} width={'50%'} height={'50px'}/>
                        <AntTab label={props.data.toSend} {...a11yProps(1)} width={'50%'} height={'50px'}/>
                    </AntTabs>
                    {/*<OrdersTable value={valueTab} index={0}/>*/}
                </div>
            </div>
        </div>
    );
};

export default ActualOrdersTab;