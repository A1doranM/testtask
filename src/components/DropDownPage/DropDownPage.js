import React from 'react';
import {styleForDropDownPage} from "./DropDownPageStyle";
import rectangle from '../../assets/images/dropDownPage/rectangle.svg';
import {Popper} from "@material-ui/core/es/index";

let DropDownPage = (props) => {
    let styleFor = styleForDropDownPage();
    let anchorEL = props.anchorEL;

    return (
        <div className={styleFor.DropDownPage}>
            <div className={styleFor.DropDownPage_innerPopper}>
                <Popper
                    id={'rectangle'}
                    open={true}
                    anchorEl={anchorEL}
                >
                    <img src={rectangle}
                         alt={'rectangle'}
                         className={styleFor.DropDownPage_rectangle}
                    />
                </Popper>
            </div>
            <div className={styleFor.DropDownPage_content}>
                {props.children}
            </div>
        </div>
    )
};

export default DropDownPage;