import { Component } from 'react';

import Quiz from '../Quiz';
import DuckAlterEgo from '../DuckAlterEgo/DuckAlterEgo';
import FrogAlterEgo from '../FrogAlterEgo/FrogAlterEgo';
import DuckDirectoryButton from '../DuckDirectoryButton';
import FrogDirectoryButton from '../FrogDirectoryButton';
import DuckDirectory from '../Directory/DuckDirectory';
import FrogDirectory from '../Directory/FrogDirectory';

class App extends Component {
    componentDidMount() {
        this.props.getDucks();
        this.props.getFrogs();
    }
    render() {
        const { quizComplete, ducksLoaded, frogsLoaded, showAllDucks, showAllFrogs } = this.props;

        return !quizComplete ? (
            <>
                <h1>Testing!</h1>

                <Quiz />

                <DuckDirectoryButton />
                <FrogDirectoryButton />
            </>
        ) : (
                <>
                    { ducksLoaded && frogsLoaded ?
                        (!showAllDucks && !showAllFrogs ?
                            <>
                                <DuckAlterEgo />
                                <FrogAlterEgo />

                                <DuckDirectoryButton />
                                <FrogDirectoryButton />
                            </>
                            : (
                                showAllDucks ?
                                    <div className="duckDirectoryParent">
                                        <DuckDirectory />
                                    </div>
                                    :
                                    <div className="frogDirectoryParent">
                                        <FrogDirectory />
                                    </div>
                                )
                        )
                    : null}
                </>
            );
    }
}

export default App;
