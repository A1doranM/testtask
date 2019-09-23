import React from 'react';
import {styleForDropDownPage} from "./DropDownPageStyle";
import rectangle from '../../assets/images/dropDownPage/rectangle.svg';

let DropDownPage = (props) =>{

    let styleFor = styleForDropDownPage(props.backg);

    return (
        <div className={styleFor.DropDownPage}>
            <span>
                <img src={rectangle}
                     alt={'rectangle'}
                     className={styleFor.DropDownPage_rectangle}
                />
            </span>
        </div>
    )
};

export default DropDownPage;