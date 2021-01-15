import { Component } from 'react';
import FrogDirectory from '../Directory/FrogDirectory';
import DuckDirectory from '../Directory/DuckDirectory';

class App extends Component {
    componentDidMount() {
        this.props.getFrogs();
        this.props.getDucks();
    }

    // componentDidMount() {
    //     this.props.getDucks();
    // }

    render() {
        return (
            <>
            <h1>Testing!</h1>

            <FrogDirectory />
            <DuckDirectory />
            </>
        );
    }
}

export default App;
