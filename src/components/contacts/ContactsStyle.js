import {
    makeStyles
} from "@material-ui/core";

export const styleForAddressList = makeStyles(theme => ({
    addressList: {
        width: '330px',
        height: '240px',
        paddingTop: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '10px',
    },

    addresslist_li: {
        display: 'flex',
        margin: '0px',
        listStyleType: 'none',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '30px',
        '& p': {
            width: '35%',
            margin: '0px',
            color: '#828282',
        },
        '& span': {
            width: '65%',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '30px',
        }
    }
}));

export const styleForContacts = makeStyles(theme => ({
    root: {
        minHeight: '100%',
        boxSizing: 'border-box'
    },

    contacts: {
        marginTop: '70px',
        width: '1170px',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
    },

    contacts_headers: {
        fontWeight: '500',
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

    contacts_sectionWarehouses: {
        width: '100%',
        height: '720px',
        paddingTop: '70px'
    },

    contacts_sectionWarehouses_sectionMaps_item: {
        height: '520px',
        width: '100%',
        background: '#F8FAFB',
    },

    contacts_sectionWarehouses_sectionMaps_item_map: {
        height: '240px',
        width: '100%',
        background: 'black',
        backgroundSize: 'cover',
    },

    contacts_sectionWarehouses_sectionMaps_item_map_image: {
        width: '100%',
        height: '100%',
    },

    contacts_sectionContactWithUs: {
        width: '100%',
        marginBottom: '60px',
        '& h2': {
            marginTop: '0',
        }
    },

    contacts_sectionContactWithUs_input: {
        width: '100%',
        height: '60px',
        ...generalVariablesForContactWithUs
    },

    contacts_sectionContactWithUs_textarea: {
        height: '150px',
        width: '100%',
        paddingTop: '10px',
        ...generalVariablesForContactWithUs
    },

    contacts_sectionContactWithUs_button: {
        height: '50px',
        width: '200px',
    },

    //RESPONSIVE

    [theme.breakpoints.down('md')]: {
        //FOR NAVIGATION
        contacts: {
            width: '970px',
        },
    },

    [theme.breakpoints.down('sm')]: {
        contacts: {
            width: '850px',
        },

        //HEADER
        contacts_headers: {
            textAlign: 'center',
        },

        //WAREHOUSES
        contacts_sectionWarehouses: {
            height: '1800px'
        },

        //CONTACT WITH US
        contacts_sectionContactWithUs: {
            marginTop: '100px',
            marginBottom: '100px',
        }
    },

    '@media(max-width: 900px)': {
        contacts: {
            width: '90vw',
        },
    },

}));

let generalVariablesForContactWithUs = {
    background: '#F8FAFB',
    border: '1px solid #D4DBDC',
    boxSizing: 'border-box',
    borderRadius: '3px',
    padding: '0 34px 0 20px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#BDBDBD',

};