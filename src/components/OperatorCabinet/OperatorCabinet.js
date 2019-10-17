import React from 'react';
import {Grid} from "@material-ui/core/es/index";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import {NavLink} from "react-router-dom";
import {styleForOperatorCabinet} from "./OperatorCabinetStyle";
import TableAllTrackersContainer from "../TableAllTrackers/TableAllTrackersContainer";


let OperatorCabinet = (props) => {
    let styleFor = styleForOperatorCabinet();

    let OperatorCabinetData = {
        operatorInfo: {
            head: {
                unprocessed: 'Unprocessed',
                processed: 'Processed',
                paid: 'Paid',
            },
            trackers: {
                title: 'Trackers',
                archive: 'Archive',
                deleted: 'Deleted',
            },
            messages: 'Messages',
            settings: 'Settings',
            FAQ: 'FAQ',
            map: 'Map',
        },
    };

    return (
        <div className={styleFor.root}>
            <ToolBarContainer scrolledToolbar={false}/>
            <div className={styleFor.mainWrapper}>
                <Grid container
                      spacing={0}>
                    <Grid item xs={2} lg={2}>
                        <div className={styleFor.mainWrapper_operatorWrapper}>
                            <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo}>
                                <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_padding}>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head}>
                                        <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_image}>
                                            <span dangerouslySetInnerHTML={{__html: props.icons.operator}}/>
                                        </div>
                                        <div>
                                            <p className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_name}>{props.operatorName}</p>
                                            <p className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_id}>
                                                id <span>{props.operatorID}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center}>
                                        <p className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center_title}>
                                            User
                                        </p>
                                    </div>
                                    <ul className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list}>
                                        <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_item}>
                                            {OperatorCabinetData.operatorInfo.head.unprocessed}
                                            <span dangerouslySetInnerHTML={{__html: props.icons.round}}></span>
                                        </li>
                                        <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_item}>
                                            {OperatorCabinetData.operatorInfo.head.processed}
                                            <span dangerouslySetInnerHTML={{__html: props.icons.round}}></span>
                                        </li>
                                        <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_item}>
                                            {OperatorCabinetData.operatorInfo.head.paid}
                                            <span dangerouslySetInnerHTML={{__html: props.icons.round}}></span>
                                        </li>
                                    </ul>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center}>
                                        <p className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center_title + ' ' + styleFor.mainWrapper_operatorWrapper_operatorInfo_center_title_bottom}>
                                            Session time  14:21
                                        </p>
                                    </div>
                                </div>
                                <ul className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list}>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.transportStickerIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{OperatorCabinetData.operatorInfo.trackers.title}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.contactsIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{OperatorCabinetData.operatorInfo.messages}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.settingsIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{OperatorCabinetData.operatorInfo.settings}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.FAQIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{OperatorCabinetData.operatorInfo.FAQ}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.mapIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{OperatorCabinetData.operatorInfo.map}</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={10} lg={10}>
                        <div className={styleFor.mainWrapper_trackersTableWrapper}>
                            <TableAllTrackersContainer operatorID={props.operatorID} pageSize={2}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default OperatorCabinet;