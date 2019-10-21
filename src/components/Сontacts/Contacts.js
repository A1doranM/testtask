import React from 'react';
import {styleForAddressList, styleForContacts} from "./ContactsStyle";
import ToolBarContainer from "../Toolbar/ToolBarContainer";
import Footer from "../Toolbar/Footer/Footer";
import Grid from "@material-ui/core/Grid";
import ButtonColored from "../CustomButtons/ColoredButton/ButtonColored";
import map_china from '../../assets/images/contacts/map_china.jpg'
import map_usa from '../../assets/images/contacts/map_usa.jpg'
import map_ukraine from '../../assets/images/contacts/map_ukraine.jpg'

let AddressList = (props) => {
    let addressListData = {
        countryTitle: 'Country',
        regionTytle: 'Region',
        cityTitle: 'City',
        streetTitle: 'Street',
        postcodeTitle: 'Postcode',
        phoneTitle: 'Phone number',
        countries: [''],
        regions: [''],
        cities: [''],
        streets: [''],
        postcodes: [''],
        phoneNumbers: [''],

    };

    let styleFor = styleForAddressList();

    return (
        <ul className={styleFor.addressList}>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.countryTitle}</p>
                <span>Ukraine</span>
            </li>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.regionTytle}</p>
                <span>Odessa</span>
            </li>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.cityTitle}</p>
                <span>Chornomorsk</span>
            </li>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.streetTitle}</p>
                <span>Promyslova, 1</span>
            </li>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.postcodeTitle}</p>
                <span>68001</span>
            </li>
            <li className={styleFor.addresslist_li}>
                <p>{addressListData.phoneTitle}</p>
                <span>+38 0994408001</span>
            </li>
        </ul>
    )
};

let Contacts = (props) => {
    let styleFor = styleForContacts();

    let toolbarData = {
        headerWarehouses: 'OUR WAREHOUSES',
        headerContactUs: 'CONTACT US',
    };

    return (
        <div className={styleFor.root}>
            <ToolBarContainer scrolledToolbar={false}/>
            <div className={styleFor.contacts}>
                <section className={styleFor.contacts_sectionWarehouses}>
                    <h2 className={styleFor.contacts_headers}>{toolbarData.headerWarehouses}</h2>
                    <Grid container
                          spacing={5}>
                        <Grid key={1} item xs={12} md={4}>
                            <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item}>
                                <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item_map}
                                        style={{backgroundImage: `url(${map_ukraine})`}}>
                                </div>
                                <AddressList/>
                            </div>
                        </Grid>
                        <Grid key={2} item xs={12} md={4}>
                            <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item}>
                                <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item_map}
                                     style={{backgroundImage: `url(${map_usa})`}}>
                                </div>
                                <AddressList/>
                            </div>
                        </Grid>
                        <Grid key={3} item xs={12} md={4}>
                            <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item}>
                                <div className={styleFor.contacts_sectionWarehouses_sectionMaps_item_map}
                                     style={{backgroundImage: `url(${map_china})`}}>
                                </div>
                                <AddressList/>
                            </div>
                        </Grid>
                    </Grid>
                </section>
                {/*TODO: WRITE WITH REDUX-FORM!!!*/}
                <section className={styleFor.contacts_sectionContactWithUs}>
                    <h2 className={styleFor.contacts_headers}>{toolbarData.headerContactUs}</h2>
                    <Grid container
                          spacing={5}
                    >
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <input placeholder={'Name'}
                                           className={styleFor.contacts_sectionContactWithUs_input}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <input placeholder={'Email'}
                                           className={styleFor.contacts_sectionContactWithUs_input}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <input placeholder={'Subject'}
                                           className={styleFor.contacts_sectionContactWithUs_input}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <textarea placeholder={'Your message'}
                                              className={styleFor.contacts_sectionContactWithUs_textarea}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonColored type={'submit'} style={{
                                        height: '60px',
                                        borderStyle: 'none',
                                    }}>
                                        Send</ButtonColored>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Contacts;