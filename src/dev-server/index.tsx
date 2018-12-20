import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import View from './view';

const reactMountElement = document.createElement('div');
reactMountElement.id = 'appMountLocation';
document.body.appendChild(reactMountElement);
ReactDOM.render(<View />, reactMountElement);
