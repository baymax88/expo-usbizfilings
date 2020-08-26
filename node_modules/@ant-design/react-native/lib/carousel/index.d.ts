import ViewPager from '@react-native-community/viewpager';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import CarouselStyles, { CarouselStyle } from './style/index';
export interface CarouselPropsType extends WithThemeStyles<CarouselStyle> {
    selectedIndex?: number;
    dots?: boolean;
    vertical?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    infinite?: boolean;
}
export interface CarouselProps extends CarouselPropsType {
    style?: StyleProp<ViewStyle>;
    dotStyle?: StyleProp<ViewStyle>;
    dotActiveStyle?: StyleProp<ViewStyle>;
    pagination?: (props: PaginationProps) => React.ReactNode;
    afterChange?: (index: number) => void;
}
export interface CarouselState {
    selectedIndex: number;
    isScrolling: boolean;
}
export interface PaginationProps {
    vertical?: boolean;
    current: number;
    count: number;
    styles: ReturnType<typeof CarouselStyles>;
    dotStyle?: StyleProp<ViewStyle>;
    dotActiveStyle?: StyleProp<ViewStyle>;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    static defaultProps: CarouselProps;
    viewPager: React.RefObject<typeof ViewPager>;
    private autoplayTimer;
    constructor(props: CarouselProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: CarouselProps): void;
    /**
     * go to index
     * @param index
     */
    goTo(index: number): void;
    render(): JSX.Element;
    private getChildrenCount;
    private autoplay;
    private renderDots;
}
export default Carousel;
