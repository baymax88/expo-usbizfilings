import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { TagPropsType } from './PropsType';
import { TagStyle } from './style/index';
export interface TagNativeProps extends TagPropsType, WithThemeStyles<TagStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class Tag extends React.Component<TagNativeProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
        onLongPress(): void;
    };
    closeDom: View | null;
    constructor(props: TagNativeProps);
    UNSAFE_componentWillReceiveProps(nextProps: TagNativeProps): void;
    onPress: () => void;
    handleLongPress: () => void;
    onTagClose: () => void;
    onPressIn: (styles: TagStyle) => () => void;
    onPressOut: (styles: TagStyle) => () => void;
    render(): JSX.Element;
}
