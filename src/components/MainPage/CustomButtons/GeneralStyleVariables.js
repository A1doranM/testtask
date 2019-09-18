import {styled} from "@material-ui/styles/index";
import Button from "@material-ui/core/Button/index";

export const GeneralVariables = {
    'paddingLeft': '20px',
    'paddingRight': '20px',
    'marginRight': '4px',
    'marginLeft': '4px',
    'width': 'fit-content',
    'fontSize': '12px',
    'color': 'white',
    'fontSize16': '1rem',
    'roboto': 'Roboto, sans-serif',
    'zIndex_0': '0',
    'fontWeight': '500',
    'border': '0',
    'lineHeight': '1',
    'fontStyle': 'normal',
    'textAlign': 'center',
    'textTransform': 'uppercase',
};

export const CustomButton = styled(Button)({
    paddingLeft: GeneralVariables.paddingLeft,
    paddingRight: GeneralVariables.paddingRight,
    marginRight: GeneralVariables.marginRight,
    fontFamily: GeneralVariables.roboto,
    fontSize: GeneralVariables.fontSize,
    color: GeneralVariables.color,
    minWidth: GeneralVariables.minWidth,
    fontStyle: GeneralVariables.fontStyle,
    fontWeight: GeneralVariables.fontWeight,
    lineHeight: GeneralVariables.lineHeight,
    textAlign: GeneralVariables.textAlign,
    textTransform: GeneralVariables.textTransform,
});