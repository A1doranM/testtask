import React from 'react';
import {styleForPersonalCabinet} from "./PersonalCabinetStyle";
import {Grid} from "@material-ui/core/es/index";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import {NavLink} from "react-router-dom";
import TabPanel from "./MainTabPanel/TabPanel";


let PersonalCabinet = (props) => {
    let styleFor = styleForPersonalCabinet();

    let PersonalCabinetData = {
        operatorInfo: {
            createTracker: 'Create tracker',
            transportSticker: 'Transport sticker',
            recipientContacts: 'Recipient contacts',
            deliveryAddress: 'Delivery address',
            paymentCards: 'Payment cards',
            profileSettings: 'Profile settings',
            markFriend: 'Mark friend',
        },
        historyInfo: {
            actualOrders: {
                title: 'Actual orders',
                historyOfOrders: 'History of orders',
                toSend: 'To send',
                toReceive: 'To receive',
            },
            draft: 'Draft',
            archive: 'Archive',
        }
    };

    return (
        <div className={styleFor.root}>
            <ToolBarContainer scrolledToolbar={false}/>
            <div className={styleFor.mainWrapper}>
                <Grid container
                      spacing={0}>
                    <Grid item xs={12} lg={2}>
                        <div className={styleFor.mainWrapper_operatorWrapper}>
                            <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo}>
                                <ul className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list}>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item + ' ' + styleFor.list_createTracker}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.plusIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.createTracker}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.transportStickerIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.transportSticker}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.recipientContactsIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.recipientContacts}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.deliveryAddressIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.deliveryAddress}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.paymentCardsIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.paymentCards}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.profileSettingsIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.profileSettings}</NavLink>
                                    </li>
                                    <li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>
                                        <span dangerouslySetInnerHTML={{__html: props.icons.markFriendIcon}}
                                              className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>
                                        <NavLink to={''}>{PersonalCabinetData.operatorInfo.markFriend}</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className={styleFor.mainWrapper_map}>
                          MAP
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <div className={styleFor.mainWrapper_history}>
                            <div className={styleFor.mainWrapper_history_navs}>
                                <TabPanel tabsContent={PersonalCabinetData.historyInfo} svg={props.icons.printer}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default PersonalCabinet;