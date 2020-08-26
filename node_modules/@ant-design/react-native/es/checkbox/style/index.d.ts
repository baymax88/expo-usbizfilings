import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface CheckboxStyle {
    wrapper: ViewStyle;
    icon: TextStyle;
    iconRight: TextStyle;
    agreeItem: ViewStyle;
    agreeItemCheckbox: TextStyle;
    checkboxItemCheckbox: TextStyle;
}
declare const _default: (theme: Theme) => CheckboxStyle;
export default _default;
