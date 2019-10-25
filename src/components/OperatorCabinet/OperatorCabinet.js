import React from 'react';
import {Grid} from "@material-ui/core/es/index";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import {NavLink} from "react-router-dom";
import {filterButtonStyle, styleForOperatorCabinet} from "./OperatorCabinetStyle";
import TableAllTrackersContainer from "../TableAllTrackers/TableAllTrackersContainer";
import ButtonColored from "../CustomButtons/ColoredButton/ButtonColored";
import {StyledRadio} from "../CustomButtons/RadioButton/StyledRadio";


let OperatorCabinet = (props) => {
    let styleFor = styleForOperatorCabinet();
    let filterButton = filterButtonStyle;
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

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
                tatalTrackersCount: 'Total trackers count: 2000 '
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
                            <Grid container
                                  spacing={4}>
                                <Grid item lg={2}>
                                    <ButtonColored style={filterButton}>{OperatorCabinetData.operatorInfo.filter}
                                        <span dangerouslySetInnerHTML={{__html: props.icons.filter}}/>
                                    </ButtonColored>
                                </Grid>
                                <Grid item lg={10}>
                                   <textarea placeholder={OperatorCabinetData.operatorInfo.search}
                                             className={styleFor.mainWrapper_tableControls_filterSearch_padding_textarea}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={styleFor.mainWrapper_tableControls_filterSearch_padding}>
                            <Grid container
                                  alignItems={'center'}
                                  spacing={1}>
                                <Grid item>
                                    <StyledRadio checked={selectedValue === 'a'}
                                                 onChange={handleChange}
                                                 style={{color: '#828282'}}
                                                 value="a"
                                                 name="radio-button-demo"
                                                 inputProps={{'aria-label': 'A'}}/>
                                </Grid>
                                <Grid item lg={2}>
                                    <span
                                        className={styleFor.mainWrapper_tableControls_filterSearch_padding_title + ' ' + styleFor.title_unprocessed}>
                                        {OperatorCabinetData.operatorInfo.head.unprocessed.title}
                                    </span>
                                </Grid>
                                <Grid item>
                                    <StyledRadio checked={selectedValue === 'b'}
                                                 onChange={handleChange}
                                                 value="b"
                                                 style={{color: '#27AE60'}}
                                                 name="radio-button-demo"
                                                 inputProps={{'aria-label': 'B'}}/>
                                </Grid>
                                <Grid item lg={2}>
                                    <span
                                        className={styleFor.mainWrapper_tableControls_filterSearch_padding_title + ' ' + styleFor.title_processed}>
                                        {OperatorCabinetData.operatorInfo.head.processed.title}
                                    </span>
                                </Grid>
                                <Grid item>
                                    <StyledRadio checked={selectedValue === 'c'}
                                                 onChange={handleChange}
                                                 value="c"
                                                 style={{color: '#F2994A'}}
                                                 name="radio-button-demo"
                                                 inputProps={{'aria-label': 'C'}}/>
                                </Grid>
                                <Grid item lg={2}>
                                    <span
                                        className={styleFor.mainWrapper_tableControls_filterSearch_padding_title + ' ' + styleFor.title_paid}>
                                        {OperatorCabinetData.operatorInfo.head.paid.title}
                                    </span>
                                </Grid>
                                <Grid item lg={5}
                                      style={{textAlign: 'right'}}>
                                    <span
                                        className={styleFor.mainWrapper_tableControls_filterSearch_padding_title + ' ' + styleFor.title_totalCount}>
                                        {OperatorCabinetData.operatorInfo.head.tatalTrackersCount}
                                    </span>
                                </Grid>
                            </Grid>
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
