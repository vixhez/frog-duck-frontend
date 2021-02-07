import { Component } from 'react';

import DuckAlterEgo from '../AnimalAlterEgo/DuckAlterEgo';
import FrogAlterEgo from '../AnimalAlterEgo/FrogAlterEgo';

class AlterEgo extends Component {

    componentDidMount() {
        this.props.fetchDuckAlterEgo();
        this.props.fetchFrogAlterEgo();
    }

    render() {
        return (
        <>
        <h2>Your quacking alter ego...</h2>
        <DuckAlterEgo />

        <h2>Your ribbeting alter ego...</h2>
        <FrogAlterEgo />
        </>
        );
    }
}

export default AlterEgo;