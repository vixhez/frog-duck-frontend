import { Component } from 'react';
// import FrogDirectory from '../FrogDirectory';
// import DuckDirectory from '../DuckDirectory';
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
        const { frogsLoaded, ducksLoaded } = this.props;

        return (
            <>
            <h1>Testing!</h1>

            { frogsLoaded && ducksLoaded ? 
            <div className="duckDirectoryParent">
                <DuckDirectory />
            </div> : null }
            </>
        );
    }
}

export default App;
