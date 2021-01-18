import { Component } from 'react';

import Quiz from '../Quiz';
import DuckDirectory from '../Directory/DuckDirectory';
import FrogDirectory from '../Directory/FrogDirectory';

class App extends Component {
    componentDidMount() {
        this.props.getDucks();
        this.props.getFrogs();
    }
    render() {
        const { frogsLoaded, ducksLoaded } = this.props;

        return (
            <>
            <h1>Testing!</h1>

            <Quiz />

            { ducksLoaded && frogsLoaded ? 
            <>
            <div className="duckDirectoryParent">
                <DuckDirectory />
            </div>
            <p>==============</p>
            <div className="frogDirectoryParent">
                <FrogDirectory />
            </div>
            </>
            : null }
            </>
        );
    }
}

export default App;
