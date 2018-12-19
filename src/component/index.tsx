import * as React from 'react';

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
