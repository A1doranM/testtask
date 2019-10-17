import {
    makeStyles
} from "@material-ui/core";

let generalStyleForListItems = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
};

export const styleForOperatorCabinet = makeStyles(theme => ({
    mainWrapper: {
        minWidth: '100%',
        height: '100%',
        boxSizing: 'border-box',
        marginTop: '70px',
    },

    mainWrapper_operatorWrapper: {
        overflowY: 'auto',
        minHeight: '100%',
        background: '#fbfbfb',
        // borderRight: '1px solid #f5f5f5',
        boxShadow: '0px -6px 20px rgba(0, 0, 0, 0.25)',
        padding: '0',
        overflowX: 'hidden,'
    },

    mainWrapper_operatorWrapper_operatorInfo: {},

    mainWrapper_operatorWrapper_operatorInfo_padding: {

    },

    mainWrapper_operatorWrapper_operatorInfo_list: {
        listStyleType: 'none',
        paddingLeft: '0',
        marginTop: '0',
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

    //RESPONSIVE

    [theme.breakpoints.down('md')]: {
        //FOR SIDE MENU
        mainWrapper_operatorWrapper: {
            display: 'none',
        },
    },

}));