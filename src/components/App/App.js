import { Component } from 'react';

class App extends Component {
    componentDidMount() {
        this.props.getFrogs();
    }

    render() {
        return (
            <h1>Testing!</h1>
        );
    }
}

export default App;
