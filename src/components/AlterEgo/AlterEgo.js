import { Component } from 'react';

import DuckAlterEgo from '../AnimalAlterEgo/DuckAlterEgo';
import FrogAlterEgo from '../AnimalAlterEgo/FrogAlterEgo';

class AlterEgo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            extroversionScore: this.props.extroversionScore,
            generosityScore: this.props.generosityScore,
            activenessScore: this.props.activenessScore,
            colourfulnessScore: this.props.colourfulnessScore
        }
    }
    componentDidMount() {
        this.props.fetchDuckAlterEgo();
        this.props.fetchFrogAlterEgo();
    }

    render() {
        const { extroversionScore, generosityScore, activenessScore, colourfulnessScore } = this.props;

        return (
        <>
        <h4>Your extroversion: {extroversionScore}</h4>
        <h4>Your generosity: {generosityScore}</h4>
        <h4>Your activeness: {activenessScore}</h4>
        <h4>Your colourfulness: {colourfulnessScore}</h4>

        <h2>Your quacking alter ego...</h2>
        <DuckAlterEgo />

        <h2>Your ribbeting alter ego...</h2>
        <FrogAlterEgo />
        </>
        );
    }
}

export default AlterEgo;