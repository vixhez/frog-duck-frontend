import { Component } from 'react';

import Quiz from '../Quiz';
import DuckDirectoryButton from '../DuckDirectoryButton';
import FrogDirectoryButton from '../FrogDirectoryButton';
import AlterEgo from '../AlterEgo';
import HomeButton from '../HomeButton';
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
                                <AlterEgo />

                                <DuckDirectoryButton />
                                <FrogDirectoryButton />
                                <HomeButton />
                            </>
                            : (
                                showAllDucks ?
                                    <div className="duckDirectoryParent">
                                        <DuckDirectory />
                                        <HomeButton />
                                    </div>
                                    :
                                    <div className="frogDirectoryParent">
                                        <FrogDirectory />
                                        <HomeButton />
                                    </div>
                                )
                        )
                    : null}
                </>
            );
    }
}

export default App;
