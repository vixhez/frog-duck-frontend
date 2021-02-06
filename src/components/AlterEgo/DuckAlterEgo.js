import { connect } from 'react-redux';
import AlterEgo from './AlterEgo';

import { fetchDuckAlterEgo } from '../../data/actions/state';

const mapStateToProps = ({ ducks, extroversionScore, generosityScore, activenessScore, colourfulnessScore }) => ({
    animals: ducks,
    extroversionScore,
    generosityScore,
    activenessScore,
    colourfulnessScore,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchDuckAlterEgo: () => dispatch(fetchDuckAlterEgo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlterEgo);