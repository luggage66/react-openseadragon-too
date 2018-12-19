import * as React from 'react';
import OpenSeadragon from '../component';

export default class TestPageView extends React.Component {
    public render() {
        return <div>
            <OpenSeadragon url="https://foo" />
        </div>;
    }
}
