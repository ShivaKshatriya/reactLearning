import * as React from 'react';
import '../styles/components/books-example.css';

interface BooksExampleProps {
    russianAuthors: Array<string>;
    frenchAuthors: Array<string>;
    guatemalaAuthors: Array<string>;
}

interface BooksExampleState {
    showRussian?: boolean;
    showFrench?: boolean;
    showGuatemala?: boolean;
}

class BooksExample extends React.Component<BooksExampleProps, BooksExampleState> {

  constructor() {
    super();
    this.state = {
        showRussian: true,
        showFrench: true,
        showGuatemala: true
    };
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  public render() {
    return (
        <div className="large-example">
            <div className="row">
                <div className="col-md-12">

                    <nav className="books-nav">
                        <label className="button">
                            Russian authors
                            <input
                                checked={this.state.showRussian}
                                type="checkbox"
                                name="showRussian"
                                onChange={this.updateCheckbox}
                            />
                        </label>
                    </nav>

                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <em>Russian Authors</em>
                    <ul>
                        {this.props.russianAuthors.map((author: string) => {
                            return (
                                <li key={author.toString()}>
                                    {author}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

      // TASKS 
      // 1. Display all frenchAuthors.
      // 2. Display all guatemalaAuthors.
      // 3. If showRussian checkbox is selected, add 'active' class to the label of the checkbox.
      // 4. If showRussian checkbox is selected, show russian authors.
      // 5. Add the same mechanism we have for Russian Authors so we can control when to show French Authors.
      // 6. Add the same mechanism we have for Russian Authors so we can control when to show Guatemala Authors.
      // 7. Add a "All" checkbox that shows all authors in one column.
      // 8. Add a "None" checkbox that hides all authors.

    );
  }

  private updateCheckbox(event: React.FormEvent<HTMLInputElement>) {
    var value: boolean = event.currentTarget.checked;
    var name: string = event.currentTarget.name;
    this.setState({
      [name]: value
    });
  }
}

export default BooksExample;
