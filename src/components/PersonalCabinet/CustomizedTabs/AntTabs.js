import React from 'react';
import {Tab, Tabs} from "@material-ui/core/es/index";
import {withStyles} from '@material-ui/core/styles';

export const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#F1774F',
    },
})(Tabs);

export const AntTab = withStyles(theme => ({
    root: {
        zIndex: '0',
        height: '60px',
        maxWidth: '100%',
        width: '33.3%',
        textTransform: 'none',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        fontFamily: 'Roboto',
        color: '#0A5E74',
        border: '1px solid #f5f5f5',
    },
    selected: {},
}))(props => <Tab
    disableRipple
    {...props}
    style={(props.width || props.height) ? {width: props.width, height: props.height} : {width: '', height: ''}}
/>);

