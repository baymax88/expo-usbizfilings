import React from 'react';
export default class ToastExample extends React.Component<any, any> {
    timer: any;
    state: {
        enableMask: boolean | undefined;
        enableStack: boolean | undefined;
    };
    componentWillUnmount(): void;
    alwaysShowToast: () => void;
    render(): JSX.Element;
}
