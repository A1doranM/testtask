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
                    <Grid item xs={2} lg={2}>
                        <div className={styleFor.mainWrapper_operatorWrapper}>
                            <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo}>
                                <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_padding}>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_head}>
                                        <div>
                                            <span dangerouslySetInnerHTML={{__html: props.icons.operator}}/>
                                        </div>
                                        <div>
                                            <p>{props.operatorName}</p>
                                            <p>id <span>{props.operatorID}</span></p>
                                        </div>
                                    </div>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center}></div>
                                    <div className={styleFor.mainWrapper_operatorWrapper_operatorInfo_center_hidden}></div>
                                </div>
                                <ul className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list}>
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item + ' ' + styleFor.list_createTracker}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.plusIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.createTracker}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.transportStickerIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.transportSticker}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.recipientContactsIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.recipientContacts}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.deliveryAddressIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.deliveryAddress}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.paymentCardsIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.paymentCards}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.profileSettingsIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.profileSettings}</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_item}>*/}
                                    {/*    <span dangerouslySetInnerHTML={{__html: props.icons.markFriendIcon}}*/}
                                    {/*          className={styleFor.mainWrapper_operatorWrapper_operatorInfo_list_icon}/>*/}
                                    {/*    <NavLink to={''}>{PersonalCabinetData.operatorInfo.markFriend}</NavLink>*/}
                                    {/*</li>*/}
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