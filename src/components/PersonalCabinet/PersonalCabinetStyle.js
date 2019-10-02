import {
    makeStyles
} from "@material-ui/core";

import plus from '../../assets/images/personalCabinet/plusIcon.svg';

let generalStyleForListItems = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
};

export const styleForPersonalCabinet = makeStyles(theme => ({
        mainWrapper: {
            minWidth: '100%',
            boxSizing: 'border-box',
            marginTop: '70px',
        },

        mainWrapper_operatorWrapper: {
            overflowY: 'auto',
            height: '100vh',
            background: '#fbfbfb',
            borderRight: '1px solid #f5f5f5',
            padding: '0',
            overflowX: 'hidden,'
        },

        mainWrapper_operatorWrapper_operatorInfo: {},

        mainWrapper_operatorWrapper_operatorInfo_list: {
            listStyleType: 'none',
            paddingLeft: '0',
            paddingRight: 'auto',
            '& :hover': {
                '& svg': {
                    '& path, rect, circle': {
                        stroke: '#0A5E74',
                    },
                }
            }
        },

        mainWrapper_operatorWrapper_operatorInfo_list_item: {
            display: 'flex',
            padding: '22px 0 22px 30px',
            '& a': {
                textDecoration: 'none',
                color: 'black',
                ...generalStyleForListItems,
            },
        },

        mainWrapper_operatorWrapper_operatorInfo_list_icon: {
            marginRight: '20px',
            // '& svg': {
            //     '& path, rect': {
            //         fill: 'red',
            //     },
            // }
        },

        list_createTracker: {
            background: '#F1774F',
            '& a': {
                color: 'white',
                ...generalStyleForListItems,
            }
        },

        mainWrapper_map: {
            background: 'green',
        },

        mainWrapper_history: {
            background: 'yellow',
            height: '100vh',
        },

        mainWrapper_historyWrapper: {},

        mainWrapper_historyWrapper_list: {
            marginTop: '0',
            paddingLeft: '0',
            width: '100%',
            height: '60px',
            background: 'green',
        },

        mainWrapper_historyWrapper_list_item: {
            display: 'inline-block',
            width: '33.3%',
            height: '60px',
            background: 'white',
            textAlign: 'center',
            verticalAlign: 'middle',
            '& a': {
                display: 'inline-block',
                verticalAlign: 'middle',
                color: 'black',
                textDecoration: 'none',
                padding: '20px 30px',
                ...generalStyleForListItems,
            }
        },


    }))
;