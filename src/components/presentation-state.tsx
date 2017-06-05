import * as React from 'react';
import '../styles/components/presentation-state.css';

interface PresentationStateState {
    isRed: boolean;
}

class PresentationState extends React.Component<{ }, PresentationStateState> {
    constructor() {
        super();
        this.state = {
            isRed: false
        };
        this.toggleRed = this.toggleRed.bind(this);
    }

    public render() {
        return (
            <div>
                <div className={this.state.isRed ? 'target-box red' : 'target-box'}/>
                <button className="button" onClick={this.toggleRed}>
                    Change color
                </button>
            </div>
        );
    }

    private toggleRed() {
        this.setState({
            isRed: !this.state.isRed
        });
    }
}

export default PresentationState;
