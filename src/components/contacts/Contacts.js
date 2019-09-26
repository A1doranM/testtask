import React from 'react';
import {styleForContacts} from "./ContactsStyle";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import Footer from "../Toolbar/Footer/Footer";
import Grid from "@material-ui/core/Grid";

let Contacts = (props) => {
    let styleFor = styleForContacts();

    let toolbarData = {
        headerStocks: 'OUR STOCKS',
        headerContactUs: 'CONTACT US',
    };

    return (
        <div className={styleFor.contacts}>
            <ToolBarContainer scrolledToolbar={false}/>
            <section className={styleFor.contacts_sectionStocks}>
                <h2 className={styleFor.contacts_headers}>{toolbarData.headerStocks}</h2>
                <Grid container
                      spacing={2}
                      className={styleFor.contacts_sectionStocks_sectionMaps}>
                    <Grid key={1} item>
                        <div className={styleFor.contacts_sectionStocks_sectionMaps_item}>asdasd</div>
                    </Grid>
                    <Grid key={2} item>
                        <div className={styleFor.contacts_sectionStocks_sectionMaps_item}>adasdasd</div>
                    </Grid>
                    <Grid key={3} item>
                        <div className={styleFor.contacts_sectionStocks_sectionMaps_item}>adasdasdasda</div>
                    </Grid>
                </Grid>
            </section>
            <section className={styleFor.contacts_sectionContactWithUs}>
                <h2 className={styleFor.contacts_headers}>{toolbarData.headerContactUs}</h2>
                <div>
                    asd
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default Contacts;