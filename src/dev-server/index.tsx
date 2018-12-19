import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View from './view';

const reactMountElement = document.createElement('div');
document.body.appendChild(reactMountElement);
ReactDOM.render(<View />, reactMountElement);
