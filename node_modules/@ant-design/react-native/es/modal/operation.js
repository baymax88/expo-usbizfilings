import React from 'react';
import Portal from '../portal';
import OperationContainer from './OperationContainer';
export default function a(actions, onBackHandler) {
    var key = Portal.add(React.createElement(OperationContainer, { actions: actions.length > 0 ? actions : [{ text: '确定' }], onAnimationEnd: function onAnimationEnd(visible) {
            if (!visible) {
                Portal.remove(key);
            }
        }, onBackHandler: onBackHandler }));
    return key;
}