import * as React from 'react';

interface ActionsState {
    showMessage: boolean
}

class ActionsExample extends React.Component<{ }, ActionsState> {
    constructor() {
        super();
        this.state = {
            showMessage: false
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    public render() {
        return (
            <div>
                <div className="large-example">
                    <button className="button" onClick={this.toggleShow}>
                        Show
                    </button>
                    {this.state.showMessage && (
                        <div className="cool-name">
                            I am here!
                        </div>
                    )}
                    {/*
                    TASKS
                    1. Make the button say 'Show' when showMessage is false and 'Hide' when showMessage is true
                    2. Create an action in your completed books-example Component for the All button and the None button, so the action make all categories false
                    */}
                </div>
            </div>
        );
    }

    private toggleShow() {
        this.setState({
            showMessage: !this.state.showMessage
        });
    }
}

export default ActionsExample;

