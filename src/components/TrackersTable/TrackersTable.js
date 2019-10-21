import React from 'react'
import CustomTable from "../CustomTable/CustomTable";
import {styleForTableTrackers} from "./TrackersTableStyle";


let TrackersTable = (props) => {

    let styleFor = styleForTableTrackers();

    return (
        <div className={styleFor.root}>
            <div className={styleFor.trackersTable_filter_search_controls_wrapper}>

            </div>
            <div className={styleFor.trackersTable_filter_search_controls_wrapper}>

            </div>
            <CustomTable/>
        </div>
    )
};

export default TrackersTable;