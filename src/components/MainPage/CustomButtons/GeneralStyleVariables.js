import {styled} from "@material-ui/styles/index";
import Button from "@material-ui/core/Button/index";

export const GeneralVariables = {
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'width': 'fit-content',
    'height': '35px',
    'color': 'white',
    'fontSize16': '1rem',
    'roboto': 'Roboto, sans-serif',
    'zIndex_0': '0',
    'textAlign': 'center',
    'justifyContent': 'space-between',
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '14px',
    'lineHeight': '15px',
    'textTransform': 'uppercase',
    'border': '1.8px solid #679BA8',
    'boxSizing': 'border-box',
    'borderRadius': '3px',
};

export const CustomButton = styled(Button)({
    paddingLeft: GeneralVariables.paddingLeft,
    paddingRight: GeneralVariables.paddingRight,
    marginRight: GeneralVariables.marginRight,
    color: GeneralVariables.color,
    minWidth: GeneralVariables.minWidth,
    textAlign: GeneralVariables.textAlign,
    width: GeneralVariables.width,
    height: GeneralVariables.height,
    fontFamily: GeneralVariables.fontFamily,
    fontStyle: GeneralVariables.fontStyle,
    fontWeight: GeneralVariables.fontWeight,
    fontSize: GeneralVariables.fontSize,
    lineHeight: GeneralVariables.lineHeight,
    textTransform: GeneralVariables.textTransform,
    border: GeneralVariables.border,
    boxSizing: GeneralVariables.boxSizing,
    borderRadius: GeneralVariables.borderRadius,
    '@media(max-width: 650px)' : {
        fontSize: '0'
    }
});