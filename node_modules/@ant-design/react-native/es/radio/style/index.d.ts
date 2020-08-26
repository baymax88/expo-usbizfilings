import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface RadioStyle {
    wrapper: ViewStyle;
    icon: ImageStyle;
    radioItem: ViewStyle;
    radioItemRadio: ViewStyle;
    radioItemContent: TextStyle;
    radioItemContentDisable: TextStyle;
}
declare const _default: (theme: Theme) => RadioStyle;
export default _default;
