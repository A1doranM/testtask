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
        paddingBottom: '20px',
    },

    mainWrapper_operatorWrapper_operatorInfo_head: {
        padding: '15px 30px 20px',
        background: '#eaf0f2',
        display: 'flex',
        verticalAlign: 'middle',
    },

    mainWrapper_operatorWrapper_operatorInfo_head_image: {
        width: '42px',
        height: '42px',
        overflow: 'hidden',
        borderRadius: '50%',
        marginRight: '10px',
        flex: '0 0 auto',
    },

    mainWrapper_operatorWrapper_operatorInfo_head_name: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '24px',
        margin: '0',
    },

    mainWrapper_operatorWrapper_operatorInfo_head_id: {
        margin: '0 0 10px',
    },

    mainWrapper_operatorWrapper_operatorInfo_center: {
        display: 'flex',
        justifyContent: 'center',
    },

    mainWrapper_operatorWrapper_operatorInfo_center_title: {
        display: 'inline-block',
        margin: '0 auto',
        textAlign: 'center',
        color: '#fff',
        borderRadius: '40px',
        backgroundColor: '#f1774f',
        padding: '8px 24px',
        transform: 'translateY(-50%)',
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