import {
    makeStyles
} from "@material-ui/core";

export const styleForContacts = makeStyles(theme => ({
    contacts: {
        marginTop: '120px',
        width: '1440px',
        height: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        background: 'gray',
    },

    contacts_sectionStocks: {
        width: '100%',
        height: '875px',
        background: 'green',
        paddingTop: '100px',
    },

    contacts_sectionContactWithUs: {
        width: '100%',
        height: '550px',
        background: 'red',
        paddingTop: '100px'
    },

    contacts_headers: {
        fontWeight: 500,
        fontSize: '42px',
        lineHeight: '49px',
        textTransform: 'uppercase',
        color: '#0A5E74',
        width: '100%',
    },

    contacts_footer: {
        width: '100%',
        height: '100px',
    },

    contacts_sectionStocks_sectionMaps: {
        width: '1170px',
        height: 'fit-content',
    },
    contacts_sectionStocks_sectionMaps_item: {
        width: '390px',
        height: '520px',
        background: 'yellow',
    }
}));
