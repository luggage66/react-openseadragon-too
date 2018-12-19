import Openseadragon from 'openseadragon';
import * as React from 'react';

Openseadragon();

export interface OpenSeadragonComponentProps {
    url: string;
}

export default class OpenSeadragonComponent extends React.Component<OpenSeadragonComponentProps> {

    public render() {
        return <div>
            Placeholder for {this.props.url}
        </div>;
    }
}
