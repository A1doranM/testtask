import React from 'react';
import {Grid} from "@material-ui/core/es/index";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import {NavLink} from "react-router-dom";
import {filterButtonStyle, styleForOperatorCabinet} from "./OperatorCabinetStyle";
import TableAllTrackersContainer from "../TableAllTrackers/TableAllTrackersContainer";
import ButtonColored from "../Toolbar/CustomButtons/ColoredButton/ButtonColored";


let OperatorCabinet = (props) => {
    let styleFor = styleForOperatorCabinet();
    let filterButton = filterButtonStyle;

    let OperatorCabinetData = {
        operatorInfo: {
            head: {
                unprocessed: {
                    title: 'Unprocessed',
                    count: 21,
                },
                processed: {
                    title: 'Processed',
                    count: 13,
                },
                paid: {
                    title: 'Paid',
                    count: 23,
                },
            },
            trackers: {
                title: 'Trackers',
                archive: 'Archive',
                deleted: 'Deleted',
            },
            filter: 'Filter',
            search: 'Search',
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
                    <Grid item lg={2}>
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
                                            {OperatorCabinetData.operatorInfo.head.unprocessed.title}
                                            <div
                                                className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_number + ' ' + styleFor.unprocessed}>
                                                {OperatorCabinetData.operatorInfo.head.unprocessed.count}
                                            </div>
                                        </li>
                                        <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_item}>
                                            {OperatorCabinetData.operatorInfo.head.processed.title}
                                            <div
                                                className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_number + ' ' + styleFor.processed}>
                                                {OperatorCabinetData.operatorInfo.head.processed.count}
                                            </div>
                                        </li>
                                        <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_item}>
                                            {OperatorCabinetData.operatorInfo.head.paid.title}
                                            <div
                                                className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head_list_number + ' ' + styleFor.paid}>
                                                {OperatorCabinetData.operatorInfo.head.paid.count}
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center}>
                                        <p className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center_title + ' ' + styleFor.mainWrapper_operatorWrapper_operatorInfo_center_title_bottom}>
                                            Session time 14:21
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
                    <Grid item xs={12} lg={10}>
                        <div className={styleFor.mainWrapper_tableControls_filterSearch_padding}>
                            <div className={styleFor.mainWrapper_filterSearch_wrapper}>
                                    <ButtonColored style={filterButton}>{OperatorCabinetData.operatorInfo.filter}
                                        <span dangerouslySetInnerHTML={{__html: props.icons.filter}}/>
                                    </ButtonColored>

                                    <textarea placeholder={OperatorCabinetData.operatorInfo.search}
                                              className={styleFor.contacts_sectionContactWithUs_textarea}/>

                            </div>
                            <div className={styleFor.mainWrapper_tableControls_wrapper}>
                                <div className={styleFor.mainWrapper_tableControls_radioButton}>

                                </div>
                                <div className={styleFor.mainWrapper_tableControls_radioButton}>

                                </div>
                                <div className={styleFor.mainWrapper_tableControls_radioButton}>

                                </div>
                            </div>
                        </div>
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