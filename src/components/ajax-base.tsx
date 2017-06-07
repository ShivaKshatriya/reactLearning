import * as React from 'react';

export type AjaxProps = {
    url: string;
    method: string;
};

export type AjaxState = {
    success: boolean;
};

abstract class  AjaxXhr extends React.Component<AjaxProps, AjaxState> {
    public constructor() {
        super();
        this.state = {
            success: true
        };
        this.loadAjax = this.loadAjax.bind(this);
    }

    public render() {
        return (
            <button className={this.state.success ? 'button' : 'button error'} onClick={this.loadAjax}>
                Load Ajax
            </button>
        );
    }

    abstract loadAjax(): void
}

export default AjaxXhr;