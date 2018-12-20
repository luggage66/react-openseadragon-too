import * as Openseadragon from 'openseadragon';
import * as React from 'react';

export interface OpenSeadragonComponentProps {
    className?: string;
    url: string;
    containerStyle?: React.CSSProperties;
}

export default class OpenSeadragonComponent extends React.Component<OpenSeadragonComponentProps> {
    private containerElementRef = React.createRef<HTMLDivElement>();

    public componentDidMount() {
        Openseadragon({
            element: this.containerElementRef.current,
            sequenceMode: true,
            tileSources: [
                this.props.url
            ]
        });
    }

    public render() {
        return <div
            ref={this.containerElementRef}
            className={this.props.className}
            style={this.props.containerStyle}
        />;
    }
}
