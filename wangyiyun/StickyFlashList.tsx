/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import {
    AnimatedFlashList, FlashListProps, FlashList,
} from '@shopify/flash-list';
import React, { useState } from 'react';
import {
    Animated,
    LayoutChangeEvent,
    StyleProp,
    ViewStyle,
} from 'react-native';

const scrollAnimVal = new Animated.Value(0);

export interface IStickyHeaderProps {
    onScroll?: (offsetY: number) => void;
    offset?: number;
    style: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface IStickyListProps<T> extends Omit<FlashListProps<T>, 'onScroll'> {
    onScroll?: (offsetY: number) => void;
    listRef: React.LegacyRef<FlashList<T>>;
}

const StickyHeader: React.FC<IStickyHeaderProps> = ({
    children, style, offset, onScroll
}) => {
    const [stickyLayoutY, setStickyLayoutY] = useState<number>(2);

    const onLayout = (event: LayoutChangeEvent) => {        
        const offsetY = event.nativeEvent.layout.y;
        console.info('test zyx StickyHeader onlayout offsetY:', offsetY)
        onScroll?.(offsetY);
        setStickyLayoutY(offsetY);
    };

    const stickyOffsetY = offset || stickyLayoutY || 1;

    const translateY = scrollAnimVal.interpolate({
        inputRange: [-1, 0, 1, stickyOffsetY, stickyOffsetY + 1],
        outputRange: [0, 0, 0, 0, 1],
    });

    return (
        <Animated.View onLayout={onLayout} style={[style, { transform: [{ translateY }] }]}>
            {children}
        </Animated.View>
    );
};

class StickyFlashList<T> extends React.Component<IStickyListProps<T>> {
    listenScrollYId = '';

    static scrollAnimVal: Animated.Value;

    static StickyHeader: React.FC<IStickyHeaderProps>;

    componentDidMount(): void {
        const { onScroll } = this.props;
        this.listenScrollYId = scrollAnimVal.addListener(({ value }) => {
            console.info('test zyx StickyFlashList componentDidMount value', value);
            onScroll?.(value);
        });
        // console.info('test zyx StickyFlashList componentDidMount listenScrollYId', this.listenScrollYId);
    }

    componentWillUnmount(): void {
        // console.info('test zyx StickyFlashList componentWillUnmount this.listenScrollYId', this.listenScrollYId);
        if (this.listenScrollYId) {
            scrollAnimVal.removeListener(this.listenScrollYId);
        }
    }

    render(): JSX.Element {
        const { onScroll, ...props } = this.props;

        return (
            <AnimatedFlashList
                ref={this.props.listRef}
                horizontal={false}
                estimatedItemSize={60}
                ListHeaderComponentStyle={{
                    position: 'relative',
                    zIndex: 2,
                }}
                {...props}
                // onScroll={Animated.event(
                //     [
                //         {
                //             nativeEvent: { contentOffset: { y: scrollAnimVal } },
                //         },
                //     ],
                //     { useNativeDriver: true }
                // )}
                onScroll={
                    Animated.event(
                        [
                            {
                                nativeEvent: { contentOffset: { y: scrollAnimVal } },
                                // console.info('test zyx StickyFlashList onScroll Offset.y', scrollAnimVal)
                            },
                        ],
                        { useNativeDriver: true }
                    )
                //     ||(e:any)=>{
                //     const _contentOffsetY = e.nativeEvent.contentOffset.y;
                //     console.info('test zyx StickyFlashList onScroll Offset.y', _contentOffsetY);
                // }
                }
                
                />
        );
    }
}

StickyFlashList.scrollAnimVal = scrollAnimVal;
StickyFlashList.StickyHeader = StickyHeader;

export default StickyFlashList;
