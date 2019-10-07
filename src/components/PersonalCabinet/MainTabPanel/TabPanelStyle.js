import {makeStyles} from "@material-ui/core/styles/index";

export const styleForTabPanels = makeStyles(theme => ({
    tabWrapper: {
        width: '100%',
    },

    tabWrapper_tabContent_scroll: {
        height: 'calc(100vh - 155px)',
        paddingBottom: '140px',
        overflowY: 'auto',
    },

    tabWrapper_tabContent_scroll_title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        padding: '30px',
    }
}));