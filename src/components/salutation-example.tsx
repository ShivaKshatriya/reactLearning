import * as React from 'react';
import '../styles/components/salutation-example.css';

class SalutationExample extends React.Component<{}, { name: string }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Juan' as string
    };
    this.updateName = this.updateName.bind(this);
  }

  public render() {
    return (
      <div className="large-example">
          <strong className={this.state.name.length > 0 ? 'cool-name': ''}>
            {this.state.name.length > 0 ? (
              <span>
                Hello {this.state.name}
              </span>
            ) : (
              <span>
                Who are you?
              </span>
            )}
          </strong>
          <br />
          <input value={this.state.name} onChange={this.updateName} className="input-text" />
      </div>
      // Task 1:
      // If there is not name available, say "Who are you?!"
      // Else, use default behaviour.

      // Task 2:
      // If name is present, add class "cool-name" to strong element
    );
  }

  private updateName(event: React.FormEvent<HTMLInputElement>) {
    var name: string = event.currentTarget.value;
    this.setState({
      name
    });
  }
}

export default SalutationExample;
