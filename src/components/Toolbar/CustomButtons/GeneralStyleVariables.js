import {styled} from "@material-ui/styles/index";
import Button from "@material-ui/core/Button/index";

export const CustomButton = styled(Button)({
    paddingLeft: '10px',
    paddingRight: '10px',
    color: 'white',
    textAlign: 'center',
    width: 'fit-content',
    height: '35px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    border: '1.8px solid #679BA8',
    boxSizing: 'border-box',
    borderRadius: '3px',
    '@media(max-width: 960px)' : {
        fontSize: '0'
    }
});